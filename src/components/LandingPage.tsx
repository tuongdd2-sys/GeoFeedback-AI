import React from 'react';
import { GeoMimiMascot } from './GeoMimiMascot';
import {
  Compass,
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  MapPin,
  TrendingUp,
  School,
  Play,
  BookOpen,
  Award,
  CheckCircle2,
} from 'lucide-react';

interface LandingPageProps {
  onStartLearning: () => void;
  onOpenTeacher: () => void;
  onExploreLessons: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartLearning,
  onOpenTeacher,
  onExploreLessons,
}) => {
  return (
    <div className="space-y-12 py-4">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102A43] via-[#0f3d59] to-[#0f4c5c] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-sky-800/40">
        {/* Background decorative geographic grid & contour waves */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none hidden md:block">
          <svg viewBox="0 0 400 400" className="w-full h-full">
            <circle cx="200" cy="200" r="180" stroke="#38BDF8" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="130" stroke="#14B8A6" strokeWidth="2" fill="none" />
            <circle cx="200" cy="200" r="80" stroke="#38BDF8" strokeWidth="2" fill="none" />
            <path d="M20 200h360M200 20v360" stroke="#38BDF8" strokeWidth="1.5" />
            <path d="M70 70l260 260M70 330L330 70" stroke="#14B8A6" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-3.5 py-1 text-xs font-bold text-teal-300 border border-teal-400/30 mb-4 backdrop-blur-xs">
              <Sparkles className="h-4 w-4 text-amber-300" />
              <span>Nền tảng EdTech Chẩn đoán Tư duy & Lộ trình Cá nhân hóa</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              GEOFEEDBACK <span className="text-teal-400">AI</span>
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-bold text-amber-300">
              "Hiểu lỗi sai – Học đúng cách – Làm chủ Địa lí"
            </p>

            <p className="mt-3 text-sm sm:text-base text-slate-200 leading-relaxed">
              Không chỉ biết mình sai ở đâu, mà còn biết cách học để tiến bộ. 
              Hệ thống ứng dụng AI phát hiện lỗ hổng nhận thức, giải mã nguyên nhân sai dựa trên bằng chứng 
              và tự động thiết kế lộ trình ôn tập thích ứng chuẩn SGK Địa lí THCS 2018 (83 bài học Lớp 6, 7, 8, 9).
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onStartLearning}
                className="px-6 py-3.5 rounded-2xl bg-teal-400 hover:bg-teal-300 text-slate-950 font-black text-sm shadow-lg hover:shadow-teal-500/25 transition-all flex items-center gap-2"
              >
                <Play className="h-4 w-4 fill-slate-950" />
                <span>Bắt đầu học tập ngay</span>
              </button>

              <button
                onClick={onOpenTeacher}
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-xs transition-all flex items-center gap-2"
              >
                <School className="h-4 w-4 text-purple-300" />
                <span>Dành cho Giáo viên</span>
              </button>

              <button
                onClick={onExploreLessons}
                className="px-5 py-3.5 rounded-2xl text-xs font-bold text-sky-200 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <BookOpen className="h-4 w-4" />
                <span>Khám phá bài học SGK</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* TEXTBOOK ACCREDITATION */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3 text-xs text-slate-300">
              <span className="font-bold text-teal-300">Học liệu chuẩn:</span>
              <span>Bộ sách SGK Kết nối tri thức với cuộc sống (Phần Địa lí Lớp 6, 7, 8, 9)</span>
            </div>
          </div>

          {/* CUTE GEOMIMI MASCOT HERO ILLUSTRATION */}
          <div className="hidden lg:flex flex-col items-center justify-center p-6 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center shrink-0">
            <GeoMimiMascot size="xl" mood="explorer" showSpeechBubble speechText="Cùng Bé Mimi khám phá 83 bài Địa lí THCS nhé! 🌍✨" />
            <div className="mt-3">
              <span className="text-sm font-black text-amber-300">Bé Địa Cầu GeoMimi</span>
              <p className="text-xs text-slate-300">Bạn đồng hành thân thiện của học sinh THCS</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 CORE DIFFERENTIATORS (MỤC XV) */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Giá trị độc đáo của GeoFeedback AI
          </span>
          <h2 className="mt-2 text-2xl font-black text-slate-900">
            4 Điểm khác biệt vượt trội so với website trắc nghiệm thông thường
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Diff 1 */}
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs space-y-2.5 hover:border-teal-300 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700 font-bold">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">
              1. Error DNA – Dấu vân tay lỗi sai
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Mỗi học sinh có một hồ sơ lỗi sai riêng phân loại theo 7 nhóm chuẩn: sai kiến thức nền, hiểu sai khái niệm, nhầm nhân quả, đọc bản đồ, xử lí biểu đồ, đối tượng địa lí hay vận dụng.
            </p>
          </div>

          {/* Diff 2 */}
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs space-y-2.5 hover:border-teal-300 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 font-bold">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">
              2. Phản hồi có căn cứ xác thực
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              AI không phán đoán tùy tiện hay quy kết học sinh. Hệ thống kết hợp phương án nhiễu, mức tự tin và câu hỏi kiểm chứng ngắn để phân biệt giả thuyết lỗi với lỗi thực tế.
            </p>
          </div>

          {/* Diff 3 */}
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs space-y-2.5 hover:border-teal-300 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700 font-bold">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">
              3. Bù đắp đúng lỗ hổng (Adaptive)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hai học sinh cùng làm một đề nhưng sai khác nhau sẽ nhận được lộ trình khác nhau. Học sinh chỉ phải học đúng phần mình còn yếu, không tốn thời gian học lại bài đã nắm vững.
            </p>
          </div>

          {/* Diff 4 */}
          <div className="rounded-2xl border border-sky-100 bg-white p-5 shadow-xs space-y-2.5 hover:border-teal-300 transition-all">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 text-purple-700 font-bold">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-sm font-black text-slate-900">
              4. Xác nhận làm chủ kiến thức
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Không chỉ xem lý thuyết là tính điểm. Học sinh phải thể hiện năng lực qua câu hỏi kiểm chứng và bài đánh giá lại để chính thức ghi nhận lỗi đã được khắc phục.
            </p>
          </div>
        </div>
      </div>

      {/* 5-STAGE OPERATIONAL PIPELINE (MỤC III) */}
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-base font-black text-slate-900 flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-teal-600" />
          <span>Quy trình vận hành 5 giai đoạn khép kín GeoFeedback Intelligence</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
          {[
            { stage: 1, title: 'Khảo sát đầu vào', desc: 'Làm bài kiểm tra GeoCheck theo YCCĐ bài học' },
            { stage: 2, title: 'Chẩn đoán AI', desc: 'Giải mã Error DNA và kiểm chứng nguyên nhân' },
            { stage: 3, title: 'Cá nhân hóa', desc: 'Sinh lộ trình GeoPath phân nhánh 3 mức độ' },
            { stage: 4, title: 'Học bù đắp', desc: 'Phòng học GeoLearn 4 phần: Tóm tắt, Flashcard, Luyện tập' },
            { stage: 5, title: 'Đánh giá tiến bộ', desc: 'Kiểm tra lại, cập nhật năng lực & Spaced Repetition' },
          ].map((s) => (
            <div key={s.stage} className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#102A43] text-white text-xs font-black">
                {s.stage}
              </span>
              <h4 className="text-xs font-bold text-slate-900">{s.title}</h4>
              <p className="text-[11px] text-slate-500 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
