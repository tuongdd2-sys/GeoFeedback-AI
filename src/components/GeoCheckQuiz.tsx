import React, { useState, useEffect } from 'react';
import {
  Grade,
  QuestionItem,
  StudentConfidence,
  StudentAnswerRecord,
  AssessmentSession,
  ErrorDiagnostic,
} from '../types';
import { storageService } from '../services/storageService';
import { diagnosticService } from '../services/diagnosticService';
import { getQuestionsForLessonWithSynthesis } from '../data/expandedQuestionBank';
import { VisualAssetViewer } from './VisualAssetViewer';
import { GeoMimiMascot } from './GeoMimiMascot';
import confetti from 'canvas-confetti';
import {
  Stethoscope,
  ChevronLeft,
  ChevronRight,
  Send,
  HelpCircle,
  Bookmark,
  CheckCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  XCircle,
  PenTool,
  Check,
  X,
  FileText,
  Compass,
} from 'lucide-react';

interface GeoCheckQuizProps {
  activeGrade: Grade;
  lessonId?: string;
  lessonTitle?: string;
  isPostTest?: boolean;
  onFinishQuiz: (session: AssessmentSession) => void;
}

export const GeoCheckQuiz: React.FC<GeoCheckQuizProps> = ({
  activeGrade,
  lessonId,
  lessonTitle = 'Chẩn đoán năng lực Địa lí THCS',
  isPostTest = false,
  onFinishQuiz,
}) => {
  const [questions, setQuestions] = useState<QuestionItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Student choices & confidence
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [userConfidences, setUserConfidences] = useState<Record<string, StudentConfidence>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});

  // Sub-statements for 4-part true_false questions: Record<questionId, Record<subId, 'D' | 'S'>>
  const [subAnswers, setSubAnswers] = useState<Record<string, Record<string, 'D' | 'S'>>>({});

  // Short answer inputs: Record<questionId, string>
  const [shortAnswerInputs, setShortAnswerInputs] = useState<Record<string, string>>({});

  // Timer & state
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const allQuestions = storageService.getQuestions();
    let pool = allQuestions.filter((q) => q.grade === activeGrade);

    if (lessonId) {
      const lessonQuestions = pool.filter((q) => q.lessonId === lessonId);
      if (lessonQuestions.length >= 3) {
        pool = lessonQuestions;
      } else {
        const enriched = getQuestionsForLessonWithSynthesis(activeGrade, lessonId);
        pool = enriched.length > 0 ? enriched : (lessonQuestions.length > 0 ? lessonQuestions : pool);
      }
    }

    // Ensure a rich mix of question types if available
    const shuffled = [...pool].sort(() => Math.random() - 0.5).slice(0, 10);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setUserConfidences({});
    setFlagged({});
    setSubAnswers({});
    setShortAnswerInputs({});
    setElapsedSeconds(0);
  }, [activeGrade, lessonId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(userAnswers).filter((k) => userAnswers[k] && userAnswers[k].trim() !== '').length;

  const handleSelectOption = (qId: string, optId: string) => {
    setUserAnswers((prev) => ({ ...prev, [qId]: optId }));
    if (!userConfidences[qId]) {
      setUserConfidences((prev) => ({ ...prev, [qId]: 'very_confident' }));
    }
  };

  const handleToggleBinaryTrueFalse = (qId: string, val: 'D' | 'S') => {
    setUserAnswers((prev) => ({ ...prev, [qId]: val }));
    if (!userConfidences[qId]) {
      setUserConfidences((prev) => ({ ...prev, [qId]: 'very_confident' }));
    }
  };

  const handleSubStatementChange = (qId: string, subId: string, val: 'D' | 'S', totalSubs: number) => {
    setSubAnswers((prev) => {
      const currentSubs = { ...(prev[qId] || {}), [subId]: val };
      // Format as string "a:D,b:S,c:D,d:S"
      const serialized = Object.entries(currentSubs)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => `${k}:${v}`)
        .join(',');
      
      setUserAnswers((uPrev) => ({ ...uPrev, [qId]: serialized }));
      return { ...prev, [qId]: currentSubs };
    });

    if (!userConfidences[qId]) {
      setUserConfidences((prev) => ({ ...prev, [qId]: 'very_confident' }));
    }
  };

  const handleShortAnswerChange = (qId: string, text: string) => {
    setShortAnswerInputs((prev) => ({ ...prev, [qId]: text }));
    setUserAnswers((prev) => ({ ...prev, [qId]: text }));
    if (text.trim() && !userConfidences[qId]) {
      setUserConfidences((prev) => ({ ...prev, [qId]: 'very_confident' }));
    }
  };

  const handleSelectConfidence = (qId: string, conf: StudentConfidence) => {
    setUserConfidences((prev) => ({ ...prev, [qId]: conf }));
  };

  const handleSubmit = async () => {
    if (answeredCount < questions.length) {
      if (!window.confirm(`Em còn ${questions.length - answeredCount} câu chưa hoàn thành. Em có chắc muốn nộp bài để AI chẩn đoán ngay không?`)) {
        return;
      }
    }

    setIsSubmitting(true);

    let correctCount = 0;
    const answerRecords: StudentAnswerRecord[] = [];
    const diagnostics: ErrorDiagnostic[] = [];

    for (const q of questions) {
      const chosen = userAnswers[q.questionId] || 'CHƯA_CHỌN';
      const conf = userConfidences[q.questionId] || 'very_confident';
      const isCorrect = diagnosticService.checkIsCorrect(q, chosen);

      if (isCorrect) correctCount += 1;

      const diag = await diagnosticService.diagnoseStudentAnswer(q, chosen, conf);
      diagnostics.push(diag);

      answerRecords.push({
        questionId: q.questionId,
        chosenAnswer: chosen,
        isCorrect,
        confidence: conf,
        timeSpentSeconds: Math.floor(elapsedSeconds / Math.max(questions.length, 1)),
      });
    }

    const calculatedScore = Math.round((correctCount / Math.max(questions.length, 1)) * 100);

    const session: AssessmentSession = {
      sessionId: `ASSESS-${Date.now()}`,
      timestamp: Date.now(),
      grade: activeGrade,
      lessonId: lessonId || currentQ?.lessonId || 'G6-ALL',
      lessonTitle: lessonTitle || currentQ?.lessonTitle || 'Khảo sát năng lực Địa lí',
      totalQuestions: questions.length,
      correctCount,
      score: calculatedScore,
      diagnostics,
      answers: answerRecords,
      isPostTest,
    };

    storageService.saveSession(session);
    
    // Trigger celebratory confetti when finishing quiz
    try {
      confetti({
        particleCount: calculatedScore >= 80 ? 110 : 70,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2dd4bf', '#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'],
      });
    } catch {}

    setIsSubmitting(false);
    onFinishQuiz(session);
  };

  if (!currentQ) {
    return (
      <div className="rounded-2xl bg-white p-8 border border-slate-200 text-center">
        <GeoMimiMascot mood="thinking" size="md" className="mx-auto mb-3" />
        <h3 className="text-base font-bold text-slate-800">Đang chuẩn bị đề kiểm tra chẩn đoán...</h3>
        <p className="text-xs text-slate-500 mt-1">Đang chọn lọc câu hỏi theo chương trình SGK chuẩn.</p>
      </div>
    );
  }

  // Format Helper Labels
  const getFormatBadge = (type: string) => {
    switch (type) {
      case 'short_answer':
        return {
          label: 'Trả lời ngắn',
          color: 'bg-purple-100 text-purple-800 border-purple-200',
          icon: <PenTool className="h-3 w-3" />,
        };
      case 'true_false':
        return {
          label: 'Đúng / Sai',
          color: 'bg-amber-100 text-amber-800 border-amber-200',
          icon: <CheckCircle2 className="h-3 w-3" />,
        };
      default:
        return {
          label: 'Trắc nghiệm 4 lựa chọn',
          color: 'bg-sky-100 text-sky-800 border-sky-200',
          icon: <HelpCircle className="h-3 w-3" />,
        };
    }
  };

  const formatBadge = getFormatBadge(currentQ.questionType);

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* HEADER TOP BAR */}
      <div className="rounded-2xl border border-sky-100 bg-white p-4 shadow-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="rounded-lg bg-teal-100 px-2.5 py-1 text-xs font-black text-teal-900 flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-teal-700 animate-spin" style={{ animationDuration: '8s' }} />
            Câu {currentIndex + 1} / {questions.length}
          </span>
          <span className="text-xs font-bold text-slate-700 truncate max-w-xs">
            {currentQ.lessonTitle}
          </span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold border ${formatBadge.color}`}>
            {formatBadge.icon}
            {formatBadge.label}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-teal-600" />
            {Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')}
          </span>

          <button
            onClick={() => setFlagged((prev) => ({ ...prev, [currentQ.questionId]: !prev[currentQ.questionId] }))}
            className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 font-semibold transition-all ${
              flagged[currentQ.questionId]
                ? 'border-amber-400 bg-amber-50 text-amber-800'
                : 'border-slate-200 text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Xem lại</span>
          </button>
        </div>
      </div>

      {/* QUESTION NAVIGATOR DOTS */}
      <div className="flex gap-1.5 overflow-x-auto p-2 bg-white rounded-xl border border-slate-200 items-center">
        {questions.map((q, idx) => {
          const isAnswered = Boolean(userAnswers[q.questionId] && userAnswers[q.questionId].trim() !== '');
          const isCurrent = idx === currentIndex;
          const isFlagged = flagged[q.questionId];

          return (
            <button
              key={q.questionId}
              onClick={() => setCurrentIndex(idx)}
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold shrink-0 transition-all ${
                isCurrent
                  ? 'bg-teal-500 text-slate-950 ring-2 ring-teal-300 shadow-xs'
                  : isFlagged
                  ? 'bg-amber-100 text-amber-800 border border-amber-300'
                  : isAnswered
                  ? 'bg-sky-100 text-sky-800'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
        <div className="ml-auto text-xs text-slate-400 font-medium hidden sm:block shrink-0 pl-2">
          Đã làm: <strong className="text-teal-700 font-bold">{answeredCount}</strong>/{questions.length}
        </div>
      </div>

      {/* QUESTION BODY */}
      <div className="rounded-2xl border border-sky-100 bg-white p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-bold uppercase tracking-wider">{currentQ.chapterTitle}</span>
          <span className="font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
            Mục tiêu: {currentQ.learningObjective}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-2.5">
            <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-teal-50 text-teal-800 text-xs font-black shrink-0 border border-teal-200">
              Q
            </span>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.questionText}
            </h3>
          </div>
        </div>

        {/* Visual Asset if Present */}
        {currentQ.visualData && (
          <VisualAssetViewer visualData={currentQ.visualData} />
        )}

        {/* ======================= FORMAT 1: SHORT ANSWER ======================= */}
        {currentQ.questionType === 'short_answer' && (
          <div className="space-y-3 pt-2 bg-purple-50/40 p-4 rounded-xl border border-purple-100">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                <PenTool className="h-3.5 w-3.5 text-purple-600" />
                Nhập câu trả lời của em:
              </label>
              {currentQ.shortAnswerUnit && (
                <span className="text-[11px] font-semibold text-purple-700 bg-purple-100/80 px-2 py-0.5 rounded-md">
                  Đơn vị: {currentQ.shortAnswerUnit}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={userAnswers[currentQ.questionId] || ''}
                onChange={(e) => handleShortAnswerChange(currentQ.questionId, e.target.value)}
                placeholder={currentQ.shortAnswerPlaceholder || 'Nhập từ khóa hoặc số liệu chính xác theo SGK...'}
                className="flex-1 px-4 py-3 bg-white border border-purple-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent placeholder:text-slate-400 shadow-2xs"
              />
              {userAnswers[currentQ.questionId] && (
                <button
                  type="button"
                  onClick={() => handleShortAnswerChange(currentQ.questionId, '')}
                  className="px-3 py-3 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-600 text-xs font-bold hover:bg-slate-50"
                  title="Xóa trắng"
                >
                  Xóa
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-purple-800/80 bg-white/70 p-2.5 rounded-lg border border-purple-100">
              <Sparkles className="h-4 w-4 text-purple-600 shrink-0" />
              <span>
                Gợi ý từ GeoMimi: Nhập trực tiếp số đo, địa danh hoặc thuật ngữ ngắn gọn (ví dụ: <em>12 hải lí</em>, <em>6 378 km</em>, <em>feralit</em>).
              </span>
            </div>
          </div>
        )}

        {/* ======================= FORMAT 2: TRUE / FALSE (4 SUB-STATEMENTS) ======================= */}
        {currentQ.questionType === 'true_false' && currentQ.subStatements && currentQ.subStatements.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="text-xs font-bold text-amber-900 bg-amber-50/70 p-2.5 rounded-xl border border-amber-200/80 flex items-center justify-between">
              <span>Đánh giá từng nhận định dưới đây là ĐÚNG hay SAI:</span>
              <span className="text-[11px] font-semibold text-amber-800">
                Đã chọn: {Object.keys(subAnswers[currentQ.questionId] || {}).length}/{currentQ.subStatements.length} ý
              </span>
            </div>

            <div className="space-y-2.5">
              {currentQ.subStatements.map((sub) => {
                const currentChoice = subAnswers[currentQ.questionId]?.[sub.id];
                return (
                  <div
                    key={sub.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      currentChoice
                        ? 'border-amber-300 bg-amber-50/30'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-start gap-2.5 flex-1">
                        <span className="font-black text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0 mt-0.5 uppercase">
                          {sub.id}
                        </span>
                        <p className="text-sm text-slate-800 leading-snug font-medium">
                          {sub.statement}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                        <button
                          type="button"
                          onClick={() => handleSubStatementChange(currentQ.questionId, sub.id, 'D', currentQ.subStatements!.length)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition-all ${
                            currentChoice === 'D'
                              ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300 hover:text-emerald-700'
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" />
                          <span>Đúng</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSubStatementChange(currentQ.questionId, sub.id, 'S', currentQ.subStatements!.length)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition-all ${
                            currentChoice === 'S'
                              ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-rose-300 hover:text-rose-700'
                          }`}
                        >
                          <X className="h-3.5 w-3.5" />
                          <span>Sai</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ======================= FORMAT 2B: BINARY TRUE / FALSE ======================= */}
        {currentQ.questionType === 'true_false' && (!currentQ.subStatements || currentQ.subStatements.length === 0) && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[
              { id: 'D', label: 'ĐÚNG', desc: 'Nhận định trên là chính xác theo SGK', icon: <Check className="h-5 w-5" />, color: 'emerald' },
              { id: 'S', label: 'SAI', desc: 'Nhận định trên có thông tin chưa đúng', icon: <X className="h-5 w-5" />, color: 'rose' },
            ].map((item) => {
              const isSelected = userAnswers[currentQ.questionId] === item.id;
              const isEmerald = item.color === 'emerald';
              return (
                <button
                  key={item.id}
                  onClick={() => handleToggleBinaryTrueFalse(currentQ.questionId, item.id as 'D' | 'S')}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? isEmerald
                        ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-400'
                        : 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-400'
                      : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-black ${
                        isSelected
                          ? isEmerald
                            ? 'bg-emerald-600 text-white'
                            : 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.icon}
                    </span>
                    <span className="font-black text-sm">{item.label}</span>
                  </div>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </button>
              );
            })}
          </div>
        )}

        {/* ======================= FORMAT 3: MULTIPLE CHOICE ======================= */}
        {currentQ.questionType !== 'short_answer' && currentQ.questionType !== 'true_false' && (
          <div className="space-y-2.5 pt-2">
            {currentQ.options.map((opt) => {
              const isSelected = userAnswers[currentQ.questionId] === opt.id;
              return (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(currentQ.questionId, opt.id)}
                  className={`w-full text-left p-4 rounded-xl border flex items-center gap-3 transition-all ${
                    isSelected
                      ? 'border-teal-500 bg-teal-50/70 text-teal-950 ring-1 ring-teal-500 font-medium shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800'
                  }`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-bold shrink-0 ${
                      isSelected ? 'bg-teal-500 text-slate-950 font-black' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {opt.id}
                  </span>
                  <span className="text-sm leading-snug">{opt.text}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* CONFIDENCE SELECTOR (CĂN CỨ CHO CHẨN ĐOÁN LỖI SAI) */}
        {userAnswers[currentQ.questionId] && userAnswers[currentQ.questionId].trim() !== '' && (
          <div className="mt-4 pt-3 border-t border-slate-100 bg-sky-50/50 p-3.5 rounded-xl border border-sky-100">
            <span className="text-xs font-bold text-slate-700 block mb-2">
              Em tự đánh giá mức độ chắc chắn của câu trả lời này:
            </span>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'very_confident', label: 'Rất tự tin', desc: 'Em nắm chắc kiến thức' },
                { id: 'hesitant', label: 'Phân vân', desc: 'Em còn băn khoăn 2 đáp án' },
                { id: 'guessing', label: 'Đoán mò', desc: 'Em chưa hiểu rõ bài này' },
              ].map((c) => {
                const isSelected = (userConfidences[currentQ.questionId] || 'very_confident') === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => handleSelectConfidence(currentQ.questionId, c.id as StudentConfidence)}
                    className={`p-2 rounded-lg text-left border transition-all ${
                      isSelected
                        ? 'border-teal-500 bg-white text-teal-950 ring-1 ring-teal-400 font-bold'
                        : 'border-slate-200 bg-white/70 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <div>{c.label}</div>
                    <div className="text-[10px] text-slate-400 font-normal">{c.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* BOTTOM NAVIGATOR */}
        <div className="flex items-center justify-between pt-5 border-t border-slate-100">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((prev) => prev - 1)}
            className="px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Câu trước</span>
          </button>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((prev) => prev + 1)}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold flex items-center gap-1 shadow-xs"
            >
              <span>Câu tiếp theo</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              disabled={isSubmitting}
              onClick={handleSubmit}
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md transition-all"
            >
              <Send className="h-3.5 w-3.5" />
              <span>{isSubmitting ? 'Đang phân tích AI...' : 'Nộp bài & Giải mã Error DNA'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default GeoCheckQuiz;
