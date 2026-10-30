import React from 'react';
import { StudentProfile, Grade, LearningStation } from '../types';
import {
  Map,
  Lock,
  CheckCircle2,
  Play,
  ArrowRight,
  Sparkles,
  Clock,
  Compass,
  Lightbulb,
  ShieldAlert,
} from 'lucide-react';

interface GeoPathRoadmapProps {
  profile: StudentProfile;
  activeGrade: Grade;
  onNavigateTab: (tab: string, extra?: any) => void;
}

export const GeoPathRoadmap: React.FC<GeoPathRoadmapProps> = ({
  profile,
  activeGrade,
  onNavigateTab,
}) => {
  const score = profile.overallAccuracy || 68;

  // Determine Student Branching Tier
  const tier: 'remedial' | 'reinforce' | 'mastery' =
    score < 50 ? 'remedial' : score < 80 ? 'reinforce' : 'mastery';

  const tierLabels = {
    remedial: {
      title: 'Nhóm 0–49 điểm: Cần bù đắp nền tảng',
      desc: 'Hệ thống thiết lập lộ trình ưu tiên lấp đầy khái niệm và quy luật cơ bản trước khi làm bài tập kĩ năng.',
      color: 'bg-rose-50 text-rose-800 border-rose-300',
    },
    reinforce: {
      title: 'Nhóm 50–79 điểm: Cần củng cố & phân biệt',
      desc: 'Nắm được kiến thức cơ bản nhưng dễ nhầm lẫn khái niệm, sai sót đọc biểu đồ hoặc tính toán.',
      color: 'bg-amber-50 text-amber-800 border-amber-300',
    },
    mastery: {
      title: 'Nhóm 80–100 điểm: Chinh phục vận dụng cao',
      desc: 'Kiến thức vững chắc, lộ trình tập trung vào các thử thách tình huống thực tiễn và kiểm chứng làm chủ.',
      color: 'bg-teal-50 text-teal-800 border-teal-300',
    },
  };

  // 5 Stations tailored to the student's Error DNA
  const stations: LearningStation[] = [
    {
      stationNumber: 1,
      title: 'Trạm 1: Khởi động kiến thức',
      subtitle: 'Tóm tắt trọng tâm trong 2 phút',
      description: 'Lướt nhanh các định nghĩa cốt lõi và thuật ngữ trọng tâm của bài học trong SGK.',
      status: 'completed',
      estimatedMinutes: 3,
    },
    {
      stationNumber: 2,
      title: 'Trạm 2: Hiểu đúng bản chất',
      subtitle: 'Thẻ Flashcard thông minh',
      description:
        tier === 'remedial'
          ? 'Học lại các cặp khái niệm cơ bản (kinh độ, vĩ độ, khí áp).'
          : 'Lật thẻ phân biệt các cặp khái niệm dễ bẫy (thời tiết - khí hậu, nội thủy - lãnh hải).',
      status: 'unlocked',
      estimatedMinutes: 5,
    },
    {
      stationNumber: 3,
      title: 'Trạm 3: Thực hành kĩ năng',
      subtitle: 'Luyện tập có hướng dẫn bậc thang',
      description: 'Rèn luyện kĩ năng đọc bản đồ, biểu đồ khí hậu hoặc lát cắt địa hình với gợi ý từng bước.',
      status: tier === 'remedial' ? 'locked' : 'unlocked',
      estimatedMinutes: 8,
    },
    {
      stationNumber: 4,
      title: 'Trạm 4: Chinh phục vận dụng',
      subtitle: 'Giải quyết bài toán thực tế',
      description: 'Áp dụng vào thực tiễn: giải thích hiện tượng gió mùa, ứng phó hạn mặn, tính mật độ dân cư.',
      status: tier === 'mastery' ? 'unlocked' : 'locked',
      estimatedMinutes: 10,
    },
    {
      stationNumber: 5,
      title: 'Trạm 5: Kiểm tra làm chủ',
      subtitle: 'Xác nhận vượt chuẩn YCCĐ',
      description: 'Làm bài đánh giá lại (Post-test) để chính thức ghi nhận làm chủ và mở khóa huy hiệu.',
      status: 'locked',
      estimatedMinutes: 12,
    },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* HEADER BANNER */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#1a365d] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-400 text-slate-950 font-black">
            <Map className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-black">
              GeoPath AI – Bản đồ hành trình 5 trạm cá nhân hóa
            </h1>
            <p className="mt-1 text-xs sm:text-sm text-slate-200">
              Lộ trình được sinh tự động dựa trên mức độ thành thạo và phổ lỗi sai của em.
            </p>
          </div>
        </div>

        {/* TIER BADGE */}
        <div className={`mt-5 p-3.5 rounded-xl border ${tierLabels[tier].color} flex items-start gap-2.5`}>
          <Sparkles className="h-4 w-4 shrink-0 mt-0.5" />
          <div>
            <div className="text-xs font-black">{tierLabels[tier].title}</div>
            <p className="text-[11px] mt-0.5 leading-relaxed">{tierLabels[tier].desc}</p>
          </div>
        </div>
      </div>

      {/* 5 STATIONS TIMELINE */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>HÀNH TRÌNH CHINH PHỤC 5 TRẠM KIẾN THỨC</span>
          <span>Điểm năng lực hiện tại: {score}%</span>
        </div>

        <div className="space-y-3 relative">
          {stations.map((st) => {
            const isCompleted = st.status === 'completed';
            const isLocked = st.status === 'locked';

            return (
              <div
                key={st.stationNumber}
                className={`rounded-2xl border p-5 shadow-xs transition-all ${
                  isCompleted
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : isLocked
                    ? 'border-slate-200 bg-slate-50/60 opacity-70'
                    : 'border-teal-400 bg-white ring-2 ring-teal-100 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black shrink-0 ${
                        isCompleted
                          ? 'bg-emerald-500 text-white'
                          : isLocked
                          ? 'bg-slate-200 text-slate-500'
                          : 'bg-teal-500 text-slate-950 font-black'
                      }`}
                    >
                      {isCompleted ? '✓' : isLocked ? <Lock className="h-4 w-4" /> : st.stationNumber}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-black text-slate-900">{st.title}</h3>
                        <span className="text-xs font-bold text-teal-700">({st.subtitle})</span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600 leading-relaxed max-w-xl">
                        {st.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center sm:flex-col sm:items-end justify-between gap-2 shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                      <Clock className="h-3 w-3" />
                      ~{st.estimatedMinutes} phút
                    </span>

                    {!isLocked ? (
                      <button
                        onClick={() => onNavigateTab('geolearn')}
                        className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors"
                      >
                        <Play className="h-3.5 w-3.5 fill-slate-950" />
                        <span>{isCompleted ? 'Học lại trạm này' : 'Bắt đầu học ngay'}</span>
                      </button>
                    ) : (
                      <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                        <Lock className="h-3 w-3" />
                        Mở khóa sau Trạm {st.stationNumber - 1}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
