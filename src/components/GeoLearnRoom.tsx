import React, { useState } from 'react';
import { StudentProfile, Grade, ErrorCode, GeoLearnRemediationLesson } from '../types';
import { GEOLEARN_REMEDIATION_LESSONS } from '../data/questionBank';
import { ERROR_CODE_REGISTRY } from '../data/curriculumData';
import {
  Lightbulb,
  Clock,
  Sparkles,
  BookOpen,
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  HelpCircle,
  Award,
  Layers,
} from 'lucide-react';

interface GeoLearnRoomProps {
  profile: StudentProfile;
  activeGrade: Grade;
  onNavigateTab: (tab: string) => void;
}

export const GeoLearnRoom: React.FC<GeoLearnRoomProps> = ({
  profile,
  activeGrade,
  onNavigateTab,
}) => {
  // Determine which lesson to display based on student's active mistakes
  const targetCode: ErrorCode =
    profile.activeMistakes.length > 0
      ? profile.activeMistakes[0].errorCode
      : 'E02';

  const [selectedErrorCode, setSelectedErrorCode] = useState<ErrorCode>(targetCode);
  const [activeSection, setActiveSection] = useState<'A' | 'B' | 'C' | 'D'>('A');

  // Flashcard flip states
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  // Guided practice state
  const [guidedAnswers, setGuidedAnswers] = useState<Record<number, string>>({});
  const [guidedSubmitted, setGuidedSubmitted] = useState<Record<number, boolean>>({});
  const [showGuidedHint, setShowGuidedHint] = useState<Record<number, boolean>>({});

  // Application task completed
  const [appTaskSubmitted, setAppTaskSubmitted] = useState<boolean>(false);
  const [appTaskText, setAppTaskText] = useState<string>('');

  const currentRemediation: GeoLearnRemediationLesson =
    GEOLEARN_REMEDIATION_LESSONS[selectedErrorCode] ||
    GEOLEARN_REMEDIATION_LESSONS['E02'] ||
    GEOLEARN_REMEDIATION_LESSONS['E01'];

  const errorInfo =
    ERROR_CODE_REGISTRY.find((e) => e.code === selectedErrorCode) || ERROR_CODE_REGISTRY[0];

  const toggleFlipCard = (cardId: string) => {
    setFlippedCards((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const handleSelectGuided = (stepNum: number, optId: string) => {
    setGuidedAnswers((prev) => ({ ...prev, [stepNum]: optId }));
    setGuidedSubmitted((prev) => ({ ...prev, [stepNum]: true }));
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400 text-slate-950 font-black">
            <Lightbulb className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black">
              GeoLearn – Phòng học bù đắp kiến thức
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-200">
              Học đúng phần mình cần. Chỉ tập trung giải quyết dứt điểm các lỗ hổng tư duy đã ghi nhận.
            </p>
          </div>
        </div>

        {/* SELECT REMEDIATION MODULE */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-xs text-slate-300 font-semibold">Chủ đề cần bù đắp:</span>
          {(['E01', 'E02', 'E04'] as ErrorCode[]).map((code) => {
            const isSelected = selectedErrorCode === code;
            const reg = ERROR_CODE_REGISTRY.find((r) => r.code === code);
            return (
              <button
                key={code}
                onClick={() => {
                  setSelectedErrorCode(code);
                  setActiveSection('A');
                  setGuidedAnswers({});
                  setGuidedSubmitted({});
                  setFlippedCards({});
                  setAppTaskSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                [{code}] {reg?.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4-SECTION NAVIGATION TABS */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        {[
          { id: 'A', label: 'A. Hiểu trong 2 phút', desc: 'Tóm tắt & Nguồn SGK' },
          { id: 'B', label: 'B. Ghi nhớ thông minh', desc: 'Flashcard lật thẻ' },
          { id: 'C', label: 'C. Luyện tập có hướng dẫn', desc: 'Bài tập bậc thang' },
          { id: 'D', label: 'D. Thử thách vận dụng', desc: 'Nhiệm vụ thực tế' },
        ].map((tab) => {
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as any)}
              className={`p-3 rounded-xl text-left transition-all ${
                isActive
                  ? 'bg-teal-500 text-slate-950 font-black shadow-xs ring-1 ring-teal-600'
                  : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="text-xs font-black">{tab.label}</div>
              <div className="text-[10px] opacity-80 mt-0.5">{tab.desc}</div>
            </button>
          );
        })}
      </div>

      {/* SECTION A: HIỂU TRONG 2 PHÚT */}
      {activeSection === 'A' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5 animate-in fade-in duration-200">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Phần A • Tóm tắt trọng tâm
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-0.5">
                {currentRemediation.title}
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md">
              <Clock className="h-3.5 w-3.5 text-slate-400" />
              Đọc nhanh ~2 phút
            </span>
          </div>

          <p className="text-sm text-slate-800 leading-relaxed font-medium bg-amber-50/70 p-4 rounded-xl border border-amber-200">
            {currentRemediation.quickSummary2Min}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-900 uppercase block">
              Các quy tắc địa lí then chốt cần ghi vào sổ tay:
            </span>
            <div className="space-y-2">
              {currentRemediation.keyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500 font-medium">
              Căn cứ nguồn: <strong>{currentRemediation.sourceBookCitation}</strong>
            </span>
            <button
              onClick={() => setActiveSection('B')}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-xs"
            >
              <span>Chuyển sang Flashcard</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* SECTION B: GHI NHỚ THÔNG MINH (FLASHCARDS) */}
      {activeSection === 'B' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5 animate-in fade-in duration-200">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Phần B • Ghi nhớ thông minh
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-0.5">
                Thẻ Flashcard lật mặt phân biệt khái niệm
              </h2>
            </div>
            <span className="text-xs text-slate-400">Bấm vào thẻ để lật mặt sau</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentRemediation.flashcards.map((fc) => {
              const isFlipped = flippedCards[fc.id];
              return (
                <div
                  key={fc.id}
                  onClick={() => toggleFlipCard(fc.id)}
                  className={`cursor-pointer rounded-2xl border-2 p-6 transition-all min-h-48 flex flex-col justify-between ${
                    isFlipped
                      ? 'border-teal-500 bg-teal-50/70 text-teal-950 shadow-md ring-2 ring-teal-200'
                      : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      {isFlipped ? 'Mặt sau: Giải thích & Mẹo' : 'Mặt trước: Câu hỏi'}
                    </span>
                    <h3 className="text-sm font-black leading-snug">
                      {isFlipped ? fc.backExplanation : fc.frontConcept}
                    </h3>
                  </div>

                  {isFlipped ? (
                    <div className="mt-4 pt-3 border-t border-teal-200 text-xs font-bold text-teal-900">
                      💡 Mẹo: "{fc.memoryTip}"
                    </div>
                  ) : (
                    <div className="mt-4 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>Bấm để xem đáp án & mẹo nhớ</span>
                      <RotateCcw className="h-3.5 w-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setActiveSection('A')}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Quay lại tóm tắt
            </button>
            <button
              onClick={() => setActiveSection('C')}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-xs"
            >
              <span>Luyện tập có hướng dẫn</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* SECTION C: LUYỆN TẬP CÓ HƯỚNG DẪN BẬC THANG */}
      {activeSection === 'C' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5 animate-in fade-in duration-200">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Phần C • Luyện tập có hướng dẫn
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-0.5">
                Bài tập nâng cấp từng bước (Bậc thang nhận thức)
              </h2>
            </div>
            <span className="text-xs text-slate-400">Không phạt làm lại từ đầu nếu sai</span>
          </div>

          <div className="space-y-4">
            {currentRemediation.guidedPractice.map((step) => {
              const isSubmitted = guidedSubmitted[step.stepNumber];
              const chosen = guidedAnswers[step.stepNumber];
              const isCorrect = chosen?.toUpperCase() === step.correctAnswer.toUpperCase();
              const showHint = showGuidedHint[step.stepNumber];

              return (
                <div
                  key={step.stepNumber}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between text-xs font-bold text-slate-500">
                    <span>Bước {step.stepNumber}</span>
                    <button
                      onClick={() =>
                        setShowGuidedHint((prev) => ({
                          ...prev,
                          [step.stepNumber]: !prev[step.stepNumber],
                        }))
                      }
                      className="text-teal-700 hover:text-teal-900 flex items-center gap-1 font-semibold"
                    >
                      <HelpCircle className="h-3.5 w-3.5" />
                      <span>{showHint ? 'Ẩn gợi ý' : 'Xem gợi ý từng bước'}</span>
                    </button>
                  </div>

                  <p className="text-sm font-bold text-slate-900">{step.questionText}</p>

                  {/* Hint if requested */}
                  {showHint && (
                    <div className="p-2.5 rounded-lg bg-sky-50 text-sky-900 border border-sky-200 text-xs">
                      💡 <strong>Gợi ý:</strong> {step.stepHint}
                    </div>
                  )}

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {step.options.map((opt) => {
                      const isSelected = chosen === opt.id;
                      let btnStyle = 'border-slate-200 bg-white hover:bg-slate-100 text-slate-700';

                      if (isSubmitted) {
                        if (opt.id === step.correctAnswer) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (isSelected) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-950';
                        }
                      }

                      return (
                        <button
                          key={opt.id}
                          onClick={() => handleSelectGuided(step.stepNumber, opt.id)}
                          className={`p-3 rounded-xl border text-left text-xs flex items-center gap-2 transition-all ${btnStyle}`}
                        >
                          <span className="font-bold">{opt.id}.</span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Feedback post-click */}
                  {isSubmitted && (
                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-950 border border-emerald-200 font-medium'
                          : 'bg-amber-50 text-amber-950 border border-amber-200'
                      }`}
                    >
                      {step.stepExplanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setActiveSection('B')}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Quay lại Flashcard
            </button>
            <button
              onClick={() => setActiveSection('D')}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-xs"
            >
              <span>Thử thách vận dụng</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* SECTION D: THỬ THÁCH VẬN DỤNG */}
      {activeSection === 'D' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5 animate-in fade-in duration-200">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider block">
                Phần D • Thử thách vận dụng thực tiễn
              </span>
              <h2 className="text-lg font-black text-slate-900 mt-0.5">
                {currentRemediation.applicationTask.title}
              </h2>
            </div>
            <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
              +50 GeoPoints
            </span>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 space-y-2 text-xs">
            <strong className="text-slate-900 block">Tình huống thực tế:</strong>
            <p className="text-slate-700 leading-relaxed">
              {currentRemediation.applicationTask.scenario}
            </p>
            <div className="pt-2 font-bold text-slate-900">
              Nhiệm vụ: {currentRemediation.applicationTask.taskPrompt}
            </div>
          </div>

          {!appTaskSubmitted ? (
            <div className="space-y-3">
              <textarea
                rows={3}
                placeholder="Nhập câu trả lời và cách suy luận giải quyết tình huống của em..."
                value={appTaskText}
                onChange={(e) => setAppTaskText(e.target.value)}
                className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:border-teal-500"
              />
              <button
                disabled={!appTaskText.trim()}
                onClick={() => setAppTaskSubmitted(true)}
                className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-xs"
              >
                Gửi bài giải quyết tình huống
              </button>
            </div>
          ) : (
            <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 space-y-2 text-xs">
              <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>Tuyệt vời! Em đã hoàn thành thử thách vận dụng của bài học!</span>
              </div>
              <div className="mt-2 text-slate-700">
                <strong>Đáp án chuẩn tham chiếu:</strong> {currentRemediation.applicationTask.sampleRubricAnswer}
              </div>
            </div>
          )}

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={() => setActiveSection('C')}
              className="text-xs font-bold text-slate-500 hover:text-slate-800"
            >
              Quay lại luyện tập
            </button>
            <button
              onClick={() => onNavigateTab('geocheck')}
              className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-xs"
            >
              <span>Làm bài kiểm tra đánh giá lại (Post-test)</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
