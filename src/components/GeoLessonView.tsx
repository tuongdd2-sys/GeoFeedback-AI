import React, { useState } from 'react';
import { Grade, GeoLessonData, KnowledgeCard, ConceptComparison, MindmapNode, SelfCheckQuestion } from '../types';
import { GEO_LESSON_BANK, getGeoLessonData } from '../data/geoLessonBank';
import { OFFICIAL_TEXTBOOK_CHAPTERS } from '../data/curriculumData';
import { storageService } from '../services/storageService';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Compass,
  ArrowRight,
  HelpCircle,
  Award,
  Layers,
  Send,
  Loader2,
  BookmarkCheck,
  Share2,
  ExternalLink,
} from 'lucide-react';

interface GeoLessonViewProps {
  activeGrade: Grade;
  selectedLessonId: string;
  onSelectLesson: (lessonId: string) => void;
  onStartPracticeQuiz: (lessonId: string) => void;
}

interface MiniChatMessage {
  sender: 'user' | 'mentor';
  text: string;
  citedSource?: string;
  webSources?: { title: string; url: string }[];
}

export const GeoLessonView: React.FC<GeoLessonViewProps> = ({
  activeGrade,
  selectedLessonId,
  onSelectLesson,
  onStartPracticeQuiz,
}) => {
  // Find current lesson or default to first available for activeGrade
  const gradeLessons = OFFICIAL_TEXTBOOK_CHAPTERS.filter((l) => l.grade === activeGrade);
  const currentLessonMeta =
    gradeLessons.find((l) => l.lessonId === selectedLessonId) || gradeLessons[0] || {
      lessonId: 'G6-L1',
      lessonTitle: 'Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí',
      chapterTitle: 'Chương 1. Bản đồ – Phương tiện thể hiện bề mặt Trái Đất',
    };

  const lessonData: GeoLessonData = getGeoLessonData(currentLessonMeta.lessonId);

  // State for tracked understanding of cards
  const [understoodCards, setUnderstoodCards] = useState<Record<string, boolean>>({});

  // State for active card tab in section 2
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  // State for interactive Mindmap expanded nodes
  const [expandedNodes, setExpandedNodes] = useState<Record<string, boolean>>({
    'mm-601-root': true,
    'mm-601-kt': true,
    'mm-601-vt': true,
    'mm-701-root': true,
    'mm-801-root': true,
    'mm-901-root': true,
  });

  // State for Self-Check Answers
  const [selfCheckAnswers, setSelfCheckAnswers] = useState<Record<string, string>>({});
  const [selfCheckSubmitted, setSelfCheckSubmitted] = useState<Record<string, boolean>>({});

  // Embedded GeoMentor mini-chat state
  const [chatMessages, setChatMessages] = useState<MiniChatMessage[]>([
    {
      sender: 'mentor',
      text: `Chào em! Thầy là GeoMentor. Em đang ôn bài "${lessonData.lessonTitle}". Thầy sẵn sàng giải đáp trực tiếp, đúng trọng tâm mọi thắc mắc và sưu tầm thông tin chính thống từ SGK cũng như Internet. Em hãy hỏi thầy nhé!`,
      citedSource: `SGK Lịch sử và Địa lí ${lessonData.grade || activeGrade} (Phần Địa lí)`,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isAskingAI, setIsAskingAI] = useState(false);

  // Ensure selectedLessonId belongs to the active grade
  React.useEffect(() => {
    const isMatching = gradeLessons.some((l) => l.lessonId === selectedLessonId);
    if (!isMatching && gradeLessons.length > 0) {
      onSelectLesson(gradeLessons[0].lessonId);
    }
  }, [activeGrade, selectedLessonId, gradeLessons, onSelectLesson]);

  // Synchronize chat and tabs when lesson changes
  React.useEffect(() => {
    setChatMessages([
      {
        sender: 'mentor',
        text: `Chào em! Thầy là GeoMentor. Em đang ôn tập bài "${lessonData.lessonTitle}". Thầy sẵn sàng giải đáp trực tiếp, đúng trọng tâm mọi thắc mắc và sưu tầm thông tin chính thống từ SGK cũng như Internet. Em hãy hỏi thầy nhé!`,
        citedSource: `SGK Lịch sử và Địa lí ${lessonData.grade || activeGrade} (Phần Địa lí) – Kết nối tri thức`,
      },
    ]);
    setActiveCardIndex(0);
    setSelfCheckAnswers({});
    setSelfCheckSubmitted({});
  }, [lessonData.lessonId, lessonData.lessonTitle]);

  const toggleUnderstood = (cardId: string) => {
    setUnderstoodCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const toggleNode = (nodeId: string) => {
    setExpandedNodes((prev) => ({ ...prev, [nodeId]: !prev[nodeId] }));
  };

  const handleSelfCheckSelect = (qId: string, optId: string) => {
    setSelfCheckAnswers((prev) => ({ ...prev, [qId]: optId }));
    setSelfCheckSubmitted((prev) => ({ ...prev, [qId]: true }));
  };

  // Check if self-check is complete to unlock quiz button
  const totalSelfCheck = lessonData.selfCheckQuestions.length;
  const answeredCount = Object.keys(selfCheckSubmitted).length;
  const isSelfCheckDone = totalSelfCheck > 0 && answeredCount >= totalSelfCheck;

  // Embedded AI query
  const handleSendMessage = async (e?: React.FormEvent, directText?: string) => {
    if (e) e.preventDefault();
    const textToSend = directText || inputMessage;
    if (!textToSend.trim() || isAskingAI) return;

    const userText = textToSend.trim();
    setInputMessage('');
    setChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsAskingAI(true);

    try {
      const cardSummaries = lessonData.knowledgeCards
        .map((c) => `[${c.title}]: ${c.coreDefinition}. Ý chính: ${c.keyPoints.join('; ')}`)
        .join('\n');

      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userText,
          grade: lessonData.grade || activeGrade,
          currentLesson: lessonData.lessonTitle,
          lessonContext: `${lessonData.lessonTitle} (${lessonData.chapterTitle}), SGK ${lessonData.sgkPageRange}`,
          cardSummaries,
          history: chatMessages.slice(-4),
        }),
      });

      if (!response.ok) throw new Error('API request failed');
      const data = await response.json();
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'mentor',
          text: data.reply || 'Thầy đã giải đáp câu hỏi của em.',
          citedSource: data.citedSource,
          webSources: data.webSources,
        },
      ]);
    } catch {
      // Direct contextual fallback grounded in the current lesson's actual cards
      let fallbackText = '';
      const lower = userText.toLowerCase();
      const matchingCard = lessonData.knowledgeCards.find(
        (c) =>
          lower.includes(c.concept.toLowerCase()) ||
          lower.includes(c.title.toLowerCase()) ||
          c.keyPoints.some((kp) => lower.split(' ').some((w) => w.length > 3 && kp.toLowerCase().includes(w)))
      );

      if (matchingCard) {
        fallbackText = `${matchingCard.coreDefinition} ${matchingCard.keyPoints.join('. ')}`;
      } else if (lessonData.knowledgeCards[0]) {
        const c0 = lessonData.knowledgeCards[0];
        fallbackText = `Trong bài "${lessonData.lessonTitle}": ${c0.coreDefinition} ${c0.keyPoints.slice(0, 2).join('. ')}`;
      } else {
        fallbackText = `Về bài "${lessonData.lessonTitle}", em cần nắm vững mục tiêu trọng tâm: "${lessonData.objectives[0] || 'Nắm vững kiến thức SGK'}".`;
      }
      setChatMessages((prev) => [...prev, { sender: 'mentor', text: fallbackText }]);
    } finally {
      setIsAskingAI(false);
    }
  };

  // Render a recursive Mindmap node
  const renderMindmapNode = (node: MindmapNode, depth = 0) => {
    const isExpanded = !!expandedNodes[node.id];
    const hasChildren = node.children && node.children.length > 0;

    return (
      <div key={node.id} className={`ml-${depth > 0 ? 4 : 0} my-2 border-l-2 border-teal-200 pl-3`}>
        <div
          onClick={() => hasChildren && toggleNode(node.id)}
          className={`flex items-start gap-2 p-2 rounded-xl transition-all ${
            hasChildren ? 'cursor-pointer hover:bg-teal-50' : ''
          } ${depth === 0 ? 'bg-teal-900 text-white font-bold' : depth === 1 ? 'bg-teal-50 font-semibold text-teal-950' : 'bg-slate-50 text-slate-800 text-xs'}`}
        >
          {hasChildren && (
            <span className="mt-0.5 text-teal-500">
              {isExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
            </span>
          )}
          <div className="flex-1">
            <span className="text-xs sm:text-sm">{node.label}</span>
            {node.summary && (
              <p className={`text-[11px] mt-0.5 ${depth === 0 ? 'text-teal-200' : 'text-slate-500'}`}>
                {node.summary}
              </p>
            )}
          </div>
        </div>

        {hasChildren && isExpanded && (
          <div className="space-y-1.5 mt-1.5">
            {node.children!.map((child) => renderMindmapNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-bold text-teal-300 border border-teal-400/30">
              <span>BƯỚC 1/6 TRONG CHU TRÌNH HỌC TẬP</span>
              <span>•</span>
              <span>LỚP {activeGrade}</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
              {lessonData.lessonTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              {lessonData.chapterTitle} • Nguồn: SGK {lessonData.sgkPageRange} (Bản số hóa {lessonData.pdfPageRange})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onStartPracticeQuiz(lessonData.lessonId)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-md ${
                isSelfCheckDone
                  ? 'bg-amber-400 text-slate-950 hover:bg-amber-300 animate-pulse'
                  : 'bg-teal-500 text-slate-950 hover:bg-teal-400'
              }`}
            >
              <span>Làm bài luyện tập GeoQuiz</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 3-COLUMN WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: CHAPTERS & LESSONS DIRECTORY (3 cols) */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700 flex items-center gap-1.5 pb-3 border-b border-slate-100">
              <BookOpen className="h-4 w-4 text-teal-600" />
              <span>Mục lục Địa lí {activeGrade}</span>
            </h3>

            <div className="mt-3 space-y-2 max-h-[540px] overflow-y-auto pr-1">
              {gradeLessons.map((item) => {
                const isSelected = item.lessonId === currentLessonMeta.lessonId;
                const progress = storageService.getLessonProgress(item.lessonId);
                const isMastered = progress.status === 'mastered';

                return (
                  <div
                    key={item.lessonId}
                    onClick={() => onSelectLesson(item.lessonId)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                      isSelected
                        ? 'border-teal-500 bg-teal-50/70 shadow-xs'
                        : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-bold">
                      <span className="text-slate-400">{item.chapterId}</span>
                      {isMastered ? (
                        <span className="text-emerald-600 flex items-center gap-0.5">
                          <CheckCircle2 className="h-3 w-3" /> Đã làm chủ
                        </span>
                      ) : progress.status === 'quiz_taken' ? (
                        <span className="text-amber-600 font-semibold">Đã làm quiz</span>
                      ) : (
                        <span className="text-slate-400">Chưa học</span>
                      )}
                    </div>
                    <div className="text-xs font-bold text-slate-900 mt-1 line-clamp-2">
                      {item.lessonTitle}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">
                      SGK tr. {item.bookPageStart} (PDF tr. {item.pdfPageStart})
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-teal-50 rounded-2xl border border-teal-200 p-4 text-xs space-y-2 text-teal-900">
            <div className="font-bold flex items-center gap-1.5 text-teal-800">
              <Sparkles className="h-4 w-4 text-teal-600" />
              <span>Quy trình bắt buộc GeoFeedback AI 2.0</span>
            </div>
            <ol className="list-decimal pl-4 space-y-1 text-[11px] text-slate-700 font-medium">
              <li className="font-bold text-teal-800">1. Ôn tập kiến thức SGK</li>
              <li>2. Làm bài luyện tập GeoQuiz</li>
              <li>3. Chẩn đoán lỗ hổng GeoError</li>
              <li>4. Ôn tập bổ sung GeoRepair</li>
              <li>5. Kiểm tra lại GeoMastery</li>
              <li>6. Hoàn thành bài học & cấp huy hiệu</li>
            </ol>
          </div>
        </div>

        {/* CENTER COLUMN: 5-PART INTERACTIVE NOTEBOOK (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          {/* PHẦN 1: EM CẦN NẮM VỮNG ĐIỀU GÌ? */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-800 font-black text-xs">
                1
              </span>
              <h2 className="text-sm sm:text-base font-black text-slate-900">
                Em cần nắm vững điều gì? (Yêu cầu cần đạt)
              </h2>
            </div>

            <div className="space-y-2 pt-1">
              {lessonData.objectives.map((obj, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white text-[10px]">
                    ✓
                  </div>
                  <span className="text-xs text-slate-800 font-medium leading-relaxed">{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PHẦN 2: KIẾN THỨC TRỌNG TÂM (THẺ KIẾN THỨC) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-800 font-black text-xs">
                  2
                </span>
                <h2 className="text-sm sm:text-base font-black text-slate-900">
                  Kiến thức trọng tâm (Thẻ kiến thức chuẩn SGK)
                </h2>
              </div>
              <span className="text-[11px] font-bold text-slate-400">
                {lessonData.knowledgeCards.length} thẻ kiến thức
              </span>
            </div>

            {/* CARD SELECTOR TABS */}
            <div className="flex gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
              {lessonData.knowledgeCards.map((card, idx) => (
                <button
                  key={card.id}
                  onClick={() => setActiveCardIndex(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    activeCardIndex === idx
                      ? 'bg-teal-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Thẻ {card.cardIndex}: {card.concept.slice(0, 18)}...
                </button>
              ))}
            </div>

            {/* ACTIVE KNOWLEDGE CARD DISPLAY */}
            {lessonData.knowledgeCards[activeCardIndex] && (() => {
              const card = lessonData.knowledgeCards[activeCardIndex];
              const isUnderstood = !!understoodCards[card.id];

              return (
                <div className="rounded-2xl border-2 border-teal-100 bg-gradient-to-b from-teal-50/30 to-white p-5 space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-teal-700 bg-teal-100 px-2 py-0.5 rounded-md">
                        {card.id}
                      </span>
                      <h3 className="text-base font-black text-slate-900 mt-1">
                        {card.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-semibold">{card.concept}</p>
                    </div>

                    <button
                      onClick={() => toggleUnderstood(card.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        isUnderstood
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>{isUnderstood ? 'Đã hiểu bài' : 'Đánh dấu đã hiểu'}</span>
                    </button>
                  </div>

                  {/* DEFINITION & KEY POINTS */}
                  <div className="bg-white rounded-xl p-4 border border-slate-100 space-y-2 text-xs leading-relaxed text-slate-800">
                    <p className="font-semibold text-teal-900">{card.coreDefinition}</p>
                    <ul className="space-y-1.5 pt-1">
                      {card.keyPoints.map((pt, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-teal-500 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COMMON TRAP WARNING */}
                  {card.commonTrapAlert && (
                    <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
                      <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold">Cảnh báo bẫy tư duy: </span>
                        <span>{card.commonTrapAlert}</span>
                      </div>
                    </div>
                  )}

                  {/* SGK CITATION BADGE */}
                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span>
                      Căn cứ: SGK tr. {card.sgkCitation.bookPage} (PDF tr. {card.sgkCitation.pdfPage}) – {card.sgkCitation.section}
                    </span>
                    <span className="text-teal-600 font-bold">Chuẩn GDPT 2018</span>
                  </div>
                </div>
              );
            })()}
          </div>

          {/* PHẦN 3: SƠ ĐỒ GHI NHỚ TƯƠNG TÁC (INTERACTIVE MINDMAP) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-100 text-teal-800 font-black text-xs">
                  3
                </span>
                <h2 className="text-sm sm:text-base font-black text-slate-900">
                  Sơ đồ ghi nhớ tương tác (Cây kiến thức)
                </h2>
              </div>
              <span className="text-[11px] text-slate-400">Bấm vào nhánh để mở rộng</span>
            </div>

            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200/80">
              {renderMindmapNode(lessonData.mindmap)}
            </div>
          </div>

          {/* PHẦN 4: EM CÓ DỄ NHẦM KHÔNG? (BẢNG SO SÁNH TRÁNH BẪY TƯ DUY) */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-800 font-black text-xs">
                4
              </span>
              <h2 className="text-sm sm:text-base font-black text-slate-900">
                Em có dễ nhầm không? (Bảng so sánh đối chiếu)
              </h2>
            </div>

            {lessonData.comparisons.map((comp) => (
              <div key={comp.id} className="rounded-xl border border-slate-200 overflow-hidden">
                <div className="bg-slate-100 px-4 py-2 text-xs font-black text-slate-800 flex justify-between">
                  <span>Phân biệt: {comp.conceptA} vs {comp.conceptB}</span>
                  <span className="text-amber-700 font-bold">Chống nhầm lẫn</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-200">
                      <tr>
                        <th className="p-2.5">Tiêu chí</th>
                        <th className="p-2.5 text-teal-800">{comp.conceptA}</th>
                        <th className="p-2.5 text-indigo-800">{comp.conceptB}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-800">
                      {(comp.comparisonTable || comp.keyDifferences || []).map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50">
                          <td className="p-2.5 font-semibold text-slate-600">{row.criteria}</td>
                          <td className="p-2.5">{row.conceptAVal}</td>
                          <td className="p-2.5">{row.conceptBVal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-amber-50/60 p-3 text-[11px] text-amber-950 border-t border-amber-100 space-y-1">
                  <p><span className="font-bold">Lỗi học sinh hay mắc:</span> {comp.commonConfusion}</p>
                  <p className="font-bold text-teal-700">{comp.memoryRule}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PHẦN 5: TỰ KIỂM TRA TRƯỚC KHI LUYỆN TẬP */}
          <div className="bg-white rounded-2xl border-2 border-teal-200 p-5 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal-500 text-slate-950 font-black text-xs">
                  5
                </span>
                <h2 className="text-sm sm:text-base font-black text-slate-900">
                  Tự kiểm tra trước khi luyện tập ({answeredCount}/{totalSelfCheck})
                </h2>
              </div>
              <span className="text-[11px] font-bold text-teal-700">Mở khóa GeoQuiz</span>
            </div>

            <div className="space-y-4">
              {lessonData.selfCheckQuestions.map((sq, qIdx) => {
                const chosen = selfCheckAnswers[sq.id];
                const submitted = selfCheckSubmitted[sq.id];
                const isCorrect = chosen === sq.correctAnswer;

                return (
                  <div key={sq.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-xs font-bold text-slate-900">
                      Câu {qIdx + 1}: {sq.questionText}
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {sq.options.map((opt) => {
                        const isThisChosen = chosen === opt.id;
                        let optStyle = 'border-slate-200 hover:bg-white text-slate-700';

                        if (submitted) {
                          if (opt.id === sq.correctAnswer) {
                            optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                          } else if (isThisChosen) {
                            optStyle = 'border-rose-400 bg-rose-50 text-rose-900 font-bold';
                          }
                        } else if (isThisChosen) {
                          optStyle = 'border-teal-500 bg-teal-50 text-teal-950 font-bold';
                        }

                        return (
                          <button
                            key={opt.id}
                            disabled={submitted}
                            onClick={() => handleSelfCheckSelect(sq.id, opt.id)}
                            className={`flex items-start gap-2 p-2.5 rounded-lg border text-xs text-left transition-all ${optStyle}`}
                          >
                            <span className="font-black">{opt.id}.</span>
                            <span>{opt.text}</span>
                          </button>
                        );
                      })}
                    </div>

                    {submitted && (
                      <div className={`p-2.5 rounded-lg text-[11px] leading-relaxed ${
                        isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                      }`}>
                        <span className="font-bold">{isCorrect ? 'Chính xác! ' : 'Chưa đúng: '}</span>
                        {sq.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ACTION CTA: START GEOQUIZ */}
            <div className="pt-2 text-center">
              <button
                onClick={() => onStartPracticeQuiz(lessonData.lessonId)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-black text-sm hover:from-teal-400 hover:to-sky-400 shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Chuyển sang Bước 2: Bắt đầu làm bài luyện tập GeoQuiz</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: INTEGRATED SOCRATIC GEOMENTOR CHATBOT (3 cols) */}
        <div className="lg:col-span-3 space-y-4 lg:sticky lg:top-20">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs flex flex-col h-[620px]">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-slate-950 font-black">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-black text-slate-900">GeoMentor AI đồng hành</h3>
                <p className="text-[10px] text-slate-500">Gợi mở Socratic • Dẫn nguồn SGK</p>
              </div>
            </div>

            {/* MESSAGE LIST */}
            <div className="flex-1 overflow-y-auto space-y-2.5 py-3 pr-1">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2.5 rounded-xl text-xs leading-relaxed space-y-1.5 ${
                    msg.sender === 'mentor'
                      ? 'bg-slate-50 border border-slate-200 text-slate-900 mr-2 shadow-xs'
                      : 'bg-teal-600 text-white ml-2 font-medium shadow-xs'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>
                  {msg.sender === 'mentor' && msg.citedSource && (
                    <div className="pt-1.5 border-t border-slate-200/60 text-[10px] text-teal-800 font-semibold flex items-center gap-1">
                      <BookOpen className="h-3 w-3 text-teal-600 shrink-0" />
                      <span className="truncate">Nguồn: {msg.citedSource}</span>
                    </div>
                  )}
                  {msg.sender === 'mentor' && msg.webSources && msg.webSources.length > 0 && (
                    <div className="pt-1 border-t border-slate-200/60 space-y-1">
                      <span className="text-[10px] font-bold text-sky-800 block">Nguồn Internet chính thống:</span>
                      <div className="flex flex-wrap gap-1">
                        {msg.webSources.map((ws, wIdx) => (
                          <a
                            key={wIdx}
                            href={ws.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] text-sky-700 bg-sky-100/70 hover:bg-sky-200/80 px-1.5 py-0.5 rounded transition-colors group"
                            title={ws.url}
                          >
                            <ExternalLink className="h-2.5 w-2.5 shrink-0" />
                            <span className="truncate max-w-[170px]">{ws.title}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {isAskingAI && (
                <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                  <Loader2 className="h-4 w-4 animate-spin text-teal-500" />
                  <span>GeoMentor đang tra cứu Internet & SGK...</span>
                </div>
              )}
            </div>

            {/* QUICK PROMPTS */}
            <div className="py-2 border-t border-slate-100 flex flex-wrap gap-1">
              {[
                'Tóm tắt kiến thức cốt lõi của bài?',
                lessonData.comparisons && lessonData.comparisons[0]
                  ? `Phân biệt: ${lessonData.comparisons[0].conceptA.slice(0, 20)} vs ${lessonData.comparisons[0].conceptB.slice(0, 20)}?`
                  : 'Khái niệm then chốt trong bài này là gì?',
                lessonData.knowledgeCards && lessonData.knowledgeCards[0]
                  ? `Giải thích: ${lessonData.knowledgeCards[0].title.replace(/^Thẻ \d+:\s*/, '').slice(0, 24)}?`
                  : 'Bẫy trắc nghiệm hay gặp ở bài này là gì?',
                'Mẹo ghi nhớ nhanh để làm đúng bài kiểm tra?',
              ].map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    handleSendMessage(undefined, q);
                  }}
                  className="text-[10px] px-2 py-1 bg-slate-50 border border-slate-200 rounded-md text-slate-700 hover:bg-teal-50 hover:border-teal-300 transition-all text-left truncate max-w-full"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* INPUT FORM */}
            <form onSubmit={handleSendMessage} className="pt-2 flex gap-1.5 border-t border-slate-100">
              <input
                type="text"
                placeholder="Hỏi thầy về bài học này..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-1 px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-teal-500"
              />
              <button
                type="submit"
                disabled={isAskingAI || !inputMessage.trim()}
                className="px-3 py-2 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 font-bold disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
