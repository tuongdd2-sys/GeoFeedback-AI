import React, { useState, useEffect } from 'react';
import { Grade, StudentProfile, TeacherProfile, AssessmentSession, TextbookSource } from './types';
import { storageService } from './services/storageService';
import { OFFICIAL_TEXTBOOK_CHAPTERS } from './data/curriculumData';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { StudentDashboard } from './components/StudentDashboard';
import { LessonSelector } from './components/LessonSelector';
import { GeoCheckQuiz } from './components/GeoCheckQuiz';
import { GeoErrorDNAResult } from './components/GeoErrorDNAResult';
import { GeoPathRoadmap } from './components/GeoPathRoadmap';
import { GeoLearnRoom } from './components/GeoLearnRoom';
import { GeoMentorChatbot } from './components/GeoMentorChatbot';
import { GeoProgressTracker } from './components/GeoProgressTracker';
import { TeacherPortal } from './components/TeacherPortal';
import { GeoLessonView } from './components/GeoLessonView';
import { GeoRepairView } from './components/GeoRepairView';
import { GeoMasteryView } from './components/GeoMasteryView';
import { StudentAuthModal } from './components/StudentAuthModal';
import { TeacherAuthModal } from './components/TeacherAuthModal';
import { TeacherNavbar } from './components/TeacherNavbar';
import { Compass, Sparkles, BookOpen, Lock, ShieldCheck } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [activeGrade, setActiveGrade] = useState<Grade>(storageService.getActiveGrade());
  const [userRole, setUserRole] = useState<'student' | 'teacher'>(storageService.getUserRole());
  const [currentTeacher, setCurrentTeacher] = useState<TeacherProfile | null>(storageService.getCurrentTeacher());
  const [profile, setProfile] = useState<StudentProfile>(storageService.getProfile());
  const [sessions, setSessions] = useState<AssessmentSession[]>(storageService.getSessions());
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isTeacherAuthModalOpen, setIsTeacherAuthModalOpen] = useState<boolean>(false);

  // Current lesson in focus (defaults to benchmark Grade 6 Lesson 1)
  const [selectedLessonId, setSelectedLessonId] = useState<string>('G6-L1');

  // Active quiz parameter state
  const [quizParams, setQuizParams] = useState<{
    lessonId?: string;
    lessonTitle?: string;
    isPostTest?: boolean;
  }>({});

  // Active result session to inspect in GeoError DNA
  const [activeResultSession, setActiveResultSession] = useState<AssessmentSession | null>(
    sessions.length > 0 ? sessions[0] : null
  );

  const refreshState = () => {
    setProfile(storageService.getProfile());
    setSessions(storageService.getSessions());
    setCurrentTeacher(storageService.getCurrentTeacher());
    setUserRole(storageService.getUserRole());
  };

  const handleGradeChange = (grade: Grade) => {
    setActiveGrade(grade);
    storageService.setActiveGrade(grade);
    const firstLessonOfGrade = OFFICIAL_TEXTBOOK_CHAPTERS.find((l) => l.grade === grade);
    if (firstLessonOfGrade) {
      setSelectedLessonId(firstLessonOfGrade.lessonId);
    }
    refreshState();
  };

  const handleOpenTeacherPortal = () => {
    if (storageService.isTeacherAuthenticated()) {
      setUserRole('teacher');
      setCurrentTab('teacher');
    } else {
      setIsTeacherAuthModalOpen(true);
    }
  };

  const handleTeacherAuthSuccess = (teacher: TeacherProfile) => {
    setCurrentTeacher(teacher);
    setUserRole('teacher');
    setCurrentTab('teacher');
    refreshState();
  };

  const handleTeacherLogout = () => {
    storageService.logoutTeacher();
    setCurrentTeacher(null);
    setUserRole('student');
    setCurrentTab('dashboard');
    refreshState();
  };

  const handleSafeSetTab = (tab: string) => {
    if (tab === 'teacher' && !storageService.isTeacherAuthenticated()) {
      setIsTeacherAuthModalOpen(true);
      return;
    }
    setCurrentTab(tab);
  };

  const handleResetData = () => {
    if (window.confirm('Em có chắc chắn muốn đặt lại dữ liệu ứng dụng về trạng thái mặc định ban đầu không?')) {
      storageService.resetAllData();
      setActiveGrade(storageService.getActiveGrade());
      setUserRole(storageService.getUserRole());
      setCurrentTeacher(null);
      refreshState();
      setCurrentTab('dashboard');
    }
  };

  const handleStartQuiz = (grade: Grade, lessonId?: string, lessonTitle?: string, isPostTest: boolean = false) => {
    setActiveGrade(grade);
    storageService.setActiveGrade(grade);
    setQuizParams({
      lessonId,
      lessonTitle: lessonTitle || 'Khảo sát năng lực Địa lí THCS',
      isPostTest,
    });
    setCurrentTab('geocheck');
  };

  const handleFinishQuiz = (session: AssessmentSession) => {
    setActiveResultSession(session);
    refreshState();
    setCurrentTab('error_dna');
  };

  const handleAuthSuccess = (newProfile: StudentProfile) => {
    setProfile(newProfile);
    setActiveGrade(newProfile.grade);
    refreshState();
  };

  const currentSelectedLesson =
    OFFICIAL_TEXTBOOK_CHAPTERS.find((l) => l.lessonId === selectedLessonId) ||
    OFFICIAL_TEXTBOOK_CHAPTERS.find((l) => l.grade === activeGrade) ||
    OFFICIAL_TEXTBOOK_CHAPTERS[0];

  // DEDICATED TEACHER WORKSPACE (COMPLETELY SEPARATED FROM STUDENT)
  if (userRole === 'teacher' && storageService.isTeacherAuthenticated() && currentTeacher) {
    return (
      <div className="min-h-screen glacial-landscape ice-crevasse-overlay text-slate-900 flex flex-col font-sans relative selection:bg-purple-200">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-400 to-teal-400 pointer-events-none z-50 shadow-xs" />
        <TeacherNavbar
          currentTeacher={currentTeacher}
          activeGrade={activeGrade}
          onGradeChange={handleGradeChange}
          onLogout={handleTeacherLogout}
        />
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <TeacherPortal
            activeGrade={activeGrade}
            profile={profile}
            currentTeacher={currentTeacher}
            onRefreshData={refreshState}
            onLogout={handleTeacherLogout}
          />
        </main>
        <footer className="border-t border-purple-900/30 bg-[#160b2e] text-purple-200 py-6 text-center text-xs">
          <div className="max-w-7xl mx-auto px-4 space-y-1">
            <div className="font-bold text-white flex items-center justify-center gap-2">
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>Cổng Quản trị Giáo viên GeoFeedback AI – Bảo mật theo chuẩn GDPT 2018</span>
            </div>
            <p className="text-[11px] text-purple-300">
              Cán bộ phụ trách: {currentTeacher.fullName} ({currentTeacher.email}) • {currentTeacher.schoolName}
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen glacial-landscape ice-crevasse-overlay text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900 relative">
      {/* Glacial Aurora Ice Glow Top Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-400 pointer-events-none z-50 shadow-xs" />

      {/* STUDENT NAVBAR (Streamlined, No Total/5-Station, No Teacher controls) */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={handleSafeSetTab}
        activeGrade={activeGrade}
        onGradeChange={handleGradeChange}
        profile={profile}
        onResetData={handleResetData}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        selectedLesson={{
          lessonId: currentSelectedLesson.lessonId,
          lessonTitle: currentSelectedLesson.lessonTitle,
          chapterTitle: currentSelectedLesson.chapterTitle,
          grade: currentSelectedLesson.grade,
        }}
        onNavigateToLesson={() => {
          setSelectedLessonId(currentSelectedLesson.lessonId);
          setCurrentTab('geolesson');
        }}
      />

      {/* STUDENT AUTH MODAL */}
      <StudentAuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={handleAuthSuccess}
      />

      {/* TEACHER AUTH MODAL */}
      <TeacherAuthModal
        isOpen={isTeacherAuthModalOpen}
        onClose={() => setIsTeacherAuthModalOpen(false)}
        onAuthSuccess={handleTeacherAuthSuccess}
      />

      {/* MAIN VIEW CONTAINER */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* TAB 1: LANDING */}
        {currentTab === 'landing' && (
          <LandingPage
            onStartLearning={() => setCurrentTab('dashboard')}
            onOpenTeacher={handleOpenTeacherPortal}
            onExploreLessons={() => setCurrentTab('geolesson')}
          />
        )}

        {/* TAB 2: DASHBOARD */}
        {currentTab === 'dashboard' && (
          <StudentDashboard
            profile={profile}
            activeGrade={activeGrade}
            onGradeChange={handleGradeChange}
            onNavigate={(tab, extra) => {
              if (extra?.lessonId) setSelectedLessonId(extra.lessonId);
              setCurrentTab(tab);
            }}
            onStartQuiz={(grade, lessonId) => handleStartQuiz(grade, lessonId)}
          />
        )}

        {/* TAB 2.5: GEOLESSON (BƯỚC 1: ÔN TẬP KIẾN THỨC SGK 5 PHẦN) */}
        {currentTab === 'geolesson' && (
          <GeoLessonView
            activeGrade={activeGrade}
            selectedLessonId={selectedLessonId}
            onSelectLesson={(lId) => {
              setSelectedLessonId(lId);
            }}
            onStartPracticeQuiz={(lId) => {
              setSelectedLessonId(lId);
              storageService.updateLessonProgress(lId, { status: 'studied_lesson' });
              handleStartQuiz(activeGrade, lId);
            }}
          />
        )}

        {/* TAB 3: LESSONS (CHỌN BÀI HỌC SGK) */}
        {currentTab === 'lessons' && (
          <LessonSelector
            activeGrade={activeGrade}
            onGradeChange={handleGradeChange}
            onSelectLessonForStudy={(lesson) => {
              setSelectedLessonId(lesson.lessonId);
              setCurrentTab('geolesson');
            }}
            onSelectLessonForQuiz={(lesson) => {
              setSelectedLessonId(lesson.lessonId);
              handleStartQuiz(activeGrade, lesson.lessonId, lesson.lessonTitle);
            }}
          />
        )}

        {/* TAB 4: GEOCHECK (BƯỚC 2: LÀM BÀI LUYỆN TẬP GEOQUIZ) */}
        {currentTab === 'geocheck' && (
          <GeoCheckQuiz
            activeGrade={activeGrade}
            lessonId={quizParams.lessonId || selectedLessonId}
            lessonTitle={quizParams.lessonTitle}
            isPostTest={quizParams.isPostTest}
            onFinishQuiz={handleFinishQuiz}
          />
        )}

        {/* TAB 5: GEOERROR DNA (BƯỚC 3: CHẨN ĐOÁN LỖ HỔNG AI) */}
        {currentTab === 'error_dna' && (
          activeResultSession ? (
            <GeoErrorDNAResult
              session={activeResultSession}
              onNavigateTab={(tab, extra) => {
                if (extra?.lessonId) setSelectedLessonId(extra.lessonId);
                setCurrentTab(tab);
              }}
              onRetakeQuiz={() =>
                handleStartQuiz(activeGrade, activeResultSession.lessonId, activeResultSession.lessonTitle)
              }
            />
          ) : (
            <div className="rounded-2xl bg-white p-8 border border-slate-200 text-center">
              <Compass className="mx-auto h-12 w-12 text-teal-500 mb-2" />
              <h3 className="text-base font-bold text-slate-800">Chưa có kết quả chẩn đoán nào gần đây</h3>
              <button
                onClick={() => handleStartQuiz(activeGrade, selectedLessonId)}
                className="mt-3 px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs"
              >
                Làm bài kiểm tra GeoQuiz ngay
              </button>
            </div>
          )
        )}

        {/* TAB 5.5: GEOREPAIR (BƯỚC 4: ÔN TẬP BỔ SUNG 5 BƯỚC) */}
        {currentTab === 'georepair' && (
          <GeoRepairView
            profile={profile}
            activeGrade={activeGrade}
            lessonId={selectedLessonId}
            onNavigateTab={(tab) => setCurrentTab(tab)}
            onStartMasteryTest={(lId) => {
              setSelectedLessonId(lId);
              setCurrentTab('geomastery');
            }}
          />
        )}

        {/* TAB 5.8: GEOMASTERY (BƯỚC 5 & 6: ĐÁNH GIÁ LẠI & LÀM CHỦ BÀI HỌC) */}
        {currentTab === 'geomastery' && (
          <GeoMasteryView
            activeGrade={activeGrade}
            lessonId={selectedLessonId}
            profile={profile}
            onFinishMastery={() => {
              refreshState();
              setCurrentTab('progress');
            }}
            onReturnToRepair={() => setCurrentTab('georepair')}
            onExploreNextLesson={() => {
              refreshState();
              setCurrentTab('geolesson');
            }}
          />
        )}

        {/* TAB 6: GEOPATH (LỘ TRÌNH 5 TRẠM CÁ NHÂN HÓA) */}
        {currentTab === 'geopath' && (
          <GeoPathRoadmap
            profile={profile}
            activeGrade={activeGrade}
            onNavigateTab={(tab) => setCurrentTab(tab)}
          />
        )}

        {/* TAB 7: GEOLEARN (PHÒNG HỌC BÙ ĐẮP KIẾN THỨC 4 PHẦN) */}
        {currentTab === 'geolearn' && (
          <GeoLearnRoom
            profile={profile}
            activeGrade={activeGrade}
            onNavigateTab={(tab) => setCurrentTab(tab)}
          />
        )}

        {/* TAB 8: GEOMENTOR AI (GIA SƯ TRÒ CHUYỆN SOCRATIC) */}
        {currentTab === 'geomentor' && (
          <GeoMentorChatbot
            profile={profile}
            activeGrade={activeGrade}
          />
        )}

        {/* TAB 9: GEOPROGRESS & GEOQUEST (TIẾN ĐỘ, SPACED REPETITION, HUY HIỆU) */}
        {currentTab === 'progress' && (
          <GeoProgressTracker
            profile={profile}
            sessions={sessions}
            activeGrade={activeGrade}
            onRefresh={refreshState}
            onNavigateTab={(tab) => setCurrentTab(tab)}
          />
        )}

        {/* TAB 10: GEOTEACHER (BẢNG ĐIỀU KHIỂN GIÁO VIÊN & HEATMAP) */}
        {currentTab === 'teacher' && (
          storageService.isTeacherAuthenticated() ? (
            <TeacherPortal
              activeGrade={activeGrade}
              profile={profile}
              currentTeacher={currentTeacher}
              onRefreshData={refreshState}
              onLogout={handleTeacherLogout}
            />
          ) : (
            <div className="max-w-md mx-auto my-12 p-8 rounded-3xl bg-white border border-purple-200 text-center space-y-4 shadow-xl">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                🔐
              </div>
              <h2 className="text-xl font-black text-slate-900">Yêu cầu Đăng nhập Giáo viên</h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khu vực Quản trị học sinh, chẩn đoán Error DNA và quản lí câu hỏi yêu cầu tài khoản Giáo viên chính thức. Học sinh không được phép tự chuyển đổi nếu chưa xác thực thông tin giáo viên.
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => setIsTeacherAuthModalOpen(true)}
                  className="w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Lock className="h-4 w-4" />
                  <span>Đăng nhập / Đăng kí Giáo viên</span>
                </button>
                <button
                  onClick={() => setCurrentTab('dashboard')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-all cursor-pointer"
                >
                  Quay lại Trang học sinh
                </button>
              </div>
            </div>
          )
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-sky-900/20 bg-[#102A43] text-white py-8 mt-12 text-center text-xs">
        <div className="max-w-7xl mx-auto px-4 space-y-2.5">
          <div className="flex items-center justify-center gap-2 font-black text-sm text-teal-300">
            <Compass className="h-4 w-4 text-teal-400" />
            <span>GeoFeedback AI – Trợ lý chẩn đoán lỗi sai và cá nhân hóa ôn tập Địa lí THCS</span>
          </div>

          <p className="text-amber-300 font-bold">
            “Hiểu lỗi sai – Học đúng cách – Làm chủ Địa lí”
          </p>

          <p className="text-slate-400 max-w-2xl mx-auto text-[11px] leading-relaxed">
            Học liệu chuẩn: Phần Địa lí trong 4 cuốn SGK Lịch sử và Địa lí Lớp 6, 7, 8, 9 (Bộ sách Kết nối tri thức với cuộc sống, NXB Giáo dục Việt Nam). Định hướng Chương trình GDPT 2018.
          </p>

          <div className="text-[10px] text-slate-500 pt-2 border-t border-white/10 flex items-center justify-center gap-4">
            <button onClick={() => setCurrentTab('landing')} className="hover:text-teal-300">
              Trang giới thiệu
            </button>
            <span>•</span>
            <button
              onClick={() => {
                setUserRole('student');
                setCurrentTab('dashboard');
              }}
              className="hover:text-teal-300 font-medium"
            >
              Giao diện Học sinh
            </button>
            <span>•</span>
            <button
              onClick={handleOpenTeacherPortal}
              className="hover:text-slate-300 text-slate-500 flex items-center gap-1 transition-colors"
              title="Cổng dành riêng cho Cán bộ Quản lí / Giáo viên (Yêu cầu xác thực tài khoản)"
            >
              <Lock className="h-3 w-3 text-slate-500" />
              <span>Cổng Giáo viên 🔒</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
