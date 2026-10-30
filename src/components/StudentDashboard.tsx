import React from 'react';
import { Grade, StudentProfile, AssessmentSession } from '../types';
import { ERROR_CODE_REGISTRY, OFFICIAL_TEXTBOOK_CHAPTERS } from '../data/curriculumData';
import { GeoMimiMascot } from './GeoMimiMascot';
import {
  Compass,
  Play,
  Stethoscope,
  Map,
  Lightbulb,
  MessageSquare,
  Award,
  TrendingUp,
  Sparkles,
  BookOpen,
  CheckCircle,
  Layers,
  ArrowRight,
  ShieldCheck,
  Star,
  Flame,
  Globe2,
  Mountain,
  Waves,
  SunMedium,
  CheckCircle2,
} from 'lucide-react';

interface StudentDashboardProps {
  profile: StudentProfile;
  activeGrade: Grade;
  onGradeChange: (grade: Grade) => void;
  onNavigate: (tab: string, extra?: any) => void;
  onStartQuiz: (grade: Grade, lessonId?: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  profile,
  activeGrade,
  onGradeChange,
  onNavigate,
  onStartQuiz,
}) => {
  const gradeTopics: Record<Grade, { title: string; desc: string; icon: string }[]> = {
    6: [
      { title: 'Chương 1. Bản đồ & Tọa độ địa lí', desc: 'Hệ thống kinh vĩ tuyến, tỉ lệ, đường đồng mức', icon: '🗺️' },
      { title: 'Chương 2. Trái Đất trong hệ Mặt Trời', desc: 'Chuyển động tự quay, ngày đêm luân phiên, giờ Trái Đất', icon: '🌍' },
      { title: 'Chương 4. Khí hậu & Biến đổi khí hậu', desc: 'Nhiệt ẩm, mây mưa, phân biệt thời tiết vs khí hậu', icon: '🌤️' },
      { title: 'Chương 5. Nước trên Trái Đất', desc: 'Thuỷ quyển, sông hồ, nước ngầm và đại dương', icon: '🌊' },
    ],
    7: [
      { title: 'Chương 1. Châu Âu', desc: 'Vị trí, tự nhiên, khí hậu hải dương và lục địa, Liên minh EU', icon: '🏰' },
      { title: 'Chương 2. Châu Á', desc: 'Châu lục rộng lớn nhất, địa hình đồ sộ, các nền kinh tế lớn', icon: '⛩️' },
      { title: 'Chương 3. Châu Phi', desc: 'Hoang mạc Xa-ha-ra, dòng biển lạnh, sông Nin dài nhất thế giới', icon: '🏜️' },
      { title: 'Chương 4. Châu Mỹ & Nam Cực', desc: 'Bắc Mỹ, Trung & Nam Mỹ, lá phổi xanh A-ma-dôn, châu Nam Cực', icon: '🐧' },
    ],
    8: [
      { title: 'Chương 1. Vị trí & Địa hình Việt Nam', desc: 'Tọa độ điểm cực, đồi núi chiếm 3/4 diện tích, khoáng sản', icon: '🏔️' },
      { title: 'Chương 2. Khí hậu & Thủy văn Việt Nam', desc: 'Tính chất nhiệt đới ẩm gió mùa, sông ngòi dày đặc', icon: '🌧️' },
      { title: 'Chương 3. Thổ nhưỡng & Sinh vật Việt Nam', desc: 'Đất feralit chiếm 65%, tính đa dạng sinh học cao', icon: '🌿' },
      { title: 'Chương 4. Biển đảo Việt Nam', desc: 'Phạm vi Biển Đông, Luật Biển VN 2012, 12 hải lí lãnh hải', icon: '🏝️' },
    ],
    9: [
      { title: 'Chương 1. Địa lí dân cư Việt Nam', desc: '54 dân tộc, cơ cấu dân số vàng và già hoá dân số', icon: '👥' },
      { title: 'Chương 2. Địa lí các ngành kinh tế', desc: 'Chuyển dịch cơ cấu GDP, nông nghiệp xanh, công nghiệp số', icon: '🏭' },
      { title: 'Chương 3. Vùng Đồng bằng sông Hồng', desc: 'Mật độ dân số cao nhất, đê sông kiên cố, Thủ đô Hà Nội', icon: '🌾' },
      { title: 'Chương 3. Đông Nam Bộ & ĐBSCL', desc: 'Đông Nam Bộ năng động nhất, ĐBSCL thuận thiên sống chung lũ', icon: '🚢' },
    ],
  };

  const gradeLessons = OFFICIAL_TEXTBOOK_CHAPTERS.filter((l) => l.grade === activeGrade);
  const hasData = profile.completedTestsCount > 0;

  // Badges system for gamification
  const masteredCount = Object.values(profile.masteryByTopic || {}).filter((m) => m.scorePct >= 80).length;
  const badges = [
    { id: 'b1', name: 'Nhà Thám Hiểm Bản Đồ', icon: '🧭', unlocked: profile.completedTestsCount >= 1, desc: 'Làm bài kiểm tra đầu tiên' },
    { id: 'b2', name: 'Chiến Thần Phản Biện', icon: '💡', unlocked: profile.resolvedErrorsCount >= 1, desc: 'Khắc phục thành công 1 lỗi sai' },
    { id: 'b3', name: 'Bậc Thầy Biểu Đồ', icon: '📊', unlocked: profile.overallAccuracy >= 75, desc: 'Độ chính xác đạt trên 75%' },
    { id: 'b4', name: 'Khám Phá Năm Châu', icon: '🌏', unlocked: profile.geoPoints >= 100, desc: 'Tích lũy trên 100 GeoPoints' },
    { id: 'b5', name: 'Tự Hào Địa Lí Việt Nam', icon: '🇻🇳', unlocked: masteredCount >= 2, desc: 'Làm chủ từ 2 chuyên đề (≥80%)' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      {/* HERO GREETING BANNER WITH CUTE GEOMIMI MASCOT */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#102A43] via-[#0f3d59] to-[#0f4c5c] p-6 sm:p-8 lg:p-10 text-white shadow-xl">
        {/* Subtle topographical wave decoration */}
        <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 200 200">
            <path d="M 0,100 C 40,70 60,130 100,100 C 140,70 160,130 200,100 L 200,200 L 0,200 Z" fill="#38BDF8" />
            <path d="M 0,130 C 40,100 60,160 100,130 C 140,100 160,160 200,130 L 200,200 L 0,200 Z" fill="#14B8A6" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-400/20 backdrop-blur-xs px-3.5 py-1 text-xs font-bold text-teal-300 border border-teal-300/30 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-amber-300" />
              <span>GeoFeedback AI • Slogan: "Hiểu lỗi sai – Học đúng cách – Làm chủ Địa lí"</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight flex flex-wrap items-center gap-2 sm:gap-3">
              <span>{profile.avatar || '❄️'}</span>
              <span>Xin chào, {profile.displayName}!</span>
              <span className="text-xs sm:text-sm font-bold bg-teal-400/25 px-3 py-1 rounded-full text-teal-200 border border-teal-300/30 shadow-xs">
                {profile.className || `Lớp ${activeGrade}`} • {profile.schoolName || 'THCS'}
              </span>
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
              Cùng Bé Địa Cầu <strong className="text-teal-300">GeoMimi</strong> khám phá trọn vẹn {gradeLessons.length} bài học Địa lí Lớp {activeGrade}.
              Lộ trình học tập được cá nhân hóa riêng cho em tại {profile.className || `Khối ${activeGrade}`}.
            </p>

            {/* 6 MANDATORY CYCLE STEPS AS PLAYFUL ISLANDS */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-2.5">
              <button
                onClick={() => onNavigate('geolesson')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-teal-400 text-slate-950 font-black shadow-md hover:bg-teal-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-lg">📖</span>
                <span className="text-[11px] mt-1">1. Sổ tay SGK</span>
              </button>

              <button
                onClick={() => onStartQuiz(activeGrade)}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-sky-400 text-slate-950 font-black shadow-md hover:bg-sky-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-lg">📝</span>
                <span className="text-[11px] mt-1">2. Luyện tập</span>
              </button>

              <button
                onClick={() => onNavigate('error_dna')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-rose-500 text-white font-black shadow-md hover:bg-rose-400 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-lg">🧬</span>
                <span className="text-[11px] mt-1">3. Chẩn đoán</span>
              </button>

              <button
                onClick={() => onNavigate('georepair')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-amber-400 text-amber-950 font-black shadow-md hover:bg-amber-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-lg">💡</span>
                <span className="text-[11px] mt-1">4. Bổ sung</span>
              </button>

              <button
                onClick={() => onNavigate('geomastery')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-emerald-400 text-emerald-950 font-black shadow-md hover:bg-emerald-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-lg">🏆</span>
                <span className="text-[11px] mt-1">5. Kiểm tra</span>
              </button>

              <button
                onClick={() => onNavigate('geomentor')}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-purple-400 text-purple-950 font-black shadow-md hover:bg-purple-300 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-lg">🤖</span>
                <span className="text-[11px] mt-1">6. Chatbot AI</span>
              </button>
            </div>
          </div>

          {/* CUTE MASCOT CARD */}
          <div className="flex flex-col items-center shrink-0 p-4 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
            <GeoMimiMascot size="lg" mood="waving" showSpeechBubble speechText="Chào bạn nhỏ! Cùng thám hiểm Địa lí nhé!" />
            <div className="mt-2">
              <span className="text-xs font-black text-teal-300">Bé Địa Cầu GeoMimi 🌍</span>
              <p className="text-[10px] text-slate-300">Trợ lý học tập thông minh THCS</p>
            </div>
          </div>
        </div>
      </div>

      {/* EXPLORER STATS & BADGES (REAL ASSESSMENT DATA) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Real Performance Summary */}
        <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-teal-600" />
              <span>Hồ sơ năng lực thực tế của em (Khối {activeGrade})</span>
            </h2>
            <span className="text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
              <span>{profile.geoPoints} GeoPoints</span>
            </span>
          </div>

          {hasData ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-center">
                <span className="text-[11px] font-bold text-slate-500 uppercase">Bài kiểm tra</span>
                <div className="text-2xl font-black text-slate-900 mt-1">{profile.completedTestsCount}</div>
                <span className="text-[11px] text-slate-400">lượt làm bài</span>
              </div>

              <div className="rounded-2xl bg-teal-50 border border-teal-200 p-4 text-center">
                <span className="text-[11px] font-bold text-teal-700 uppercase">Độ chính xác</span>
                <div className="text-2xl font-black text-teal-700 mt-1">{profile.overallAccuracy}%</div>
                <span className="text-[11px] text-teal-600">toàn diện</span>
              </div>

              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 text-center">
                <span className="text-[11px] font-bold text-emerald-700 uppercase">Lỗi đã sửa</span>
                <div className="text-2xl font-black text-emerald-700 mt-1">{profile.resolvedErrorsCount}</div>
                <span className="text-[11px] text-emerald-600">/ {profile.detectedErrorsCount} lỗi</span>
              </div>

              <div className="rounded-2xl bg-purple-50 border border-purple-200 p-4 text-center">
                <span className="text-[11px] font-bold text-purple-700 uppercase">Chuyên đề làm chủ</span>
                <div className="text-2xl font-black text-purple-700 mt-1">{masteredCount}</div>
                <span className="text-[11px] text-purple-600">mục tiêu (≥80%)</span>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-dashed border-sky-200 bg-sky-50/50 p-6 text-center">
              <span className="text-3xl block mb-2">🧭</span>
              <h3 className="text-sm font-bold text-slate-800">
                Chào mừng em đến với GeoFeedback AI!
              </h3>
              <p className="mt-1 text-xs text-slate-600 max-w-md mx-auto">
                Hệ thống chỉ ghi nhận kết quả bài làm thực tế (không hiển thị điểm số giả). Hãy bắt đầu với Bước 1: Xem sổ tay SGK hoặc Bước 2: Làm bài kiểm tra nhé!
              </p>
              <div className="mt-4 flex justify-center gap-2">
                <button
                  onClick={() => onNavigate('geolesson')}
                  className="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-black text-xs shadow-xs hover:bg-teal-400"
                >
                  📖 1. Đọc Sổ tay SGK
                </button>
                <button
                  onClick={() => onStartQuiz(activeGrade)}
                  className="px-4 py-2 rounded-xl bg-sky-500 text-slate-950 font-black text-xs shadow-xs hover:bg-sky-400"
                >
                  📝 2. Bắt đầu luyện tập
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Explorer Badges Showcase */}
        <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span>🏅</span>
              <span>Huy hiệu Thám Hiểm</span>
            </h3>
            <span className="text-[11px] font-bold text-teal-700">
              {badges.filter((b) => b.unlocked).length}/{badges.length} mở khóa
            </span>
          </div>

          <div className="space-y-2">
            {badges.map((b) => (
              <div
                key={b.id}
                className={`p-2.5 rounded-2xl border flex items-center gap-3 transition-all ${
                  b.unlocked
                    ? 'bg-amber-50/60 border-amber-200'
                    : 'bg-slate-50 border-slate-200 opacity-60'
                }`}
              >
                <span className="text-2xl">{b.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-black text-slate-900 truncate">{b.name}</span>
                    {b.unlocked && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />}
                  </div>
                  <p className="text-[10px] text-slate-500 truncate">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHUYÊN ĐỀ ĐỊA LÍ KHỐI LỚP ACTIVEGRADE */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
              <Globe2 className="h-5 w-5 text-teal-600" />
              <span>Các chuyên đề trọng tâm Địa lí Lớp {activeGrade} (SGK Kết nối tri thức)</span>
            </h2>
            <p className="text-xs text-slate-500">
              Tổng cộng {gradeLessons.length} bài học chuẩn theo mục lục chính thức của Bộ GD&ĐT
            </p>
          </div>

          <button
            onClick={() => onNavigate('lessons')}
            className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200"
          >
            <span>Khám phá toàn bộ {gradeLessons.length} bài</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {gradeTopics[activeGrade].map((top, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xs hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between space-y-3 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{top.icon}</span>
                  <span className="text-[10px] font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                    Chủ đề {idx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-black text-slate-900 mt-2 group-hover:text-teal-800 transition-colors">
                  {top.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">{top.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('lessons')}
                  className="text-xs font-bold text-teal-700 hover:text-teal-900 flex items-center gap-1"
                >
                  <span>Xem danh sách bài</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QUICK LAUNCH FIRST 4 LESSONS OF THE GRADE */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🗺️</span>
            <div>
              <h3 className="text-sm sm:text-base font-black text-slate-900">
                Bài học nổi bật Lớp {activeGrade} – Học & Luyện tập ngay
              </h3>
              <p className="text-xs text-slate-500">Bấm để ôn tập kiến thức SGK hoặc làm bài kiểm tra chẩn đoán</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('lessons')}
            className="text-xs font-black text-sky-700 hover:underline"
          >
            Xem tất cả {gradeLessons.length} bài →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {gradeLessons.slice(0, 4).map((l, index) => (
            <div
              key={l.lessonId}
              className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-teal-50/30 hover:border-teal-300 transition-all flex flex-col justify-between space-y-2"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-black uppercase text-teal-800 tracking-wider">
                    {l.chapterTitle}
                  </span>
                  <span className="text-[11px] font-mono bg-white px-2 py-0.5 rounded-md border text-slate-600">
                    SGK tr. {l.bookPageStart}
                  </span>
                </div>
                <h4 className="text-sm font-black text-slate-900 mt-1">{l.lessonTitle}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                  {l.learningObjectives[0]}
                </p>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => onNavigate('geolesson', { lessonId: l.lessonId })}
                  className="flex-1 px-3 py-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1 shadow-xs transition-colors"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>Sổ tay SGK</span>
                </button>
                <button
                  onClick={() => onStartQuiz(activeGrade, l.lessonId)}
                  className="flex-1 px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs flex items-center justify-center gap-1 shadow-xs transition-colors"
                >
                  <Play className="h-3.5 w-3.5" />
                  <span>Luyện tập</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
