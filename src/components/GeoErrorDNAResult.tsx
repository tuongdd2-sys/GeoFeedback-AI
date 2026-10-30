import React, { useState, useEffect } from 'react';
import { AssessmentSession, ErrorDiagnostic, QuestionItem, ErrorCode } from '../types';
import { ERROR_CODE_REGISTRY } from '../data/curriculumData';
import { storageService } from '../services/storageService';
import confetti from 'canvas-confetti';
import {
  Layers,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Lightbulb,
  ArrowRight,
  BookOpen,
  RotateCcw,
  Sparkles,
  Map,
  ShieldCheck,
} from 'lucide-react';

interface GeoErrorDNAResultProps {
  session: AssessmentSession;
  onNavigateTab: (tab: string, extra?: any) => void;
  onRetakeQuiz: () => void;
}

export const GeoErrorDNAResult: React.FC<GeoErrorDNAResultProps> = ({
  session,
  onNavigateTab,
  onRetakeQuiz,
}) => {
  const [diagnosticsState, setDiagnosticsState] = useState<ErrorDiagnostic[]>(session.diagnostics);
  const [selectedVerificationAnswers, setSelectedVerificationAnswers] = useState<Record<string, string>>({});
  const [verifiedMap, setVerifiedMap] = useState<Record<string, boolean>>({});

  const allQuestions = storageService.getQuestions();

  const wrongDiagnostics = diagnosticsState.filter((d) => !d.isCorrect);
  const correctCount = session.correctCount;
  const totalCount = session.totalQuestions;

  // Celebrate quiz completion with confetti
  useEffect(() => {
    try {
      if (session.score >= 80) {
        // High score celebratory double-cannon fireworks
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2dd4bf', '#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'],
        });
        const timer = setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0.05, y: 0.7 },
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 0.95, y: 0.7 },
          });
        }, 250);
        return () => clearTimeout(timer);
      } else if (session.score >= 50) {
        // Great attempt confetti
        confetti({
          particleCount: 75,
          spread: 65,
          origin: { y: 0.65 },
          colors: ['#2dd4bf', '#38bdf8', '#fbbf24'],
        });
      } else {
        // Warm encouraging sparkle
        confetti({
          particleCount: 45,
          spread: 50,
          origin: { y: 0.7 },
          colors: ['#38bdf8', '#2dd4bf', '#a78bfa'],
        });
      }
    } catch {}
  }, [session.sessionId, session.score]);

  const handleSelectVerification = (qId: string, optId: string) => {
    if (verifiedMap[qId]) return;
    setSelectedVerificationAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const handleCheckVerification = (diag: ErrorDiagnostic) => {
    const chosen = selectedVerificationAnswers[diag.questionId];
    if (!chosen || !diag.verificationQuestion) return;

    const isMatch = chosen.toUpperCase() === diag.verificationQuestion.correctAnswer.toUpperCase();
    setVerifiedMap((prev) => ({ ...prev, [diag.questionId]: isMatch }));

    if (isMatch) {
      try {
        confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      } catch (e) {}

      storageService.resolveMistake(diag.questionId);

      setDiagnosticsState((prev) =>
        prev.map((d) =>
          d.questionId === diag.questionId
            ? { ...d, verificationStatus: 'passed' }
            : d
        )
      );
    }
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* SCORE BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-teal-400/20 px-3 py-1 text-xs font-bold text-teal-300 border border-teal-300/30 mb-2">
              GeoError DNA • Kết quả chẩn đoán năng lực
            </span>
            <h1 className="text-2xl sm:text-3xl font-black">
              {session.lessonTitle}
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Đúng {correctCount}/{totalCount} câu • Thang điểm chuẩn: {session.score}/100
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xs rounded-2xl p-4 border border-white/20">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-amber-300">
                {session.score}
              </div>
              <div className="text-[11px] font-semibold text-slate-200">Điểm năng lực</div>
            </div>
            <div className="h-10 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-rose-300">
                {wrongDiagnostics.length}
              </div>
              <div className="text-[11px] font-semibold text-slate-200">Lỗi cần sửa</div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          <button
            onClick={() => onNavigateTab('georepair', { lessonId: session.lessonId })}
            className="px-4 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs shadow-md hover:bg-amber-300 flex items-center gap-1.5 transition-colors"
          >
            <Sparkles className="h-4 w-4 text-amber-900" />
            <span>Bắt đầu phòng ôn tập bổ sung (GeoRepair)</span>
          </button>
          <button
            onClick={() => onNavigateTab('geolesson', { lessonId: session.lessonId })}
            className="px-4 py-2.5 rounded-xl bg-teal-400 text-slate-950 font-black text-xs shadow-md hover:bg-teal-300 flex items-center gap-1.5 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            <span>Mở lại Sổ tay kiến thức SGK</span>
          </button>
          <button
            onClick={() => onNavigateTab('geopath')}
            className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Map className="h-4 w-4" />
            <span>Lộ trình GeoPath 5 trạm</span>
          </button>
          <button
            onClick={onRetakeQuiz}
            className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="h-4 w-4" />
            <span>Làm lại bài kiểm tra</span>
          </button>
        </div>
      </div>

      {/* ERROR DNA SUMMARY MATRIX (7 NHÓM LỖI E01 - E07) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <Layers className="h-4 w-4 text-teal-600" />
            <span>Bản đồ phân loại lỗi sai (Error DNA) trong bài kiểm tra này</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">Theo chuẩn 7 nhóm lỗi GDPT</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pt-1">
          {ERROR_CODE_REGISTRY.map((cat) => {
            const count = wrongDiagnostics.filter((d) => d.errorCode === cat.code).length;
            const hasError = count > 0;

            return (
              <div
                key={cat.code}
                className={`p-3 rounded-xl border text-center transition-all ${
                  hasError
                    ? `${cat.badgeColor} ring-1 ring-current font-bold`
                    : 'border-slate-100 bg-slate-50 text-slate-400'
                }`}
              >
                <div className="text-[10px] font-mono font-black">{cat.code}</div>
                <div className="text-lg font-black my-0.5">{count}</div>
                <div className="text-[10px] leading-tight line-clamp-1">{cat.name}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5-PART SMART FEEDBACK PER WRONG ANSWER */}
      <div className="space-y-4">
        <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-500" />
          <span>Giải mã chi tiết từng lỗi sai & Hướng dẫn sửa cách nghĩ</span>
        </h2>

        {wrongDiagnostics.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-teal-200 bg-teal-50/40 p-8 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-teal-600 mb-2" />
            <h3 className="text-base font-black text-slate-900">
              Xuất sắc! Em không mắc lỗi sai nào trong bài này.
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Hãy tiếp tục chuyển sang bài học tiếp theo hoặc thử sức với bài vận dụng nâng cao nhé.
            </p>
          </div>
        ) : (
          wrongDiagnostics.map((diag, idx) => {
            const matchedQuestion = allQuestions.find((q) => q.questionId === diag.questionId);
            const isVerified = diag.verificationStatus === 'passed' || verifiedMap[diag.questionId];

            return (
              <div
                key={diag.questionId}
                className={`rounded-2xl border bg-white p-5 sm:p-6 shadow-xs space-y-4 transition-all ${
                  isVerified
                    ? 'border-emerald-300 ring-2 ring-emerald-100'
                    : 'border-rose-200'
                }`}
              >
                {/* Header tag */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-rose-800 text-xs font-black">
                      {idx + 1}
                    </span>
                    <span className="rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-xs font-bold text-rose-800">
                      [{diag.errorCode}] {diag.errorName}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {diag.questionId}
                    </span>
                  </div>

                  <div>
                    {isVerified ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black px-3 py-1 border border-emerald-300">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                        ĐÃ KHẮC PHỤC
                      </span>
                    ) : diag.isCertain ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-0.5">
                        Xác nhận từ đáp án
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-0.5 border border-slate-200">
                        Nguyên nhân nghi ngờ – cần kiểm chứng
                      </span>
                    )}
                  </div>
                </div>

                {/* Original Question Prompt */}
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase">Câu hỏi gốc:</span>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {matchedQuestion ? matchedQuestion.questionText : 'Đề bài câu hỏi'}
                  </p>
                </div>

                {/* 5-COMPONENTS BREAKDOWN */}
                <div className="space-y-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200 text-xs">
                  {/* 1 & 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
                      <span className="text-rose-700 font-semibold block mb-0.5">
                        1. Em đã chọn/nhập gì?
                      </span>
                      <span className="text-sm font-black text-rose-900 break-words">
                        {['A', 'B', 'C', 'D'].includes(diag.chosenAnswer) ? `Phương án ${diag.chosenAnswer}` : diag.chosenAnswer}
                      </span>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="text-emerald-700 font-semibold block mb-0.5">
                        2. Đáp án chính xác là gì?
                      </span>
                      <span className="text-sm font-black text-emerald-900 break-words">
                        {['A', 'B', 'C', 'D'].includes(diag.correctAnswer) ? `Phương án ${diag.correctAnswer}` : diag.correctAnswer}
                      </span>
                    </div>
                  </div>

                  {/* 3. Vì sao em có thể nhầm lẫn */}
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 space-y-1">
                    <span className="text-amber-900 font-bold block flex items-center gap-1">
                      <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
                      <span>3. Vì sao em có thể nhầm lẫn?</span>
                    </span>
                    <p className="text-slate-800 leading-relaxed font-medium">
                      {diag.hypothesis}
                    </p>
                  </div>

                  {/* 4. Kiến thức cần ghi nhớ & Nguồn trích dẫn SGK */}
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 space-y-1">
                    <span className="text-blue-900 font-bold block flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-blue-600" />
                      <span>4. Kiến thức chuẩn cần ghi nhớ:</span>
                    </span>
                    <p className="text-slate-800 leading-relaxed">{diag.explanation}</p>
                    <div className="pt-1.5 text-[11px] font-semibold text-blue-700 flex items-center gap-1">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Căn cứ nguồn: {diag.sourceCitation}</span>
                    </div>
                  </div>

                  {/* 5. Thử lại ngay với câu hỏi kiểm chứng */}
                  {diag.verificationQuestion && (
                    <div className="p-3.5 rounded-xl bg-white border border-teal-300 space-y-2.5">
                      <span className="text-teal-900 font-black block flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <Sparkles className="h-3.5 w-3.5 text-teal-600" />
                          <span>5. Thử lại ngay – Câu hỏi kiểm chứng khắc phục lỗi</span>
                        </span>
                        <span className="text-[11px] text-teal-700 font-semibold">
                          Trả lời đúng để xóa lỗi
                        </span>
                      </span>

                      <p className="text-xs font-bold text-slate-900">
                        {diag.verificationQuestion.questionText}
                      </p>

                      <div className="space-y-1.5">
                        {diag.verificationQuestion.options.map((opt) => {
                          const isSelected = selectedVerificationAnswers[diag.questionId] === opt.id;
                          return (
                            <button
                              key={opt.id}
                              disabled={isVerified}
                              onClick={() => handleSelectVerification(diag.questionId, opt.id)}
                              className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center gap-2 transition-all ${
                                isSelected
                                  ? 'border-teal-500 bg-teal-50 text-teal-950 font-bold'
                                  : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                              }`}
                            >
                              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-white border text-[11px] font-black">
                                {opt.id}
                              </span>
                              <span>{opt.text}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Hint */}
                      {diag.verificationQuestion.hint && !isVerified && (
                        <p className="text-[11px] text-slate-500 italic">
                          💡 Gợi ý tư duy: {diag.verificationQuestion.hint}
                        </p>
                      )}

                      {!isVerified && (
                        <div className="text-right pt-1">
                          <button
                            disabled={!selectedVerificationAnswers[diag.questionId]}
                            onClick={() => handleCheckVerification(diag)}
                            className="px-4 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-bold text-xs"
                          >
                            Kiểm tra kết quả
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
