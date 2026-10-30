import React, { useState, useRef, useEffect } from 'react';
import { StudentProfile, Grade, ChatMessage } from '../types';
import { OFFICIAL_TEXTBOOK_CHAPTERS } from '../data/curriculumData';
import { GeoMimiMascot } from './GeoMimiMascot';
import {
  MessageSquare,
  Send,
  Sparkles,
  BookOpen,
  User,
  Bot,
  HelpCircle,
  ShieldCheck,
  Volume2,
  VolumeX,
  Copy,
  Check,
  ThumbsUp,
  RotateCcw,
  Compass,
  MapPin,
  BarChart2,
  AlertCircle,
  Filter,
  Waves,
  Mountain,
  SunMedium,
  Globe,
  ExternalLink,
} from 'lucide-react';

interface GeoMentorChatbotProps {
  profile: StudentProfile;
  activeGrade: Grade;
}

export const GeoMentorChatbot: React.FC<GeoMentorChatbotProps> = ({ profile, activeGrade }) => {
  const gradeLessons = OFFICIAL_TEXTBOOK_CHAPTERS.filter((l) => l.grade === activeGrade);
  const [selectedLessonId, setSelectedLessonId] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, boolean>>({});

  const selectedLesson = gradeLessons.find((l) => l.lessonId === selectedLessonId);

  const initialWelcomeText = selectedLesson
    ? `Chào ${profile.displayName}! Thầy là GeoMentor cùng Bé Địa Cầu GeoMimi 🌍. Thầy đang sẵn sàng giải đáp mọi thắc mắc của em về "${selectedLesson.lessonTitle}" (${selectedLesson.chapterTitle}) – chuẩn SGK tr. ${selectedLesson.bookPageStart}. Em muốn hỏi về khái niệm, cách đọc bản đồ hay bẫy câu hỏi trắc nghiệm nào?`
    : `Chào ${profile.displayName}! Thầy là GeoMentor cùng Bé Địa Cầu GeoMimi 🌍 – Trợ lý gia sư AI chuyên sâu môn Địa lí Lớp ${activeGrade}. Em có thể hỏi bất kì thắc mắc nào về khái niệm, cách giải thích nguyên nhân tự nhiên, kĩ năng đọc bản đồ hay các bài tập trong SGK nhé!`;

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'mentor',
      text: initialWelcomeText,
      timestamp: Date.now(),
      citedSource: selectedLesson
        ? `${selectedLesson.bookTitle}, Bài: ${selectedLesson.lessonTitle}, tr. ${selectedLesson.bookPageStart} (PDF tr. ${selectedLesson.pdfPageStart})`
        : `SGK Lịch sử và Địa lí ${activeGrade} – Kết nối tri thức với cuộc sống (Phần Địa lí)`,
      suggestedPrompts: [
        'Kinh tuyến và vĩ tuyến khác nhau như thế nào?',
        'Vì sao khi ghi tọa độ địa lí phải viết vĩ độ trước?',
        'Làm thế nào để phân biệt sườn núi dốc và sườn núi thoải trên bản đồ?',
        'Giải thích nguyên nhân nước ta có khí hậu nhiệt đới ẩm gió mùa.',
      ],
    },
  ]);

  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle Text-To-Speech
  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 1.0;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `USER-${Date.now()}`,
      sender: 'user',
      text: text.trim(),
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const lessonContext = selectedLesson
        ? `${selectedLesson.lessonTitle} (${selectedLesson.chapterTitle}), SGK tr. ${selectedLesson.bookPageStart} (PDF tr. ${selectedLesson.pdfPageStart})`
        : `Chương trình Địa lí Lớp ${activeGrade} – Bộ sách Kết nối tri thức với cuộc sống`;

      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text.trim(),
          grade: activeGrade,
          currentLesson: lessonContext,
          activeMistakes: profile.activeMistakes,
          history: messages.slice(-4),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const mentorMsg: ChatMessage = {
          id: `MENTOR-${Date.now()}`,
          sender: 'mentor',
          text: data.reply || 'GeoMentor luôn đồng hành cùng em trong việc giải mã bản chất các hiện tượng địa lí!',
          timestamp: Date.now(),
          citedSource: data.citedSource || (selectedLesson ? `${selectedLesson.bookTitle}, tr. ${selectedLesson.bookPageStart}` : `SGK Địa lí ${activeGrade}`),
          webSources: data.webSources,
          searchQueries: data.searchQueries,
          suggestedPrompts: data.suggestedPrompts,
        };
        setMessages((prev) => [...prev, mentorMsg]);
      } else {
        throw new Error('Server error');
      }
    } catch {
      // Deterministic pedagogical fallback grounded strictly in SGK
      let fallbackText = `Đối với câu hỏi của em: Trong SGK Địa lí Lớp ${activeGrade}, kiến thức này được quy định rất rõ ràng và chuẩn xác. Em hãy nhớ đọc kĩ khái niệm cốt lõi và chú ý các từ khóa bẫy câu hỏi trắc nghiệm nhé!`;
      const lower = text.toLowerCase();
      let citation = `SGK Lịch sử và Địa lí ${activeGrade} (Phần Địa lí)`;

      if (lower.includes('kinh tuyến') || lower.includes('vĩ tuyến')) {
        fallbackText = 'Kinh tuyến là các nửa đường tròn nối liền hai cực trên quả Địa Cầu (tất cả đều dài bằng nhau). Vĩ tuyến là các vòng tròn nằm ngang vuông góc với kinh tuyến (dài nhất ở Xích đạo, nhỏ dần về hai cực). Quy tắc quốc tế luôn ghi: Vĩ độ trước, Kinh độ sau!';
        citation = 'SGK Lịch sử và Địa lí 6, Bài 1, trang 102 – 103 (PDF tr. 104 – 105)';
      } else if (lower.includes('thời tiết') || lower.includes('khí hậu')) {
        fallbackText = 'Thời tiết là trạng thái khí quyển tại một thời điểm ngắn trong ngày (nhiệt độ, mây, mưa hôm nay). Khí hậu là sự lặp đi lặp lại của tình hình thời tiết ở một khu vực nhất định trong thời gian dài (nhiều năm) và đã trở thành quy luật!';
        citation = 'SGK Lịch sử và Địa lí 6, Bài 17, trang 150 (PDF tr. 152)';
      } else if (lower.includes('xa-ha-ra') || lower.includes('châu phi')) {
        fallbackText = 'Hoang mạc Xa-ha-ra lan sát ra biển do 3 nguyên nhân kết hợp: 1. Nằm giữa 2 chí tuyến chịu áp cao chí tuyến khô nóng; 2. Lục địa hình khối rộng lớn ít vịnh ăn sâu; 3. Dòng biển lạnh Ca-na-ri chảy ven bờ tây bắc làm không khí khô lạnh khó mưa.';
        citation = 'SGK Lịch sử và Địa lí 7, Bài 9, trang 129 (PDF tr. 131)';
      } else if (lower.includes('lãnh hải') || lower.includes('biển đông')) {
        fallbackText = 'Theo Luật Biển Việt Nam năm 2012: Lãnh hải rộng 12 hải lí tính từ đường cơ sở, ranh giới ngoài là biên giới quốc gia trên biển. Vùng đặc quyền kinh tế rộng 200 hải lí tính từ đường cơ sở.';
        citation = 'SGK Lịch sử và Địa lí 8, Bài 11, trang 149 (PDF tr. 151)';
      } else if (lower.includes('dân số') || lower.includes('dân tộc')) {
        fallbackText = 'Nước ta có 54 dân tộc, người Kinh chiếm khoảng 85% cư trú chủ yếu ở đồng bằng ven biển. Dân số năm 2024 đạt 101,3 triệu người. Nước ta đang ở giai đoạn cơ cấu dân số vàng và bước vào xu hướng già hoá.';
        citation = 'SGK Lịch sử và Địa lí 9, Bài 1, trang 117 – 118 (PDF tr. 119 – 120)';
      }

      const fallbackMsg: ChatMessage = {
        id: `MENTOR-${Date.now()}`,
        sender: 'mentor',
        text: fallbackText,
        timestamp: Date.now(),
        citedSource: citation,
        suggestedPrompts: [
          'Thầy cho em ví dụ cụ thể hơn được không?',
          'Cách ghi nhớ nhanh mẹo này là gì ạ?',
          'Bẫy trắc nghiệm hay gặp ở phần này là gì?',
        ],
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'mentor',
        text: initialWelcomeText,
        timestamp: Date.now(),
        citedSource: selectedLesson
          ? `${selectedLesson.bookTitle}, Bài: ${selectedLesson.lessonTitle}, tr. ${selectedLesson.bookPageStart}`
          : `SGK Lịch sử và Địa lí ${activeGrade} (Phần Địa lí) & Giáo trình Địa lý tự nhiên đại cương I`,
        suggestedPrompts: [
          'Vì sao lại có lực Coriolis và hệ quả của nó?',
          'Hồ móng ngựa (oxbow lake) hình thành như thế nào?',
          'Cơ chế hình thành địa hình Karst và thạch nhũ đá vôi?',
          'Tại sao có hiện tượng triều cường và triều kém?',
        ],
      },
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* HEADER BANNER WITH CUTE GEOMIMI MASCOT */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#0f3d59] to-[#0f4c5c] p-5 sm:p-6 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <GeoMimiMascot size="md" mood="explorer" className="shrink-0" />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black">
                  6. Chatbot GeoMentor AI – Bé Địa Cầu GeoMimi 🌍
                </h1>
                <span className="rounded-full bg-teal-400/25 px-2.5 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-300/30">
                  Cập nhật Địa danh 2026 & Chuyên sâu HSG
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Trả lời <strong className="text-teal-300 font-semibold">trực tiếp, đúng trọng tâm</strong> – Cập nhật địa danh hành chính mới nhất giai đoạn <strong>2024 – 2026</strong> (Nghị quyết UBTVQH), giải thích chuyên sâu cơ chế địa lí nâng cao (ENSO, Karst ngầm, Hoàn lưu Walker, Dòng xiết Jet Stream) và tra cứu Internet chính thống (Tổng cục KTTV, Tổng cục Thống kê, Cổng thông tin Chính phủ, Viện Địa lý VAST).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={handleResetChat}
              className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Đoạn chat mới</span>
            </button>
          </div>
        </div>

        {/* TOPIC / LESSON SELECTOR FILTER */}
        <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-300 font-bold flex items-center gap-1">
            <Filter className="h-3.5 w-3.5 text-teal-300" />
            <span>Phạm vi bài học:</span>
          </span>
          <select
            value={selectedLessonId}
            onChange={(e) => setSelectedLessonId(e.target.value)}
            className="rounded-xl bg-[#0b1d30] border border-sky-800 text-white px-3 py-1.5 text-xs font-semibold focus:outline-none focus:border-teal-400 max-w-full sm:max-w-md truncate"
          >
            <option value="all">Toàn bộ chương trình Địa lí Lớp {activeGrade} ({gradeLessons.length} bài)</option>
            {gradeLessons.map((l) => (
              <option key={l.lessonId} value={l.lessonId}>
                {l.lessonTitle} (SGK tr. {l.bookPageStart})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* QUICK QUESTION CATEGORIES: ADVANCED & 2026 ADMINISTRATIVE UPDATES */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          {
            label: 'Địa danh hành chính 2026',
            icon: '🏛️',
            badge: 'Mới 2026',
            prompt: 'Cập nhật các thành phố mới thành lập như TP Bến Cát, TP Gò Công và việc sắp xếp sáp nhập xã phường giai đoạn 2024-2026 theo Nghị quyết của Quốc hội và UBTVQH?',
          },
          {
            label: 'Hiện tượng ENSO & Hạn mặn',
            icon: '🌊',
            badge: 'Nâng cao',
            prompt: 'Bản chất cơ chế của hiện tượng ENSO, El Niño và La Niña là gì? Tác động như thế nào đến thời tiết, bão và hạn mặn ở Việt Nam?',
          },
          {
            label: 'Hang Sơn Đoòng & Karst',
            icon: '⛰️',
            badge: 'Chuyên sâu',
            prompt: 'Cơ chế hóa học thuận nghịch của quá trình Karst là gì và vì sao Hang Sơn Đoòng lại có rừng nguyên sinh cùng hệ thời tiết độc lập trong hang?',
          },
          {
            label: 'Hoàn lưu Hadley & Jet Stream',
            icon: '🌪️',
            badge: 'Vật lí khí quyển',
            prompt: 'Giải thích mô hình hoàn lưu ba ô Hadley, Ferrel, Polar và vai trò của Dòng xiết gió tây Jet Stream trên cao đối với các đợt không khí lạnh cực?',
          },
          {
            label: 'Dải hội tụ nhiệt đới (ITCZ)',
            icon: '🌧️',
            badge: 'Khí hậu học',
            prompt: 'Dải hội tụ nhiệt đới ITCZ là gì và vì sao mùa bão ở Việt Nam lại lùi dần từ Bắc vào Nam theo chuyển động biểu kiến của Mặt Trời?',
          },
          {
            label: 'Bất đối xứng Trường Sơn',
            icon: '⛰️',
            badge: 'Địa mạo học',
            prompt: 'Tại sao có quy luật bất đối xứng và đối lập thời tiết đặc sắc giữa sườn Đông và sườn Tây dãy Trường Sơn: "bên nắng đốt, bên mưa quây"?',
          },
          {
            label: 'Sụt lún & Xâm nhập mặn ĐBSCL',
            icon: '🌾',
            badge: 'Biến đổi khí hậu',
            prompt: 'Phân tích tam giác nguy cơ sụt lún đất do khai thác nước ngầm, thiếu phù sa thượng nguồn Mekong, xâm nhập mặn ở ĐBSCL và tư duy Thuận thiên theo NQ 120?',
          },
          {
            label: 'Lực Coriolis & Gió Tín phong',
            icon: '🌐',
            badge: 'Động lực học',
            prompt: 'Vì sao lại có lực Coriolis, công thức tính toán và nó làm lệch hướng chuyển động của gió Tín phong, gió mùa như thế nào?',
          },
        ].map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(item.prompt)}
            className="p-3 rounded-2xl border border-slate-200 bg-white hover:border-teal-400 hover:bg-teal-50/40 text-left transition-all shadow-xs group relative flex flex-col justify-between"
          >
            <div className="flex items-center justify-between gap-1 w-full mb-1">
              <span className="text-base">{item.icon}</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
                {item.badge}
              </span>
            </div>
            <div className="text-xs font-black text-slate-800 group-hover:text-teal-900 leading-tight">
              {item.label}
            </div>
          </button>
        ))}
      </div>

      {/* CHAT WINDOW */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col h-[580px]">
        {/* Messages scroll area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/50">
          {messages.map((m) => {
            const isMentor = m.sender === 'mentor';
            const hasFeedback = feedbackGiven[m.id];

            return (
              <div
                key={m.id}
                className={`flex gap-3 ${isMentor ? 'justify-start' : 'justify-end'}`}
              >
                {isMentor && (
                  <div className="shrink-0 mt-0.5">
                    <GeoMimiMascot size="sm" mood="happy" />
                  </div>
                )}

                <div
                  className={`rounded-2xl p-4 sm:p-5 max-w-xl space-y-2.5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    isMentor
                      ? 'bg-white border border-slate-200 text-slate-900'
                      : 'bg-gradient-to-r from-teal-500 to-sky-500 text-slate-950 font-semibold'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {/* Cited textbook source */}
                  {isMentor && m.citedSource && (
                    <div className="pt-2 border-t border-slate-100 text-[11px] font-semibold text-teal-800 flex items-center justify-between gap-2 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5 text-teal-600 shrink-0" />
                        <span>Căn cứ nguồn: {m.citedSource}</span>
                      </span>

                      {/* Tool buttons: Listen, Copy, Feedback */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleSpeak(m.text)}
                          title="Nghe đọc giọng AI"
                          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 hover:text-teal-700 transition-colors"
                        >
                          {isSpeaking ? <VolumeX className="h-3.5 w-3.5 text-rose-500" /> : <Volume2 className="h-3.5 w-3.5" />}
                        </button>
                        <button
                          onClick={() => handleCopy(m.id, m.text)}
                          title="Sao chép nội dung"
                          className="p-1 rounded-md hover:bg-slate-100 text-slate-500 hover:text-teal-700 transition-colors"
                        >
                          {copiedId === m.id ? <Check className="h-3.5 w-3.5 text-emerald-600" /> : <Copy className="h-3.5 w-3.5" />}
                        </button>
                        <button
                          onClick={() => setFeedbackGiven((prev) => ({ ...prev, [m.id]: true }))}
                          title="Dễ hiểu"
                          className={`p-1 rounded-md transition-colors ${hasFeedback ? 'text-emerald-600 font-bold' : 'text-slate-400 hover:text-teal-700'}`}
                        >
                          <ThumbsUp className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Web Sources from official verified Internet search */}
                  {isMentor && m.webSources && m.webSources.length > 0 && (
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-sky-800">
                        <Globe className="h-3.5 w-3.5 text-sky-600 shrink-0" />
                        <span>Nguồn chính thống đối chiếu trực tuyến:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {m.webSources.map((ws, wIdx) => (
                          <a
                            key={wIdx}
                            href={ws.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[11px] font-medium text-sky-800 hover:text-sky-950 transition-colors max-w-full"
                            title={ws.url}
                          >
                            <span className="truncate max-w-[260px]">{ws.title || ws.url}</span>
                            <ExternalLink className="h-3 w-3 shrink-0 text-sky-500" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Search Queries Transparency */}
                  {isMentor && m.searchQueries && m.searchQueries.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1 text-[10px] text-slate-500 pt-0.5">
                      <span className="font-semibold text-slate-600">Từ khóa tra cứu:</span>
                      {m.searchQueries.map((q, qIdx) => (
                        <span key={qIdx} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono text-[10px]">
                          "{q}"
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Suggested prompts buttons */}
                  {isMentor && m.suggestedPrompts && m.suggestedPrompts.length > 0 && (
                    <div className="pt-2 space-y-1.5">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Gợi ý câu hỏi tiếp theo:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {m.suggestedPrompts.map((p, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleSendMessage(p)}
                            className="text-[11px] font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200 px-3 py-1.5 rounded-xl transition-colors text-left"
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {!isMentor && (
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-600 text-white shrink-0 mt-0.5 shadow-xs">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start items-center">
              <GeoMimiMascot size="sm" mood="thinking" />
              <div className="rounded-2xl p-4 bg-white border border-slate-200 text-xs text-slate-600 flex items-center gap-2.5 shadow-xs">
                <Sparkles className="h-4 w-4 text-teal-500 animate-spin" />
                <span>Bé GeoMimi đang tra cứu SGK, Giáo trình và đối chiếu dữ liệu Internet chính thống...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* INPUT FORM */}
        <div className="p-3 sm:p-4 bg-white border-t border-slate-200">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Nhập câu hỏi địa lí (ví dụ: Vì sao khí hậu nước ta có tính chất gió mùa?)..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 rounded-2xl border border-slate-300 px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-400 hover:to-sky-400 disabled:opacity-40 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all shrink-0"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Hỏi GeoMentor</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
