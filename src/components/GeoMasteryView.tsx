import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Grade, StudentProfile } from '../types';
import { GEO_LESSON_BANK } from '../data/geoLessonBank';
import { storageService } from '../services/storageService';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Printer,
  Sparkles,
  ShieldCheck,
  Trophy,
} from 'lucide-react';

interface GeoMasteryViewProps {
  activeGrade: Grade;
  lessonId?: string;
  profile: StudentProfile;
  onFinishMastery: () => void;
  onReturnToRepair: () => void;
  onExploreNextLesson: () => void;
}

export const GeoMasteryView: React.FC<GeoMasteryViewProps> = ({
  activeGrade,
  lessonId = 'G6-L1',
  profile,
  onFinishMastery,
  onReturnToRepair,
  onExploreNextLesson,
}) => {
  const lessonData = GEO_LESSON_BANK[lessonId] || GEO_LESSON_BANK['G6-L1'];

  // 3 transfer assessment questions
  const masteryQuestions = [
    {
      id: 'MQ-1',
      questionText: 'Nếu đi dọc theo một đường kinh tuyến từ cực Bắc về cực Nam, ta đang di chuyển theo chiều nào và độ dài đường đi có thay đổi giữa các kinh tuyến khác nhau không?',
      options: [
        { id: 'A', text: 'Di chuyển theo hướng Bắc – Nam; độ dài đường đi luôn bằng nhau trên mọi kinh tuyến' },
        { id: 'B', text: 'Di chuyển theo hướng Đông – Tây; độ dài lớn nhất ở Xích đạo' },
        { id: 'C', text: 'Di chuyển theo hướng Bắc – Nam; kinh tuyến 0° dài hơn kinh tuyến 90°' },
        { id: 'D', text: 'Di chuyển theo hướng Tây – Đông; độ dài thu nhỏ dần về hai cực' },
      ],
      correctAnswer: 'A',
      explanation: 'Kinh tuyến là nửa đường tròn nối liền 2 cực Bắc - Nam, nên khi đi dọc kinh tuyến là đi theo hướng Bắc - Nam. Tất cả các kinh tuyến đều có độ dài bằng nhau.',
    },
    {
      id: 'MQ-2',
      questionText: 'Quan sát một địa điểm K có tọa độ K (16°B, 108°Đ) trên bản đồ nước ta. Khẳng định nào sau đây là hoàn toàn CHÍNH XÁC?',
      options: [
        { id: 'A', text: 'Điểm K nằm trên vĩ tuyến 108°B và kinh tuyến 16°Đ' },
        { id: 'B', text: 'Điểm K nằm ở Bán cầu Bắc và Bán cầu Đông' },
        { id: 'C', text: 'Điểm K nằm ở Bán cầu Nam và Bán cầu Tây' },
        { id: 'D', text: 'Điểm K nằm cách Xích đạo 108°' },
      ],
      correctAnswer: 'B',
      explanation: 'Theo quy chuẩn Vĩ độ trước (16°B = Bán cầu Bắc), Kinh độ sau (108°Đ = Bán cầu Đông).',
    },
    {
      id: 'MQ-3',
      questionText: 'Tại sao khi viết tọa độ địa lí, người ta không bao giờ ghi điểm B có tọa độ là B (120°B, 45°Đ)?',
      options: [
        { id: 'A', text: 'Vì kinh độ không bao giờ nhỏ hơn vĩ độ' },
        { id: 'B', text: 'Vì vĩ độ tối đa chỉ đạt 90° (tại hai cực), không thể có vĩ độ 120°B' },
        { id: 'C', text: 'Vì số 120 là số chẵn không dùng trong Địa lí' },
        { id: 'D', text: 'Vì chữ B chỉ dùng cho kinh tuyến' },
      ],
      correctAnswer: 'B',
      explanation: 'Vĩ tuyến chỉ trải dài từ 0° (Xích đạo) đến tối đa 90°B ở Cực Bắc và 90°N ở Cực Nam. Giá trị 120°B là sai bản chất khoa học.',
    },
  ];

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showCertificate, setShowCertificate] = useState<boolean>(false);

  const handleSelect = (qId: string, optId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qId]: optId }));
  };

  const fireMasteryConfetti = (isGrand: boolean) => {
    try {
      if (isGrand) {
        // Multi-stage fireworks cannon
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#2dd4bf', '#38bdf8', '#fbbf24', '#f43f5e', '#a855f7'],
        });

        setTimeout(() => {
          confetti({
            particleCount: 60,
            angle: 60,
            spread: 60,
            origin: { x: 0.05, y: 0.7 },
            colors: ['#2dd4bf', '#38bdf8', '#fbbf24'],
          });
          confetti({
            particleCount: 60,
            angle: 120,
            spread: 60,
            origin: { x: 0.95, y: 0.7 },
            colors: ['#f43f5e', '#a855f7', '#fbbf24'],
          });
        }, 300);

        setTimeout(() => {
          confetti({
            particleCount: 50,
            spread: 100,
            origin: { y: 0.4 },
            scalar: 1.2,
          });
        }, 600);
      } else {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#2dd4bf', '#38bdf8', '#fbbf24'],
        });
      }
    } catch {}
  };

  const handleGradeMastery = () => {
    let correct = 0;
    masteryQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    const calculated = Math.round((correct / masteryQuestions.length) * 100);
    setScore(calculated);
    setSubmitted(true);

    if (calculated >= 80) {
      storageService.updateLessonProgress(lessonId, {
        status: 'mastered',
        postTestScore: calculated,
        completedAt: Date.now(),
      });
      // Fire celebration confetti multi-stage fireworks
      fireMasteryConfetti(true);
    } else {
      storageService.updateLessonProgress(lessonId, {
        postTestScore: calculated,
      });
      if (calculated >= 50) {
        fireMasteryConfetti(false);
      }
    }
  };

  const isMastered = score >= 80;

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-400/30">
              <Trophy className="h-3.5 w-3.5" />
              <span>BƯỚC 5/6: ĐÁNH GIÁ LẠI & XÁC NHẬN LÀM CHỦ (GEOMASTERY)</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black">
              Kiểm tra làm chủ: {lessonData.lessonTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Đánh giá năng lực cuối bài • Đạt chuẩn ≥80% để mở khóa chứng nhận làm chủ kiến thức!
            </p>
          </div>
        </div>
      </div>

      {/* QUIZ FORM */}
      {!submitted ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Bộ câu hỏi kiểm chứng chuyển giao (3 câu)
            </h2>
            <span className="text-xs font-bold text-teal-700">
              Đã trả lời {Object.keys(answers).length} / {masteryQuestions.length}
            </span>
          </div>

          <div className="space-y-5">
            {masteryQuestions.map((q, idx) => {
              const chosen = answers[q.id];
              return (
                <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="text-xs font-bold text-slate-900 leading-relaxed">
                    Câu {idx + 1}: {q.questionText}
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((opt) => {
                      const isChosen = chosen === opt.id;
                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelect(q.id, opt.id)}
                          className={`p-3 rounded-lg border text-xs text-left transition-all ${
                            isChosen
                              ? 'border-teal-500 bg-teal-50 text-teal-950 font-bold shadow-xs'
                              : 'border-slate-200 bg-white hover:bg-slate-100/70 text-slate-700'
                          }`}
                        >
                          <span className="font-black mr-2">{opt.id}.</span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={handleGradeMastery}
              disabled={Object.keys(answers).length < masteryQuestions.length}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-sm hover:from-emerald-400 hover:to-teal-400 disabled:opacity-50 shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Nộp bài & Chấm điểm làm chủ kiến thức</span>
            </button>
          </div>
        </div>
      ) : (
        /* MASTERY RESULT DISPLAY */
        <div className="space-y-6">
          <div
            className={`rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-lg border-2 ${
              isMastered
                ? 'bg-gradient-to-b from-emerald-50 to-white border-emerald-300'
                : score >= 50
                ? 'bg-gradient-to-b from-amber-50 to-white border-amber-300'
                : 'bg-gradient-to-b from-rose-50 to-white border-rose-300'
            }`}
          >
            <div
              className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl font-black text-2xl ${
                isMastered
                  ? 'bg-emerald-500 text-slate-950 shadow-md'
                  : score >= 50
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-rose-500 text-white'
              }`}
            >
              {score}%
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {isMastered
                ? '🎉 CHÚC MỪNG! EM ĐÃ CHÍNH THỨC LÀM CHỦ BÀI HỌC!'
                : score >= 50
                ? 'TIẾN BỘ RÕ RỆT! EM ĐẠT 67% MỤC TIÊU'
                : 'CẦN TIẾP TỤC ÔN TẬP ĐỂ ĐẠT CHUẨN'}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {isMastered
                ? `Em đã vượt ngưỡng chuẩn quy định (≥80%), khắc phục toàn bộ các bẫy tư duy của ${lessonData.lessonTitle}. Em được tặng +50 GeoPoints!`
                : score >= 50
                ? 'Em đã hiểu được các khái niệm chính, chỉ còn một chút sai sót nhỏ trong việc áp dụng.'
                : 'Em hãy quay lại phòng GeoRepair để củng cố thêm các thẻ kiến thức còn phân vân nhé!'}
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              {isMastered && (
                <button
                  onClick={() => {
                    setShowCertificate(true);
                    try {
                      confetti({
                        particleCount: 90,
                        spread: 85,
                        origin: { y: 0.5 },
                        colors: ['#fbbf24', '#f59e0b', '#d97706', '#fef08a'],
                      });
                    } catch {}
                  }}
                  className="px-5 py-3 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-500 flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  <Award className="h-4 w-4" />
                  <span>Xem Chứng nhận làm chủ</span>
                </button>
              )}

              <button
                onClick={() => {
                  setSubmitted(false);
                  setAnswers({});
                }}
                className="px-4 py-3 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 flex items-center gap-1.5"
              >
                <RotateCcw className="h-4 w-4" />
                <span>Làm lại bài kiểm tra</span>
              </button>

              {!isMastered && (
                <button
                  onClick={onReturnToRepair}
                  className="px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300"
                >
                  Quay lại phòng GeoRepair
                </button>
              )}

              <button
                onClick={onExploreNextLesson}
                className="px-6 py-3 rounded-xl bg-teal-500 text-slate-950 font-black text-xs hover:bg-teal-400 shadow-md flex items-center gap-2"
              >
                <span>Chuyển sang bài học tiếp theo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* DETAILED ANSWER EXPLANATION */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-4">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-700">
              Chi tiết giải thích đáp án
            </h3>
            <div className="space-y-3">
              {masteryQuestions.map((q, idx) => {
                const chosen = answers[q.id];
                const isCorrect = chosen === q.correctAnswer;
                return (
                  <div key={q.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5">
                    <div className="font-bold text-slate-900">
                      Câu {idx + 1}: {q.questionText}
                    </div>
                    <div className="flex items-center gap-3 text-[11px]">
                      <span className={isCorrect ? 'text-emerald-700 font-bold' : 'text-rose-700 font-bold'}>
                        Em chọn: {chosen} {isCorrect ? '✓' : '✕'}
                      </span>
                      <span>•</span>
                      <span className="text-emerald-800 font-bold">Đáp án đúng: {q.correctAnswer}</span>
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed pt-1 border-t border-slate-100">
                      {q.explanation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* MASTERY CERTIFICATE MODAL */}
      {showCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl rounded-3xl bg-amber-50/90 border-8 border-amber-300 p-8 shadow-2xl text-slate-900 text-center space-y-4">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 text-slate-950 font-black mb-1 shadow-md">
              <Award className="h-9 w-9" />
            </div>

            <div className="text-xs uppercase font-black tracking-widest text-teal-800">
              NỀN TẢNG HỌC TẬP THÍCH ỨNG GEOFEEDBACK AI
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight font-serif">
              CHỨNG NHẬN LÀM CHỦ BÀI HỌC
            </h1>

            <p className="text-xs text-slate-600 italic">Chứng nhận học sinh:</p>
            <div className="text-xl font-black text-teal-900 border-b-2 border-teal-600 inline-block px-8 pb-1">
              {profile.displayName}
            </div>

            <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed">
              Đã hoàn thành xuất sắc chu trình 6 bước học tập và kiểm tra lại đạt chuẩn năng lực môn Địa lí Lớp {activeGrade}:
            </p>

            <div className="p-3 rounded-xl bg-white/80 border border-amber-200 font-bold text-sm text-slate-900">
              {lessonData.lessonTitle}
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-600 pt-4 border-t border-amber-200 px-6">
              <div>
                <span className="block font-bold">Ngày chứng nhận:</span>
                <span>{new Date().toLocaleDateString('vi-VN')}</span>
              </div>
              <div className="text-right">
                <span className="block font-bold text-teal-900">Hội đồng Giáo dục Địa lí THCS</span>
                <span className="text-[10px] text-emerald-700 font-bold">Đã ký điện tử ✓</span>
              </div>
            </div>

            <div className="pt-3 flex justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs hover:bg-teal-500 flex items-center gap-1.5"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>In / Lưu PDF</span>
              </button>
              <button
                onClick={() => setShowCertificate(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-300"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
