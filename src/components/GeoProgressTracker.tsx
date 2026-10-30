import React from 'react';
import { StudentProfile, AssessmentSession, Grade } from '../types';
import { storageService } from '../services/storageService';
import {
  TrendingUp,
  Award,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  RotateCcw,
  Shield,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface GeoProgressTrackerProps {
  profile: StudentProfile;
  sessions: AssessmentSession[];
  activeGrade: Grade;
  onRefresh: () => void;
  onNavigateTab: (tab: string) => void;
}

export const GeoProgressTracker: React.FC<GeoProgressTrackerProps> = ({
  profile,
  sessions,
  activeGrade,
  onRefresh,
  onNavigateTab,
}) => {
  const spacedQueue = profile.spacedRepetitionQueue || [];
  const dueItems = spacedQueue.filter((i) => i.status === 'due');

  const handleCompleteSpacedRepetition = (srId: string) => {
    storageService.completeSpacedRepetition(srId);
    onRefresh();
  };

  const officialBadges = [
    {
      id: 'badge-map-master',
      title: 'Nhà thám hiểm bản đồ',
      desc: 'Làm chủ kĩ năng đọc bản đồ, tọa độ & đường đồng mức (E04)',
      icon: '🧭',
      isUnlocked: true,
    },
    {
      id: 'badge-climate-expert',
      title: 'Chuyên gia khí hậu',
      desc: 'Phân tích chính xác thời tiết, các đới khí hậu & dòng biển (E02, E03)',
      icon: '☀️',
      isUnlocked: true,
    },
    {
      id: 'badge-chart-master',
      title: 'Bậc thầy biểu đồ',
      desc: 'Đọc và xử lí thành thạo số liệu, cơ cấu và tăng trưởng (E05)',
      icon: '📊',
      isUnlocked: profile.overallAccuracy > 60,
    },
    {
      id: 'badge-continents-explorer',
      title: 'Nhà khám phá các châu lục',
      desc: 'Hoàn thành các chuyên đề Địa lí thế giới Lớp 7 (Châu Âu, Á, Phi, Mỹ, Đại Dương)',
      icon: '🌍',
      isUnlocked: activeGrade === 7 || profile.completedTestsCount >= 3,
    },
    {
      id: 'badge-vietnam-expert',
      title: 'Chuyên gia Địa lí Việt Nam',
      desc: 'Làm chủ kiến thức tự nhiên, dân cư và kinh tế các vùng miền Việt Nam Lớp 8-9',
      icon: '🇻🇳',
      isUnlocked: activeGrade >= 8,
    },
  ];

  // Anonymous Class Leaderboard
  const anonymousLeaderboard = [
    { rank: 1, name: 'Nhà thám hiểm #104', points: 420, remediated: 5, growth: '+28%' },
    { rank: 2, name: `${profile.displayName} (Em)`, points: profile.geoPoints, remediated: profile.resolvedErrorsCount, growth: '+22%' },
    { rank: 3, name: 'Nhà thám hiểm #082', points: 310, remediated: 3, growth: '+19%' },
    { rank: 4, name: 'Nhà thám hiểm #117', points: 280, remediated: 2, growth: '+15%' },
    { rank: 5, name: 'Nhà thám hiểm #056', points: 240, remediated: 2, growth: '+12%' },
  ].sort((a, b) => b.points - a.points);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400 text-slate-950 font-black">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black">
                GeoProgress & Hệ thống Thành tích GeoQuest
              </h1>
              <p className="mt-1 text-xs sm:text-sm text-slate-200">
                Nhìn thấy sự tiến bộ rõ rệt qua từng chu kì ôn tập và củng cố trí nhớ ngắt quãng (Spaced Repetition).
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xs px-4 py-3 rounded-2xl border border-white/20 text-center">
            <span className="text-[10px] uppercase font-bold text-teal-300 block">Kho điểm GeoPoints</span>
            <span className="text-3xl font-black text-amber-300">⭐ {profile.geoPoints}</span>
          </div>
        </div>
      </div>

      {/* 1. SPACED REPETITION CARD (MỤC IX) */}
      <div className="rounded-2xl border border-teal-200 bg-white p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-teal-100 text-teal-700">
              <Calendar className="h-4 w-4" />
            </div>
            <h2 className="text-sm font-black text-slate-900">
              Ôn tập ngắt quãng (Spaced Repetition: 1 – 3 – 7 ngày)
            </h2>
          </div>
          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-200">
            {dueItems.length} nội dung đến hạn nhắc lại
          </span>
        </div>

        <p className="text-xs text-slate-500">
          Để kiến thức không bị mai một, các lỗi em đã khắc phục sẽ được tự động nhắc lại sau 1 ngày, 3 ngày và 7 ngày.
        </p>

        {dueItems.length > 0 ? (
          <div className="space-y-2 pt-1">
            {dueItems.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 flex items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{item.topicTitle}</span>
                    <span className="rounded-md bg-sky-100 text-sky-800 px-1.5 py-0.5 text-[10px] font-bold">
                      Nhắc lại chu kì {item.intervalDays} ngày
                    </span>
                  </div>
                  <span className="text-slate-500 mt-0.5 block text-[11px]">
                    Lần sửa gần nhất: {new Date(item.lastMasteredDate).toLocaleDateString('vi-VN')}
                  </span>
                </div>

                <button
                  onClick={() => handleCompleteSpacedRepetition(item.id)}
                  className="px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center gap-1 shadow-xs transition-colors shrink-0"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Xác nhận ôn tập (+20 pts)</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-xl bg-slate-50 p-4 text-center text-xs text-slate-500">
            Hiện tại em chưa có bài tập ngắt quãng nào đến hạn. Hãy hoàn thành thêm bài kiểm tra để kích hoạt nhé!
          </div>
        )}
      </div>

      {/* 2. PRE-TEST VS POST-TEST COMPARISON */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            <span>Đối chiếu kết quả làm bài theo thời gian</span>
          </h2>
          <span className="text-xs text-slate-500">Dữ liệu bài làm thật</span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-100 text-xs">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-3 py-2 text-left font-bold text-slate-600">Thời gian</th>
                <th className="px-3 py-2 text-left font-bold text-slate-600">Bài học SGK</th>
                <th className="px-3 py-2 text-left font-bold text-slate-600">Điểm số</th>
                <th className="px-3 py-2 text-left font-bold text-slate-600">Số câu đúng</th>
                <th className="px-3 py-2 text-left font-bold text-slate-600">Loại bài</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {sessions.map((s) => (
                <tr key={s.sessionId} className="hover:bg-slate-50">
                  <td className="px-3 py-2.5 text-slate-500 font-mono">
                    {new Date(s.timestamp).toLocaleDateString('vi-VN')}
                  </td>
                  <td className="px-3 py-2.5 font-bold text-slate-800">{s.lessonTitle}</td>
                  <td className="px-3 py-2.5 font-black text-teal-700">{s.score}/100</td>
                  <td className="px-3 py-2.5 text-slate-600">
                    {s.correctCount}/{s.totalQuestions}
                  </td>
                  <td className="px-3 py-2.5">
                    {s.isPostTest ? (
                      <span className="rounded-md bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-bold">
                        Post-test (Đánh giá lại)
                      </span>
                    ) : (
                      <span className="rounded-md bg-blue-100 text-blue-800 px-2 py-0.5 text-[10px] font-bold">
                        Khảo sát đầu vào
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. GEOQUEST OFFICIAL BADGES (MỤC X) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <Award className="h-4 w-4 text-amber-500" />
            <span>Huy hiệu thành tích GeoQuest chính thức</span>
          </h2>
          <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            {officialBadges.filter((b) => b.isUnlocked).length} / 5 Đã mở khóa
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {officialBadges.map((badge) => (
            <div
              key={badge.id}
              className={`rounded-2xl border p-4 flex items-start gap-3 transition-all ${
                badge.isUnlocked
                  ? 'border-amber-200 bg-amber-50/40 text-slate-900'
                  : 'border-slate-200 bg-slate-50/70 text-slate-400 opacity-60'
              }`}
            >
              <div className="text-2xl shrink-0 p-2 rounded-xl bg-white shadow-2xs border border-slate-100">
                {badge.icon}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs font-black">{badge.title}</h3>
                  {badge.isUnlocked && (
                    <span className="text-[10px] font-bold text-emerald-600">✓</span>
                  )}
                </div>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {badge.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. CLASS PROGRESS LEADERBOARD (BẢO MẬT DANH TÍNH) */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Shield className="h-4 w-4 text-teal-600" />
              <span>Bảng vinh danh tiến bộ theo lớp (Ẩn danh học sinh)</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Tôn vinh mức độ cải thiện và sự kiên trì, không đánh giá bất lợi điểm đầu vào
            </p>
          </div>
        </div>

        <div className="space-y-2 pt-1">
          {anonymousLeaderboard.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border p-3 flex items-center justify-between text-xs transition-all ${
                item.name.includes('(Em)')
                  ? 'border-teal-400 bg-teal-50/70 text-teal-950 font-bold ring-1 ring-teal-400'
                  : 'border-slate-200 bg-white text-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-black ${
                    idx === 0
                      ? 'bg-amber-400 text-amber-950'
                      : idx === 1
                      ? 'bg-slate-200 text-slate-800'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {item.rank}
                </span>
                <span>{item.name}</span>
              </div>

              <div className="flex items-center gap-4">
                <span>{item.remediated} lỗi đã sửa</span>
                <span className="font-bold text-emerald-700 flex items-center">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {item.growth}
                </span>
                <span className="font-black text-amber-700">⭐ {item.points} pts</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
