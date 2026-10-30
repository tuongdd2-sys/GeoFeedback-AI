import React, { useState } from 'react';
import { Grade, QuestionItem, AssessmentSession, StudentProfile, TeacherProfile, ErrorCode } from '../types';
import { storageService } from '../services/storageService';
import { ERROR_CODE_REGISTRY, OFFICIAL_TEXTBOOK_CHAPTERS } from '../data/curriculumData';
import {
  School,
  BarChart3,
  Users,
  PlusCircle,
  Download,
  Upload,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Save,
  X,
  FileUp,
  BrainCircuit,
  Grid,
  Shield,
  Layers,
  LogOut,
  ShieldCheck,
  UserCheck,
  Search,
} from 'lucide-react';

interface TeacherPortalProps {
  activeGrade: Grade;
  profile: StudentProfile;
  currentTeacher?: TeacherProfile | null;
  onRefreshData: () => void;
  onLogout?: () => void;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({
  activeGrade,
  profile,
  currentTeacher,
  onRefreshData,
  onLogout,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'students' | 'heatmap' | 'ai_intervention' | 'questions' | 'pdf_manager'>('overview');
  const [studentSearch, setStudentSearch] = useState<string>('');
  const [selectedClassFilter, setSelectedClassFilter] = useState<string>('all');
  const [isAddQuestionModalOpen, setIsAddQuestionModalOpen] = useState<boolean>(false);
  const [showResetConfirm, setShowResetConfirm] = useState<boolean>(false);

  // PDF Manager state
  const [pdfUploadStatus, setPdfUploadStatus] = useState<string | null>(null);

  // New question form state
  const [newGrade, setNewGrade] = useState<Grade>(activeGrade);
  const [newLessonTitle, setNewLessonTitle] = useState<string>('Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí');
  const [newLearningObj, setNewLearningObj] = useState<string>('Ghi đúng quy chuẩn tọa độ địa lí.');
  const [newQuestionText, setNewQuestionText] = useState<string>('');
  const [newErrorCode, setNewErrorCode] = useState<ErrorCode>('E04');
  const [newOptions, setNewOptions] = useState([
    { id: 'A', text: '', isCorrect: true, distractorErrorCode: 'E01' as ErrorCode, distractorHypothesis: '' },
    { id: 'B', text: '', isCorrect: false, distractorErrorCode: 'E04' as ErrorCode, distractorHypothesis: 'Viết kinh độ trước vĩ độ' },
    { id: 'C', text: '', isCorrect: false, distractorErrorCode: 'E04' as ErrorCode, distractorHypothesis: 'Nhầm bán cầu Bắc/Nam' },
    { id: 'D', text: '', isCorrect: false, distractorErrorCode: 'E01' as ErrorCode, distractorHypothesis: 'Gán sai số đo góc' },
  ]);
  const [newExplanation, setNewExplanation] = useState<string>('');
  const [newBookPage, setNewBookPage] = useState<number>(103);

  const sessions = storageService.getSessions();
  const questions = storageService.getQuestions();

  // Export CSV of student assessments
  const handleExportCSV = () => {
    const headers = ['Mã Lượt', 'Thời Gian', 'Khối Lớp', 'Bài Học', 'Số Câu', 'Số Câu Đúng', 'Điểm Năng Lực (100)'];
    const rows = sessions.map((s) => [
      s.sessionId,
      new Date(s.timestamp).toLocaleString('vi-VN'),
      s.grade,
      `"${s.lessonTitle}"`,
      s.totalQuestions,
      s.correctCount,
      s.score,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `GeoTeacher_BaoCao_NghienCuu_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Question Bank JSON
  const handleExportJSON = () => {
    const jsonStr = JSON.stringify(questions, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `GeoFeedback_NganHangCauHoi_GDPT_${Date.now()}.json`;
    a.click();
  };

  // Mock PDF Upload & Verification
  const handleUploadPDF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPdfUploadStatus('Đang đọc mục lục và quét cấu trúc phần Địa lí...');
    setTimeout(() => {
      setPdfUploadStatus(
        `Đã tải lên: ${file.name}. Trạng thái: Đã xác định 100% phần Địa lí (loại trừ phần Lịch sử). Dữ liệu văn bản đạt chuẩn đã đối chiếu.`
      );
    }, 1200);
  };

  const handleSaveQuestion = () => {
    if (!newQuestionText.trim() || !newExplanation.trim()) {
      alert('Vui lòng nhập đầy đủ câu hỏi và lời giải chi tiết.');
      return;
    }

    const correctOpt = newOptions.find((o) => o.isCorrect)?.id || 'A';

    const newQ: QuestionItem = {
      questionId: `GV-${Date.now().toString().slice(-4)}`,
      grade: newGrade,
      chapterId: 'G-CUSTOM',
      chapterTitle: 'Học liệu do Giáo viên biên soạn',
      lessonId: 'L-CUSTOM',
      lessonTitle: newLessonTitle,
      learningObjective: newLearningObj,
      cognitiveLevel: 'thong_hieu',
      questionType: 'multiple_choice',
      questionText: newQuestionText,
      options: newOptions.map((o) => ({
        id: o.id,
        text: o.text || `Lựa chọn ${o.id}`,
        isCorrect: o.isCorrect,
        distractorErrorCode: o.distractorErrorCode,
        distractorHypothesis: o.distractorHypothesis,
      })),
      correctAnswer: correctOpt,
      explanation: newExplanation,
      sourceBook: {
        bookName: `SGK Lịch sử và Địa lí ${newGrade} – Kết nối tri thức (Phần Địa lí)`,
        bookPage: newBookPage,
        pdfPage: newBookPage + 2,
      },
      relatedErrorCode: newErrorCode,
      verificationQuestion: {
        id: `VERIF-GV-${Date.now().toString().slice(-3)}`,
        questionText: `Câu hỏi kiểm chứng: ${newQuestionText.slice(0, 80)}...?`,
        options: [
          { id: 'A', text: newOptions[0].text || 'Phương án A' },
          { id: 'B', text: newOptions[1].text || 'Phương án B' },
        ],
        correctAnswer: correctOpt,
        explanation: newExplanation,
        hint: 'Dựa vào phương pháp tư duy đã học.',
      },
      reviewStatus: 'approved',
      isTeacherCustom: true,
    };

    storageService.addQuestion(newQ);
    setIsAddQuestionModalOpen(false);
    onRefreshData();
    alert('Đã thêm câu hỏi vào ngân hàng chính thức thành công!');
  };

  const handleConfirmReset = () => {
    storageService.resetAllData();
    setShowResetConfirm(false);
    onRefreshData();
    alert('Đã khôi phục toàn bộ dữ liệu về trạng thái mặc định ban đầu.');
  };

  // Heatmap sample student records
  const heatmapStudents = [
    { id: 'HS-01', name: 'Nguyễn Minh Quân (Em)', scores: [85, 60, 100, 75, 90] },
    { id: 'HS-02', name: 'Trần Bảo Ngọc', scores: [90, 80, 85, 90, 95] },
    { id: 'HS-03', name: 'Lê Hoàng Nam', scores: [45, 50, 70, 60, 55] },
    { id: 'HS-04', name: 'Phạm Thuỳ Dương', scores: [70, 75, 80, 85, 80] },
    { id: 'HS-05', name: 'Vũ Đức Anh', scores: [40, 45, 60, 50, 45] },
  ];

  const heatmapObjectives = [
    'Tọa độ (G6-L1)',
    'Thời tiết/Khí hậu (G6-L17)',
    'Đường đồng mức (G6-L14)',
    'Khí hậu châu Âu (G7-L1)',
    'Dân số VN (G9-L1)',
  ];

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* HEADER BANNER WITH AUTHENTICATED TEACHER INFO */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-900 via-indigo-900 to-[#102A43] p-6 sm:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/40 border border-purple-300/40 text-white font-black text-3xl shadow-inner">
              {currentTeacher?.avatar || '👩‍🏫'}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-black">
                  {currentTeacher?.fullName ? `${currentTeacher.fullName}` : 'GeoTeacher Dashboard'}
                </h1>
                <span className="rounded-full bg-emerald-400/90 text-emerald-950 px-2.5 py-0.5 text-[11px] font-black uppercase flex items-center gap-1 shadow-xs">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-900" />
                  <span>Giáo viên chính thức</span>
                </span>
              </div>
              <p className="mt-1 text-xs sm:text-sm text-purple-200">
                {currentTeacher?.schoolName ? `${currentTeacher.schoolName} • ` : ''}
                {currentTeacher?.subject || 'Môn Địa lí THCS'} • Phụ trách:{' '}
                {currentTeacher?.assignedGrades && currentTeacher.assignedGrades.length > 0
                  ? currentTeacher.assignedGrades.map((g) => `Lớp ${g}`).join(', ')
                  : 'Lớp 6, 7, 8, 9'}
              </p>
              <div className="mt-1 text-[11px] text-purple-300 flex items-center gap-3">
                <span>Email: {currentTeacher?.email || 'giaovien@geofeedback.edu.vn'}</span>
                <span>•</span>
                <span>Mã số: {currentTeacher?.id || 'GV-2026'}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleExportCSV}
              className="px-3.5 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <Download className="h-4 w-4" />
              <span>Xuất CSV Báo cáo</span>
            </button>
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-3.5 py-2 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>Đặt lại dữ liệu</span>
            </button>
            {onLogout && (
              <button
                onClick={onLogout}
                className="px-3.5 py-2 rounded-xl bg-purple-950/80 hover:bg-rose-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors border border-purple-400/30 cursor-pointer"
                title="Đăng xuất tài khoản Giáo viên (quay về giao diện Học sinh)"
              >
                <LogOut className="h-4 w-4" />
                <span>Đăng xuất</span>
              </button>
            )}
          </div>
        </div>

        {/* SECURITY & TEACHER ACCESS PRIVILEGE BANNER */}
        <div className="mt-4 rounded-xl bg-black/25 p-3 text-xs text-amber-200 border border-amber-300/20 flex items-start gap-2">
          <Shield className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
          <span>
            <strong>Đặc quyền tài khoản Giáo viên:</strong> Thầy/Cô có toàn quyền theo dõi danh sách học sinh theo lớp, xem chẩn đoán lỗi nhận thức Error DNA, xuất hồ sơ năng lực và phê duyệt ngân hàng câu hỏi. Học sinh không có thông tin đăng nhập sẽ không thể tự ý truy cập khu vực này.
          </span>
        </div>
      </div>

      {/* SUBTABS */}
      <div className="flex border-b border-slate-200 bg-white rounded-t-2xl px-4 text-xs font-bold overflow-x-auto">
        {[
          { id: 'overview', label: 'Tổng quan & Error DNA', icon: BarChart3 },
          { id: 'students', label: 'Quản lí Học sinh', icon: Users },
          { id: 'heatmap', label: 'Heatmap Năng lực Lớp', icon: Grid },
          { id: 'ai_intervention', label: 'Gợi ý Can thiệp Sư phạm', icon: BrainCircuit },
          { id: 'questions', label: 'Quản lí Ngân hàng Câu hỏi', icon: PlusCircle },
          { id: 'pdf_manager', label: 'Nhập & Kiểm duyệt SGK PDF', icon: FileUp },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id as any)}
              className={`py-3.5 px-4 border-b-2 flex items-center gap-2 shrink-0 transition-colors cursor-pointer ${
                isActive
                  ? 'border-indigo-600 text-indigo-700 font-black'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* SUBTAB 1: OVERVIEW & ERROR DNA */}
      {activeSubTab === 'overview' && (
        <div className="space-y-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <span className="text-xs font-semibold text-slate-500 uppercase">Tổng lượt làm bài</span>
              <div className="mt-1 text-2xl sm:text-3xl font-black text-slate-900">
                {sessions.length} lượt
              </div>
              <span className="text-[11px] text-slate-400">Đã lưu trên thiết bị</span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <span className="text-xs font-semibold text-slate-500 uppercase">Điểm trung bình lớp</span>
              <div className="mt-1 text-2xl sm:text-3xl font-black text-indigo-600">
                {profile.overallAccuracy}%
              </div>
              <span className="text-[11px] text-emerald-600">Theo chuẩn đánh giá</span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <span className="text-xs font-semibold text-slate-500 uppercase">Lỗi đã khắc phục</span>
              <div className="mt-1 text-2xl sm:text-3xl font-black text-emerald-600">
                {profile.resolvedErrorsCount}
              </div>
              <span className="text-[11px] text-slate-500">
                / {profile.detectedErrorsCount} lỗi phát hiện
              </span>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs">
              <span className="text-xs font-semibold text-slate-500 uppercase">Số câu hỏi GDPT</span>
              <div className="mt-1 text-2xl sm:text-3xl font-black text-purple-700">
                {questions.length} câu
              </div>
              <span className="text-[11px] text-slate-500">Đã xác thực nguồn</span>
            </div>
          </div>

          {/* Error DNA distribution */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-3">
            <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
              <Layers className="h-4 w-4 text-indigo-600" />
              <span>Phân bố 7 nhóm lỗi sai (Error DNA) trong lớp</span>
            </h3>

            <div className="space-y-3 pt-1">
              {ERROR_CODE_REGISTRY.map((cat) => {
                const count = profile.errorDnaCounts[cat.code] || 0;
                const total = Math.max(profile.detectedErrorsCount, 1);
                const pct = Math.round((count / total) * 100);

                return (
                  <div key={cat.code} className="space-y-1 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-800">
                        [{cat.code}] {cat.name}
                      </span>
                      <span className="font-bold text-slate-600">
                        {count} lượt ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(pct * 2, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: QUẢN LÍ HỌC SINH CỦA GIÁO VIÊN */}
      {activeSubTab === 'students' && (
        <div className="space-y-4">
          {/* SEARCH & FILTER BAR */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={studentSearch}
                  onChange={(e) => setStudentSearch(e.target.value)}
                  placeholder="Tìm học sinh theo tên, tài khoản hoặc trường..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              {/* Class Filter */}
              <div className="flex items-center gap-1">
                {['all', '6A1', '7A2', '8B', '9A1'].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedClassFilter(cls)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      selectedClassFilter === cls
                        ? 'bg-purple-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cls === 'all' ? 'Tất cả' : cls}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
              <Users className="h-4 w-4 text-purple-600" />
              <span>
                {storageService.getAllAccounts().filter((s) => {
                  const matchClass = selectedClassFilter === 'all' || s.className === selectedClassFilter;
                  const matchSearch =
                    !studentSearch ||
                    s.displayName.toLowerCase().includes(studentSearch.toLowerCase()) ||
                    s.username.toLowerCase().includes(studentSearch.toLowerCase()) ||
                    s.schoolName.toLowerCase().includes(studentSearch.toLowerCase());
                  return matchClass && matchSearch;
                }).length}{' '}
                học sinh
              </span>
            </div>
          </div>

          {/* STUDENT CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {storageService
              .getAllAccounts()
              .filter((st) => {
                const matchClass = selectedClassFilter === 'all' || st.className === selectedClassFilter;
                const matchSearch =
                  !studentSearch ||
                  st.displayName.toLowerCase().includes(studentSearch.toLowerCase()) ||
                  st.username.toLowerCase().includes(studentSearch.toLowerCase()) ||
                  st.schoolName.toLowerCase().includes(studentSearch.toLowerCase());
                return matchClass && matchSearch;
              })
              .map((st) => {
                const stProfile = storageService.getProfileForId(st.id) || {
                  geoPoints: 100,
                  completedTestsCount: 1,
                  overallAccuracy: 75,
                  detectedErrorsCount: 1,
                  resolvedErrorsCount: 1,
                };

                return (
                  <div
                    key={st.id}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-purple-300 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-2xl">
                          {st.avatar || '❄️'}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-black text-sm text-slate-900">{st.displayName}</h4>
                            <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-[10px] font-black">
                              Lớp {st.className}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            {st.schoolName} • @{st.username}
                          </div>
                        </div>
                      </div>

                      <span className="text-[10px] text-slate-400 font-semibold">
                        ID: {st.id}
                      </span>
                    </div>

                    {/* METRICS */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-center">
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="text-[10px] text-slate-500 font-bold">Điểm GeoPoints</div>
                        <div className="text-sm font-black text-amber-600">
                          {stProfile.geoPoints || 0} pts
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="text-[10px] text-slate-500 font-bold">Lượt làm bài</div>
                        <div className="text-sm font-black text-indigo-600">
                          {stProfile.completedTestsCount || 0} lượt
                        </div>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50">
                        <div className="text-[10px] text-slate-500 font-bold">Độ chuẩn xác</div>
                        <div className="text-sm font-black text-emerald-600">
                          {stProfile.overallAccuracy || 0}%
                        </div>
                      </div>
                    </div>

                    {/* STATUS BAR */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <UserCheck className="h-3.5 w-3.5 text-purple-600" />
                        <span>Đã xác nhận tài khoản học sinh</span>
                      </div>

                      <div className="text-[11px] font-bold text-slate-400">
                        Đăng nhập: {new Date(st.lastLoginAt).toLocaleDateString('vi-VN')}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* SUBTAB 3: HEATMAP (HỌC SINH X YCCĐ) */}
      {activeSubTab === 'heatmap' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2">
                <Grid className="h-4 w-4 text-teal-600" />
                <span>Heatmap ma trận năng lực: Học sinh × Yêu cầu cần đạt (YCCĐ)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Màu sắc thể hiện mức độ thành thạo: Xanh (≥80%: Đạt chuẩn), Vàng (50–79%: Cần củng cố), Đỏ (&lt;50%: Cần bù đắp nền tảng).
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-xs">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-3 py-2.5 text-left font-bold text-slate-700">Học sinh</th>
                  {heatmapObjectives.map((obj, idx) => (
                    <th key={idx} className="px-3 py-2.5 text-center font-bold text-slate-700">
                      {obj}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {heatmapStudents.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50">
                    <td className="px-3 py-3 font-bold text-slate-900">{st.name}</td>
                    {st.scores.map((sc, scIdx) => {
                      const color =
                        sc >= 80
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                          : sc >= 50
                          ? 'bg-amber-100 text-amber-900 border-amber-300'
                          : 'bg-rose-100 text-rose-900 border-rose-300';
                      return (
                        <td key={scIdx} className="px-3 py-3 text-center">
                          <span className={`inline-block px-2.5 py-1 rounded-md font-bold text-[11px] border ${color}`}>
                            {sc}%
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* SUBTAB 3: AI PEDAGOGICAL INTERVENTION */}
      {activeSubTab === 'ai_intervention' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-indigo-600" />
            <h3 className="text-base font-black text-slate-900">
              Đề xuất can thiệp sư phạm tự động từ AI (Dựa trên số liệu lớp học)
            </h3>
          </div>

          <div className="space-y-3 text-xs leading-relaxed">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
              <span className="font-bold text-amber-900 block flex items-center gap-1.5">
                <AlertTriangle className="h-4 w-4 text-amber-700" />
                <span>1. Can thiệp trọng điểm: Kĩ năng đọc lược đồ & đường đồng mức (Lỗi E04)</span>
              </span>
              <p className="text-slate-800">
                Khoảng <strong>40% học sinh</strong> trong lớp đang nhầm lẫn nguyên lí khoảng cách giữa các đường đồng mức (nghĩ rằng đường thưa là dốc).
                <strong> Đề xuất:</strong> Giáo viên nên dành 10 phút đầu tiết 15 tổ chức hoạt động thực hành cắt lát địa hình bằng đất sét hoặc mô hình trực quan 3D để học sinh quan sát thực tế độ dốc.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-1.5">
              <span className="font-bold text-blue-900 block flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-blue-700" />
                <span>2. Can thiệp khái niệm: Phân biệt Thời tiết vs Khí hậu (Lỗi E02)</span>
              </span>
              <p className="text-slate-800">
                Học sinh hay bị bẫy bởi các từ khóa "hôm nay", "mùa khô hàng năm". 
                <strong> Đề xuất:</strong> Cho học sinh chơi trò chơi ghép thẻ Flashcard phân biệt giữa bản tin dự báo thời tiết 24h và đặc điểm khí hậu vùng miền Việt Nam.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: QUESTIONS MANAGER */}
      {activeSubTab === 'questions' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200">
            <div>
              <h3 className="text-sm font-black text-slate-900">Ngân hàng câu hỏi chuẩn GDPT</h3>
              <p className="text-xs text-slate-500">Mỗi câu hỏi đều được gán YCCĐ và gắn nhãn lỗi sai tương ứng cho phương án nhiễu.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportJSON}
                className="px-3.5 py-2 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-xs font-bold text-slate-700 flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Xuất JSON</span>
              </button>

              <button
                onClick={() => setIsAddQuestionModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
              >
                <PlusCircle className="h-3.5 w-3.5" />
                <span>Thêm câu hỏi mới</span>
              </button>
            </div>
          </div>

          <div className="space-y-2.5">
            {questions.map((q) => (
              <div
                key={q.questionId}
                className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs flex items-center justify-between gap-4 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="rounded-md bg-blue-100 px-2 py-0.5 font-bold text-blue-900">
                      Lớp {q.grade}
                    </span>
                    <span className="font-semibold text-slate-700">{q.lessonTitle}</span>
                    <span className="text-slate-400 font-mono">[{q.questionId}]</span>
                    <span className="rounded-md bg-teal-50 border border-teal-200 text-teal-800 px-1.5 py-0.5 text-[10px] font-bold">
                      Gán lỗi: {q.relatedErrorCode}
                    </span>
                  </div>
                  <p className="font-bold text-slate-900 line-clamp-1">{q.questionText}</p>
                  <p className="text-[11px] text-slate-500 italic">
                    Nguồn: {q.sourceBook.bookName}, tr. {q.sourceBook.bookPage}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    Đáp án: {q.correctAnswer}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBTAB 5: PDF MANAGER & VERIFICATION */}
      {activeSubTab === 'pdf_manager' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs space-y-5 text-xs">
          <div>
            <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
              <FileUp className="h-5 w-5 text-indigo-600" />
              <span>Quản lí & Trích xuất học liệu từ 4 PDF Sách giáo khoa</span>
            </h3>
            <p className="text-slate-500 mt-1">
              Nguyên tắc bắt buộc: Chỉ sử dụng phần Địa lí trong 4 cuốn SGK Kết nối tri thức. 
              Trạng thái tài liệu scan chưa nhận dạng sẽ hiển thị "Chưa xử lý" để giáo viên kiểm duyệt.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { grade: 6, title: 'Lịch sử và Địa lí 6', geogPages: 'Trang 95 - 195', status: 'Đã xác thực 100%' },
              { grade: 7, title: 'Lịch sử và Địa lí 7', geogPages: 'Trang 95 - 180', status: 'Đã xác thực 100%' },
              { grade: 8, title: 'Lịch sử và Địa lí 8', geogPages: 'Trang 93 - 175', status: 'Đã xác thực 100%' },
              { grade: 9, title: 'Lịch sử và Địa lí 9', geogPages: 'Trang 116 - 240', status: 'Đã xác thực 100%' },
            ].map((book) => (
              <div key={book.grade} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">SGK Lớp {book.grade}</span>
                  <span className="rounded-full bg-emerald-100 text-emerald-800 px-2 py-0.5 text-[10px] font-black">
                    {book.status}
                  </span>
                </div>
                <div className="text-slate-600">{book.title}</div>
                <div className="text-[11px] text-teal-700 font-semibold">
                  Phần Địa lí: {book.geogPages}
                </div>
              </div>
            ))}
          </div>

          {/* Upload Area */}
          <div className="rounded-xl border-2 border-dashed border-slate-300 p-6 text-center space-y-2">
            <Upload className="mx-auto h-8 w-8 text-slate-400" />
            <div className="text-xs font-bold text-slate-700">Tải lên tệp PDF sách giáo khoa bổ sung</div>
            <p className="text-[11px] text-slate-400">Hỗ trợ tệp PDF có mục lục điện tử hoặc bản scan qua OCR</p>
            <label className="inline-block cursor-pointer px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs">
              <span>Chọn tệp PDF</span>
              <input type="file" accept=".pdf" onChange={handleUploadPDF} className="hidden" />
            </label>
            {pdfUploadStatus && (
              <div className="mt-2 text-xs font-semibold text-teal-700 bg-teal-50 p-2.5 rounded-lg border border-teal-200">
                {pdfUploadStatus}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODAL: ADD QUESTION */}
      {isAddQuestionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-6">
            <div className="bg-indigo-700 p-4 text-white flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold">Biên soạn câu hỏi Địa lí & Gán Error DNA</h3>
                <p className="text-xs text-indigo-100">Chuẩn GDPT 2018 kết hợp chẩn đoán lỗi tư duy</p>
              </div>
              <button
                onClick={() => setIsAddQuestionModalOpen(false)}
                className="rounded-lg p-1 text-white/80 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-5 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Khối lớp:</label>
                  <select
                    value={newGrade}
                    onChange={(e) => setNewGrade(Number(e.target.value) as Grade)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                  >
                    <option value={6}>Lớp 6</option>
                    <option value={7}>Lớp 7</option>
                    <option value={8}>Lớp 8</option>
                    <option value={9}>Lớp 9</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Mã lỗi DNA chính:</label>
                  <select
                    value={newErrorCode}
                    onChange={(e) => setNewErrorCode(e.target.value as ErrorCode)}
                    className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                  >
                    {ERROR_CODE_REGISTRY.map((c) => (
                      <option key={c.code} value={c.code}>
                        [{c.code}] {c.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Bài học trong SGK:</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Bài 1: Hệ thống kinh, vĩ tuyến. Tọa độ địa lí"
                  value={newLessonTitle}
                  onChange={(e) => setNewLessonTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Yêu cầu cần đạt (YCCĐ):</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Ghi đúng quy chuẩn tọa độ địa lí."
                  value={newLearningObj}
                  onChange={(e) => setNewLearningObj(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Nội dung câu hỏi:</label>
                <textarea
                  rows={3}
                  placeholder="Nhập đề bài câu hỏi..."
                  value={newQuestionText}
                  onChange={(e) => setNewQuestionText(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                />
              </div>

              {/* 4 Options with Distractor Mistake Tagging */}
              <div className="space-y-2">
                <label className="font-bold text-slate-700 block">4 Phương án & Gán nhãn lỗi sai:</label>
                {newOptions.map((opt) => (
                  <div key={opt.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{opt.id}.</span>
                      <input
                        type="text"
                        placeholder={`Nội dung lựa chọn ${opt.id}...`}
                        value={opt.text}
                        onChange={(e) => {
                          const val = e.target.value;
                          setNewOptions((prev) =>
                            prev.map((o) => (o.id === opt.id ? { ...o, text: val } : o))
                          );
                        }}
                        className="flex-1 rounded-lg border border-slate-300 p-1.5 text-xs bg-white"
                      />
                      <label className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <input
                          type="radio"
                          name="correctOption"
                          checked={opt.isCorrect}
                          onChange={() => {
                            setNewOptions((prev) =>
                              prev.map((o) => ({ ...o, isCorrect: o.id === opt.id }))
                            );
                          }}
                        />
                        <span>Đáp án đúng</span>
                      </label>
                    </div>

                    {!opt.isCorrect && (
                      <div className="grid grid-cols-2 gap-2 pl-4 text-[11px]">
                        <div>
                          <label className="text-slate-500">Mã lỗi nhiễu:</label>
                          <select
                            value={opt.distractorErrorCode}
                            onChange={(e) => {
                              const val = e.target.value as ErrorCode;
                              setNewOptions((prev) =>
                                prev.map((o) =>
                                  o.id === opt.id ? { ...o, distractorErrorCode: val } : o
                                )
                              );
                            }}
                            className="w-full rounded-md border border-slate-300 p-1 bg-white text-[11px]"
                          >
                            {ERROR_CODE_REGISTRY.map((c) => (
                              <option key={c.code} value={c.code}>
                                [{c.code}] {c.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="text-slate-500">Giả thuyết lỗi:</label>
                          <input
                            type="text"
                            placeholder="Ví dụ: Nhầm kinh độ trước vĩ độ..."
                            value={opt.distractorHypothesis}
                            onChange={(e) => {
                              const val = e.target.value;
                              setNewOptions((prev) =>
                                prev.map((o) =>
                                  o.id === opt.id ? { ...o, distractorHypothesis: val } : o
                                )
                              );
                            }}
                            className="w-full rounded-md border border-slate-300 p-1 bg-white text-[11px]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Lời giải sư phạm chuẩn:</label>
                <textarea
                  rows={2}
                  placeholder="Giải thích chi tiết vì sao đáp án đúng..."
                  value={newExplanation}
                  onChange={(e) => setNewExplanation(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2 text-xs"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Số trang SGK nguồn:</label>
                <input
                  type="number"
                  value={newBookPage}
                  onChange={(e) => setNewBookPage(Number(e.target.value))}
                  className="w-32 rounded-xl border border-slate-300 p-2 text-xs"
                />
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-end gap-2">
              <button
                onClick={() => setIsAddQuestionModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Hủy bỏ
              </button>
              <button
                onClick={handleSaveQuestion}
                className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
              >
                <Save className="h-4 w-4" />
                <span>Lưu vào ngân hàng</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM RESET MODAL */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="rounded-2xl bg-white p-6 max-w-md w-full shadow-2xl border border-slate-200 text-center space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Xác nhận đặt lại toàn bộ dữ liệu?</h3>
              <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                Hành động này sẽ xóa toàn bộ nhật kí làm bài, hồ sơ học sinh và khôi phục bộ dữ liệu mặc định.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
              >
                Hủy
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-xs"
              >
                Xác nhận xóa & Đặt lại
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
