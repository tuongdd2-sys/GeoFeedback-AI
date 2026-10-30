import React, { useState } from 'react';
import { Grade, StudentProfile, ErrorDiagnostic, ErrorCode, KnowledgeCard } from '../types';
import { GEO_LESSON_BANK } from '../data/geoLessonBank';
import { ERROR_CODE_REGISTRY } from '../data/curriculumData';
import { storageService } from '../services/storageService';
import { VisualAssetViewer } from './VisualAssetViewer';
import {
  Wrench,
  BookOpen,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Award,
  HelpCircle,
  Eye,
} from 'lucide-react';

interface GeoRepairViewProps {
  profile: StudentProfile;
  activeGrade: Grade;
  lessonId?: string;
  onNavigateTab: (tab: string) => void;
  onStartMasteryTest: (lessonId: string) => void;
}

export const GeoRepairView: React.FC<GeoRepairViewProps> = ({
  profile,
  activeGrade,
  lessonId = 'G6-L1',
  onNavigateTab,
  onStartMasteryTest,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showHint, setShowHint] = useState<Record<number, boolean>>({});
  const [practiceAnswers, setPracticeAnswers] = useState<Record<number, string>>({});
  const [practiceSubmitted, setPracticeSubmitted] = useState<Record<number, boolean>>({});

  // Active mistake to repair
  const activeMistake: ErrorDiagnostic | undefined =
    profile.activeMistakes.length > 0 ? profile.activeMistakes[0] : undefined;

  // Retrieve current lesson data
  const lessonData = GEO_LESSON_BANK[lessonId] || GEO_LESSON_BANK['G6-L1'];

  // Select target knowledge card (default to first or linked)
  const targetCard: KnowledgeCard =
    lessonData.knowledgeCards[0] || {
      id: 'KC-601-1',
      cardIndex: 1,
      title: 'Khái niệm Kinh tuyến và Vĩ tuyến',
      concept: 'Hệ thống đường kinh, vĩ tuyến',
      coreDefinition: 'Kinh tuyến là nửa đường tròn nối liền hai cực; Vĩ tuyến là vòng tròn vuông góc với kinh tuyến.',
      keyPoints: [
        'Mọi đường kinh tuyến đều có chiều dài bằng nhau.',
        'Đường vĩ tuyến lớn nhất là đường Xích đạo (0°).',
      ],
      sgkCitation: {
        bookTitle: 'Lịch sử và Địa lí 6 – Kết nối tri thức với cuộc sống',
        bookPage: 102,
        pdfPage: 104,
        section: 'Mục 1',
      },
      commonTrapAlert: 'Nhầm kinh tuyến là vòng tròn kín hoặc vĩ tuyến có chiều dài bằng nhau.',
      iconName: 'Globe',
    };

  const errorCode = activeMistake?.errorCode || 'S01';
  const errorInfo =
    ERROR_CODE_REGISTRY.find((e) => e.code === errorCode) || ERROR_CODE_REGISTRY[0];

  // Guided practice questions for remediation
  const repairPracticeQuestions = [
    {
      id: 1,
      questionText: 'Để xác định vị trí của một tàu thuyền đang trôi dạt trên đại dương, các nhà cứu hộ cần biết thông số nào sau đây?',
      options: [
        { id: 'A', text: 'Chỉ cần biết vĩ độ của tàu' },
        { id: 'B', text: 'Chỉ cần biết kinh độ của tàu' },
        { id: 'C', text: 'Tọa độ địa lí gồm cả vĩ độ và kinh độ của vị trí tàu' },
        { id: 'D', text: 'Tốc độ dòng chảy bề mặt' },
      ],
      correctAnswer: 'C',
      hint: 'Mỗi điểm trên bề mặt Trái Đất là giao điểm của một đường kinh tuyến và một đường vĩ tuyến.',
      explanation: 'Tọa độ địa lí (gồm cả vĩ độ và kinh độ) xác định chính xác duy nhất một điểm trên bề mặt Trái Đất.',
    },
    {
      id: 2,
      questionText: 'Nếu ghi tọa độ địa lí theo đúng quy chuẩn Địa lí Việt Nam và quốc tế, thứ tự nào sau đây là BẮT BUỘC?',
      options: [
        { id: 'A', text: 'Kinh độ ghi trước, Vĩ độ ghi sau' },
        { id: 'B', text: 'Vĩ độ ghi trước (hoặc ở trên), Kinh độ ghi sau (hoặc ở dưới)' },
        { id: 'C', text: 'Ghi số đo lớn hơn trước, số đo nhỏ hơn sau' },
        { id: 'D', text: 'Tùy ý người vẽ bản đồ quy định' },
      ],
      correctAnswer: 'B',
      hint: 'Hãy nhớ quy tắc khẩu quyết: "Vĩ trước - Kinh sau"!',
      explanation: 'SGK Địa lí 6 trang 103 quy định rõ: Khi viết tọa độ địa lí, ta luôn ghi vĩ độ ở trên (hoặc trước), kinh độ ở dưới (hoặc sau).',
    },
  ];

  const handleSelectPractice = (stepNum: number, optId: string) => {
    setPracticeAnswers((prev) => ({ ...prev, [stepNum]: optId }));
    setPracticeSubmitted((prev) => ({ ...prev, [stepNum]: true }));
  };

  const handleCompleteRepair = () => {
    if (activeMistake) {
      storageService.resolveMistake(activeMistake.questionId);
    }
    storageService.updateLessonProgress(lessonId, { status: 'repaired' });
    setCurrentStep(5);
  };

  const stepsList = [
    { num: 1, title: 'Xem lại thẻ', desc: 'Thẻ kiến thức mục tiêu' },
    { num: 2, title: 'Nhận diện lỗi', desc: 'Phân tích bẫy tư duy' },
    { num: 3, title: 'Quan sát ví dụ', desc: 'Minh họa trực quan' },
    { num: 4, title: 'Thực hành 2 câu', desc: 'Sửa sai có gợi ý' },
    { num: 5, title: 'Xác nhận tiến bộ', desc: 'Sẵn sàng kiểm tra lại' },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <Wrench className="h-3.5 w-3.5" />
              <span>BƯỚC 4/6: ÔN TẬP BỔ SUNG (GEOREPAIR)</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black">
              Phòng khắc phục lỗ hổng tư duy 5 bước
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Bài học: <span className="font-bold text-white">{lessonData.lessonTitle}</span> • Mã lỗi: <span className="font-bold text-amber-300">{errorInfo.code} – {errorInfo.name}</span>
            </p>
          </div>

          <button
            onClick={() => onNavigateTab('geolesson')}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 border border-white/10 flex items-center gap-1.5 self-start sm:self-auto"
          >
            <BookOpen className="h-4 w-4" />
            <span>Mở lại sổ tay SGK</span>
          </button>
        </div>

        {/* 5-STEP HORIZONTAL STEPPER */}
        <div className="mt-8 grid grid-cols-5 gap-2">
          {stepsList.map((st) => {
            const isActive = currentStep === st.num;
            const isDone = currentStep > st.num;

            return (
              <button
                key={st.num}
                onClick={() => setCurrentStep(st.num)}
                className={`p-2.5 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-black shadow-md'
                    : isDone
                    ? 'bg-teal-500/30 text-teal-200 hover:bg-teal-500/40'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>Bước {st.num}</span>
                  {isDone && <CheckCircle2 className="h-3 w-3 text-teal-300" />}
                </div>
                <div className="text-xs font-bold mt-1 truncate">{st.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 1: XEM LẠI THẺ KIẾN THỨC MỤC TIÊU */}
      {currentStep === 1 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-teal-700 font-black text-xs uppercase tracking-wider">
            <BookOpen className="h-4 w-4" />
            <span>Bước 1: Xem lại thẻ kiến thức mục tiêu</span>
          </div>

          <div className="rounded-2xl border-2 border-teal-100 bg-gradient-to-b from-teal-50/40 to-white p-5 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-2 py-0.5 rounded-md">
              {targetCard.id}
            </span>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {targetCard.title}
            </h2>
            <p className="text-xs font-semibold text-slate-600">{targetCard.coreDefinition}</p>

            <div className="bg-white p-4 rounded-xl border border-slate-100 space-y-2 text-xs text-slate-800">
              <div className="font-bold text-teal-900">Điểm cốt lõi cần nhớ từ SGK:</div>
              <ul className="space-y-1.5 pl-2">
                {targetCard.keyPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <span>Trích dẫn: {targetCard.sgkCitation.bookTitle}, trang {targetCard.sgkCitation.bookPage} (PDF tr. {targetCard.sgkCitation.pdfPage})</span>
              <span className="text-teal-700 font-bold">Xác thực 100%</span>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              onClick={() => setCurrentStep(2)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400"
            >
              <span>Tiếp tục: Bước 2 – Nhận diện bẫy tư duy</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: NHẬN DIỆN LỖI NHẦM & BẪY TƯ DUY */}
      {currentStep === 2 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-700 font-black text-xs uppercase tracking-wider">
            <AlertTriangle className="h-4 w-4" />
            <span>Bước 2: Nhận diện lỗi nhầm và bẫy tư duy</span>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-3">
            <h3 className="text-sm font-black text-amber-950">
              Vì sao học sinh thường mắc lỗi {errorInfo.code} ({errorInfo.name})?
            </h3>
            <p className="text-xs text-amber-900 leading-relaxed">
              {activeMistake?.hypothesis ||
                'Học sinh thường bị ảnh hưởng bởi thói quen toán học (trục tọa độ x trước, y sau) nên viết ngược kinh độ trước vĩ độ, hoặc chưa phân biệt rõ bản chất của đường kinh tuyến và đường vĩ tuyến.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl border border-rose-200 bg-rose-50/60 space-y-2">
              <span className="font-black text-rose-800 uppercase tracking-wider block text-[10px]">
                ✕ Cách hiểu SAI / Bẫy nhầm lẫn
              </span>
              <p className="text-rose-950 font-medium">
                • Viết Kinh độ trước, Vĩ độ sau: ví dụ A (105°Đ, 20°B).
              </p>
              <p className="text-rose-950 font-medium">
                • Coi kinh tuyến là vòng tròn kín có chu vi bằng đường xích đạo.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/60 space-y-2">
              <span className="font-black text-emerald-800 uppercase tracking-wider block text-[10px]">
                ✓ Tư duy ĐÚNG theo SGK Địa lí
              </span>
              <p className="text-emerald-950 font-bold">
                • Luôn ghi Vĩ độ trước, Kinh độ sau: A (20°B, 105°Đ).
              </p>
              <p className="text-emerald-950 font-bold">
                • Kinh tuyến là NỬA đường tròn nối liền hai cực Bắc và Nam.
              </p>
            </div>
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setCurrentStep(1)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
            >
              Quay lại Bước 1
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400"
            >
              <span>Tiếp tục: Bước 3 – Quan sát ví dụ trực quan</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: QUAN SÁT VÍ DỤ TRỰC QUAN */}
      {currentStep === 3 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-indigo-700 font-black text-xs uppercase tracking-wider">
            <Eye className="h-4 w-4" />
            <span>Bước 3: Quan sát ví dụ trực quan & mô hình SGK</span>
          </div>

          <VisualAssetViewer
            visualData={{
              type: 'map_coord',
              title: 'Mô hình xác định tọa độ địa lí chuẩn: Cột cờ Hà Nội (21°01\'57"B, 105°50\'23"Đ)',
              caption: 'Vĩ tuyến 21°B cắt kinh tuyến 105°Đ tại Hà Nội. Luôn viết vĩ độ (đường ngang) trước, kinh độ (đường dọc) sau.',
              data: { lat: 21, lng: 105, label: 'Cột cờ Hà Nội' },
            }}
          />

          <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-950 space-y-1">
            <span className="font-bold">Khắc sâu quy tắc nhớ:</span>
            <p>
              "Muốn tìm tọa độ một nơi – Vĩ trước kinh sau chớ rời quy chuẩn!"
            </p>
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
            >
              Quay lại Bước 2
            </button>
            <button
              onClick={() => setCurrentStep(4)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs hover:bg-teal-400"
            >
              <span>Tiếp tục: Bước 4 – Luyện tập sửa sai</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: THỰC HÀNH 2 CÂU SỬA SAI CÓ GỢI Ý */}
      {currentStep === 4 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-teal-700 font-black text-xs uppercase tracking-wider">
              <Lightbulb className="h-4 w-4" />
              <span>Bước 4: Thực hành sửa sai có gợi ý từng bước</span>
            </div>
            <span className="text-xs font-bold text-slate-400">2 câu củng cố</span>
          </div>

          <div className="space-y-4">
            {repairPracticeQuestions.map((q, idx) => {
              const chosen = practiceAnswers[q.id];
              const isSubmitted = practiceSubmitted[q.id];
              const isCorrect = chosen === q.correctAnswer;
              const isHintOpen = !!showHint[q.id];

              return (
                <div key={q.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      Câu {idx + 1}: {q.questionText}
                    </span>
                    <button
                      onClick={() => setShowHint((prev) => ({ ...prev, [q.id]: !prev[q.id] }))}
                      className="text-[11px] font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 shrink-0"
                    >
                      <HelpCircle className="h-3.5 w-3.5" />
                      <span>{isHintOpen ? 'Ẩn gợi ý' : 'Gợi ý bước làm'}</span>
                    </button>
                  </div>

                  {isHintOpen && (
                    <div className="p-2.5 rounded-lg bg-teal-100/70 border border-teal-200 text-xs text-teal-900 font-medium">
                      💡 {q.hint}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-2">
                    {q.options.map((opt) => {
                      const isThisChosen = chosen === opt.id;
                      let btnStyle = 'border-slate-200 hover:bg-white text-slate-700';

                      if (isSubmitted) {
                        if (opt.id === q.correctAnswer) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-bold';
                        } else if (isThisChosen) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-900 font-bold';
                        }
                      } else if (isThisChosen) {
                        btnStyle = 'border-teal-500 bg-teal-50 text-teal-950 font-bold';
                      }

                      return (
                        <button
                          key={opt.id}
                          disabled={isSubmitted}
                          onClick={() => handleSelectPractice(q.id, opt.id)}
                          className={`p-2.5 rounded-lg border text-xs text-left transition-all ${btnStyle}`}
                        >
                          <span className="font-bold mr-1.5">{opt.id}.</span>
                          <span>{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>

                  {isSubmitted && (
                    <div className={`p-2.5 rounded-lg text-xs leading-relaxed ${
                      isCorrect ? 'bg-emerald-100 text-emerald-900' : 'bg-rose-100 text-rose-900'
                    }`}>
                      <span className="font-bold">{isCorrect ? 'Chính xác! ' : 'Chưa đúng: '}</span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex justify-between pt-2">
            <button
              onClick={() => setCurrentStep(3)}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200"
            >
              Quay lại Bước 3
            </button>
            <button
              onClick={handleCompleteRepair}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs hover:bg-emerald-400 shadow-md"
            >
              <span>Hoàn thành 4 bước & Xác nhận tiến bộ (+30 GeoPoints)</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 5: XÁC NHẬN TIẾN BỘ & CHUYỂN SANG KIỂM TRA LẠI (GEOMASTERY) */}
      {currentStep === 5 && (
        <div className="bg-white rounded-2xl border-2 border-emerald-300 p-8 text-center space-y-4 shadow-lg">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 mb-1">
            <Award className="h-9 w-9" />
          </div>
          <h2 className="text-xl font-black text-slate-900">
            Xuất sắc! Em đã hoàn thành quy trình bù đắp lỗ hổng tư duy!
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Hệ thống đã ghi nhận em khắc phục thành công bẫy tư duy của mã lỗi <span className="font-bold text-slate-900">{errorInfo.code}</span>. Em được cộng <span className="font-bold text-emerald-600">+30 GeoPoints</span>!
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-xs text-slate-700 text-left space-y-1.5">
            <div className="font-bold text-slate-900">Bước tiếp theo bắt buộc:</div>
            <p>
              Học sinh cần thực hiện bài đánh giá lại (GeoMastery) để kiểm chứng chắc chắn năng lực đã đạt chuẩn ≥80% trước khi hoàn thành bài học.
            </p>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onStartMasteryTest(lessonId)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-black text-sm hover:from-emerald-400 hover:to-teal-400 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Chuyển sang Bước 5: Kiểm tra lại (GeoMastery)</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
