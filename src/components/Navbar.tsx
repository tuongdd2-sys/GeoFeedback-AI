import React, { useState, useEffect, useRef } from 'react';
import { Grade, StudentProfile } from '../types';
import { GeoMimiMascot } from './GeoMimiMascot';
import {
  RotateCcw,
  Menu,
  X,
  MessageSquare,
  TrendingUp,
  ChevronDown,
  Check,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  activeGrade: Grade;
  onGradeChange: (grade: Grade) => void;
  profile: StudentProfile;
  onResetData: () => void;
  onOpenAuthModal: () => void;
  selectedLesson?: {
    lessonId: string;
    lessonTitle: string;
    chapterTitle?: string;
    grade: Grade;
  };
  onNavigateToLesson?: () => void;
}

const GRADE_INFO: Record<Grade, { label: string; icon: string; desc: string }> = {
  6: { label: 'Lớp 6', icon: '🌍', desc: 'Trái Đất & Địa lí tự nhiên' },
  7: { label: 'Lớp 7', icon: '🌏', desc: 'Địa lí các châu lục' },
  8: { label: 'Lớp 8', icon: '🏔️', desc: 'Địa lí tự nhiên Việt Nam' },
  9: { label: 'Lớp 9', icon: '🌾', desc: 'Địa lí kinh tế - xã hội VN' },
};

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  activeGrade,
  onGradeChange,
  profile,
  onResetData,
  onOpenAuthModal,
  selectedLesson,
  onNavigateToLesson,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gradeDropdownOpen, setGradeDropdownOpen] = useState(false);
  const [confirmResetOpen, setConfirmResetOpen] = useState(false);

  const gradeRef = useRef<HTMLDivElement>(null);

  // Close grade dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (gradeRef.current && !gradeRef.current.contains(event.target as Node)) {
        setGradeDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[#0d2238]/95 backdrop-blur-md text-white border-b border-sky-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 gap-2">
          
          {/* 1. BRAND & MASCOT */}
          <div
            className="flex items-center gap-2.5 cursor-pointer shrink-0 group select-none py-1"
            onClick={() => {
              setCurrentTab('dashboard');
              setGradeDropdownOpen(false);
            }}
          >
            <GeoMimiMascot size="sm" mood="explorer" className="transition-transform group-hover:scale-110 drop-shadow" />
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-teal-300 transition-colors">
                GeoFeedback <span className="text-teal-400">AI</span>
              </span>
              <span className="hidden sm:inline-block rounded-md bg-teal-500/20 px-1.5 py-0.5 text-[10px] font-bold text-teal-300 border border-teal-400/30">
                GDPT 2018
              </span>
            </div>
          </div>

          {/* 2. ACTIVE LESSON STATUS BADGE (Desktop & Tablet) */}
          {selectedLesson && (
            <button
              onClick={() => {
                if (onNavigateToLesson) {
                  onNavigateToLesson();
                } else {
                  setCurrentTab('geolesson');
                }
              }}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-950/70 hover:bg-teal-900 border border-teal-500/40 hover:border-teal-400 text-teal-200 transition-all text-xs cursor-pointer shadow-xs group max-w-[180px] lg:max-w-[240px] xl:max-w-[320px]"
              title={`Bài học đang chọn: ${selectedLesson.lessonTitle} (${selectedLesson.chapterTitle || ''}) - Nhấn để mở Sổ tay SGK`}
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
              </span>
              <span className="text-[10px] uppercase font-bold text-teal-300 tracking-wider shrink-0 hidden lg:inline">
                Đang học:
              </span>
              <span className="font-semibold text-white group-hover:text-teal-300 truncate text-[11px]">
                {selectedLesson.lessonTitle}
              </span>
            </button>
          )}

          {/* 3. PRIMARY NAVIGATION (Streamlined: Only Chatbot AI & Progress) */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {/* Chatbot AI */}
            <button
              onClick={() => setCurrentTab('geomentor')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTab === 'geomentor'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>Chatbot AI</span>
            </button>

            {/* Tiến bộ */}
            <button
              onClick={() => setCurrentTab('progress')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                currentTab === 'progress'
                  ? 'bg-teal-500 text-slate-950 shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <TrendingUp className="h-3.5 w-3.5" />
              <span>Tiến bộ</span>
            </button>
          </nav>

          {/* 4. RIGHT UTILITIES (Grade Picker, Student Profile & Points, Reset) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            {/* COMPACT GRADE PICKER DROPDOWN */}
            <div className="relative" ref={gradeRef}>
              <button
                onClick={() => setGradeDropdownOpen(!gradeDropdownOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-sky-950/90 hover:bg-sky-900 border border-sky-700/80 text-xs font-bold text-sky-100 transition-all shadow-xs cursor-pointer"
                title="Chọn khối lớp Địa lí đang học"
              >
                <span className="text-sm">{GRADE_INFO[activeGrade].icon}</span>
                <span>Lớp {activeGrade}</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 text-sky-400 ${
                    gradeDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Grade Dropdown Menu */}
              {gradeDropdownOpen && (
                <div className="absolute right-0 mt-1.5 w-60 rounded-2xl bg-[#0f2742] border border-sky-700/90 shadow-2xl p-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-2 py-1 text-[10px] font-bold text-sky-300 uppercase tracking-wider border-b border-sky-800/80 mb-1">
                    Chọn khối lớp SGK
                  </div>
                  <div className="space-y-1">
                    {([6, 7, 8, 9] as Grade[]).map((g) => {
                      const isSel = activeGrade === g;
                      return (
                        <button
                          key={g}
                          onClick={() => {
                            onGradeChange(g);
                            setGradeDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all ${
                            isSel
                              ? 'bg-teal-500 text-slate-950 font-bold'
                              : 'text-slate-200 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-base">{GRADE_INFO[g].icon}</span>
                            <div>
                              <div className="font-bold leading-tight">Lớp {g}</div>
                              <div className={`text-[10px] leading-tight ${isSel ? 'text-slate-800' : 'text-slate-400'}`}>
                                {GRADE_INFO[g].desc}
                              </div>
                            </div>
                          </div>
                          {isSel && <Check className="h-4 w-4 text-slate-950" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* UNIFIED STUDENT ACCOUNT & POINTS CHIP */}
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl bg-sky-900/50 hover:bg-sky-800/80 border border-sky-700/70 text-xs text-sky-100 transition-all cursor-pointer shadow-xs group"
              title="Tài khoản học sinh, lớp học và điểm GeoPoints"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{profile.avatar || '❄️'}</span>
                <span className="font-bold text-white group-hover:text-teal-300 transition-colors max-w-[90px] truncate">
                  {profile.displayName}
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-teal-400/20 text-teal-300 font-bold border border-teal-400/30">
                  {profile.className || `Lớp ${activeGrade}`}
                </span>
              </div>
              <div className="h-3 w-px bg-sky-700/70" />
              <div className="flex items-center gap-1 text-amber-300 font-black text-[11px]">
                <Sparkles className="h-3 w-3 text-amber-300" />
                <span>{profile.geoPoints}</span>
              </div>
            </button>

            {/* RESET DATA QUICK BUTTON */}
            <div className="relative">
              <button
                onClick={() => setConfirmResetOpen(true)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-white/10 transition-colors cursor-pointer"
                title="Đặt lại dữ liệu học tập ban đầu"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>

              {/* Confirmation Popup */}
              {confirmResetOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#0f2742] border border-rose-500/50 shadow-2xl p-3 z-50 text-xs">
                  <div className="flex items-center gap-2 text-rose-300 font-bold mb-1.5">
                    <ShieldAlert className="h-4 w-4 shrink-0" />
                    <span>Đặt lại dữ liệu?</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-tight mb-2.5">
                    Thao tác này sẽ thiết lập lại điểm số và lịch sử làm bài về mặc định ban đầu.
                  </p>
                  <div className="flex items-center justify-end gap-1.5">
                    <button
                      onClick={() => setConfirmResetOpen(false)}
                      className="px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] font-semibold"
                    >
                      Hủy
                    </button>
                    <button
                      onClick={() => {
                        setConfirmResetOpen(false);
                        onResetData();
                      }}
                      className="px-2.5 py-1 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-[11px] font-bold"
                    >
                      Xác nhận
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 5. MOBILE CONTROLS TOGGLE */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAuthModal}
              className="flex items-center gap-1 bg-amber-400/20 border border-amber-300/30 px-2 py-1 rounded-full text-xs font-bold text-amber-300"
            >
              <span>{profile.avatar}</span>
              <span>{profile.geoPoints} pts</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-300 hover:bg-white/10"
              aria-label="Mở menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 6. MOBILE DRAWER (Dedicated to Student, Zero Teacher Distractions) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-sky-800 bg-[#0c1f33] px-4 py-3 space-y-3 max-h-[85vh] overflow-y-auto">
          {/* Student Account Bar Mobile */}
          <div className="flex items-center justify-between p-2 rounded-xl bg-sky-900/60 border border-sky-700/80">
            <div className="flex items-center gap-2">
              <span className="text-xl">{profile.avatar || '❄️'}</span>
              <div>
                <div className="text-xs font-bold text-white">{profile.displayName}</div>
                <div className="text-[10px] text-teal-300 font-semibold">{profile.className || `Lớp ${activeGrade}`}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-black text-amber-300 flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {profile.geoPoints} pts
              </span>
              <button
                onClick={() => {
                  onOpenAuthModal();
                  setMobileMenuOpen(false);
                }}
                className="px-2 py-1 rounded-lg bg-teal-500/20 text-teal-300 border border-teal-400/30 text-[10px] font-bold"
              >
                Đổi
              </button>
            </div>
          </div>

          {/* Mobile Current Selected Lesson Badge */}
          {selectedLesson && (
            <button
              onClick={() => {
                if (onNavigateToLesson) {
                  onNavigateToLesson();
                } else {
                  setCurrentTab('geolesson');
                }
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-teal-950/80 border border-teal-500/40 text-teal-100 text-xs text-left group transition-all hover:bg-teal-900/60"
            >
              <div className="flex items-center gap-2 min-w-0 pr-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
                </span>
                <div className="min-w-0">
                  <div className="text-[10px] font-bold text-teal-400 uppercase tracking-wider">
                    Bài học đang học:
                  </div>
                  <div className="font-bold text-white text-xs truncate">
                    {selectedLesson.lessonTitle}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-teal-300 bg-teal-500/20 px-2 py-0.5 rounded border border-teal-400/30 shrink-0">
                Xem SGK →
              </span>
            </button>
          )}

          {/* Grade selection row */}
          <div>
            <div className="text-[11px] font-bold text-slate-400 mb-1.5 flex items-center justify-between">
              <span>Khối lớp Địa lí SGK:</span>
              <span className="text-teal-300 font-semibold">{GRADE_INFO[activeGrade].desc}</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {([6, 7, 8, 9] as Grade[]).map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    onGradeChange(g);
                  }}
                  className={`py-1.5 rounded-xl text-xs font-bold flex flex-col items-center gap-0.5 transition-all ${
                    activeGrade === g
                      ? 'bg-gradient-to-r from-teal-400 to-sky-400 text-slate-950 shadow-md font-black'
                      : 'bg-sky-950 text-slate-300 border border-sky-800'
                  }`}
                >
                  <span className="text-sm">{GRADE_INFO[g].icon}</span>
                  <span>Lớp {g}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Student Tabs: Chatbot AI & Progress */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setCurrentTab('geomentor');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-left text-xs font-bold flex items-center gap-2 transition-all ${
                currentTab === 'geomentor'
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-white/5 text-slate-200'
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chatbot AI</span>
            </button>
            <button
              onClick={() => {
                setCurrentTab('progress');
                setMobileMenuOpen(false);
              }}
              className={`p-2.5 rounded-xl text-left text-xs font-bold flex items-center gap-2 transition-all ${
                currentTab === 'progress'
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-white/5 text-slate-200'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              <span>Tiến bộ</span>
            </button>
          </div>

          {/* Reset Action */}
          <div className="pt-2 border-t border-sky-800 flex items-center justify-end">
            <button
              onClick={() => {
                if (window.confirm('Bạn có chắc muốn đặt lại dữ liệu học tập về ban đầu?')) {
                  onResetData();
                  setMobileMenuOpen(false);
                }
              }}
              className="text-rose-400 text-xs font-semibold hover:underline"
            >
              Đặt lại dữ liệu
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
