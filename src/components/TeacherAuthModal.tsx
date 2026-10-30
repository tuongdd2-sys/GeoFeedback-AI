import React, { useState } from 'react';
import { Grade, TeacherProfile, TeacherAccount } from '../types';
import { storageService, DEFAULT_TEACHER_ACCOUNTS } from '../services/storageService';
import {
  School,
  Lock,
  Mail,
  User,
  ShieldCheck,
  X,
  LogIn,
  UserPlus,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
  BookOpen,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface TeacherAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (teacher: TeacherProfile) => void;
}

export const TeacherAuthModal: React.FC<TeacherAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
}) => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [schoolName, setSchoolName] = useState('THCS Chu Văn An');
  const [subject, setSubject] = useState('Địa lí THCS (GDPT 2018)');
  const [assignedGrades, setAssignedGrades] = useState<Grade[]>([6, 7, 8, 9]);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [avatar, setAvatar] = useState('👩‍🏫');

  if (!isOpen) return null;

  const handleToggleGrade = (grade: Grade) => {
    if (assignedGrades.includes(grade)) {
      if (assignedGrades.length > 1) {
        setAssignedGrades(assignedGrades.filter((g) => g !== grade));
      }
    } else {
      setAssignedGrades([...assignedGrades, grade].sort());
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const res = storageService.loginTeacher(loginEmail, loginPassword);
    if (res.success && res.teacher) {
      setSuccessMessage(res.message);
      setTimeout(() => {
        onAuthSuccess(res.teacher!);
        onClose();
      }, 400);
    } else {
      setErrorMessage(res.message);
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (password !== confirmPassword) {
      setErrorMessage('Mật khẩu xác nhận không khớp với mật khẩu đã nhập.');
      return;
    }

    const res = storageService.registerTeacher({
      fullName,
      email,
      password,
      schoolName,
      assignedGrades,
      subject,
      avatar,
    });

    if (res.success && res.teacher) {
      setSuccessMessage(res.message);
      setTimeout(() => {
        onAuthSuccess(res.teacher!);
        onClose();
      }, 500);
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden text-slate-800">
        {/* TOP GLOW HEADER */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-[#102A43] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Đóng cửa sổ"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/30 border border-purple-300/40 flex items-center justify-center text-2xl shadow-inner">
              👩‍🏫
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black tracking-tight">Khu Vực Giáo Viên Địa Lí</h2>
                <span className="px-2 py-0.5 rounded-full bg-purple-400 text-purple-950 font-black text-[10px] uppercase">
                  Bảo Mật
                </span>
              </div>
              <p className="text-xs text-purple-200 mt-0.5">
                Đăng nhập để xem thống kê học sinh, quản lí đề và can thiệp sư phạm
              </p>
            </div>
          </div>

          {/* TAB BUTTONS */}
          <div className="mt-5 grid grid-cols-2 gap-2 bg-black/20 p-1 rounded-xl">
            <button
              onClick={() => {
                setActiveTab('login');
                setErrorMessage('');
              }}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'login'
                  ? 'bg-white text-purple-950 shadow-md font-black'
                  : 'text-purple-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Đăng nhập</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('register');
                setErrorMessage('');
              }}
              className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === 'register'
                  ? 'bg-white text-purple-950 shadow-md font-black'
                  : 'text-purple-200 hover:text-white hover:bg-white/5'
              }`}
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>Tạo tài khoản mới</span>
            </button>
          </div>
        </div>

        {/* BODY CONTENT */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
          {/* Notification Messages */}
          {errorMessage && (
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2 animate-shake">
              <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-600" />
              <div className="font-semibold">{errorMessage}</div>
            </div>
          )}

          {successMessage && (
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600" />
              <div className="font-semibold">{successMessage}</div>
            </div>
          )}

          {/* TAB 1: LOGIN */}
          {activeTab === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email hoặc Mã Giáo viên:
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="huong.tran@thcsgiangvo.edu.vn hoặc giaovien@geofeedback.edu.vn"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Mật khẩu đăng nhập:
                </label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <LogIn className="h-4 w-4" />
                <span>Đăng nhập Cổng Giáo viên</span>
              </button>

              {/* SECURITY NOTICE & CREDENTIALS INFO */}
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-purple-50/80 border border-purple-200/80 text-[11px] text-purple-900">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-purple-600" />
                  <span>
                    <strong>Khu vực bảo mật:</strong> Dành riêng cho Cán bộ Quản lí & Giáo viên THCS. Học sinh không được cấp quyền đăng nhập tại cổng này.
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600">
                  <span className="font-semibold text-slate-700">Tài khoản giáo viên phụ trách trường:</span>
                  <div className="mt-1 flex flex-col gap-0.5 font-mono text-[10px] text-purple-900">
                    <span>Email: <span className="font-bold">huong.tran@thcsgiangvo.edu.vn</span></span>
                    <span>Mật khẩu: <span className="font-bold">giaovien123</span></span>
                  </div>
                </div>
              </div>
            </form>
          )}

          {/* TAB 2: REGISTER */}
          {activeTab === 'register' && (
            <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Họ và tên Thầy / Cô:
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ví dụ: Cô Nguyễn Thùy Linh"
                    className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email công tác:
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="thuylinh@thcs.edu.vn"
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Trường THCS công tác:
                  </label>
                  <div className="relative">
                    <School className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      placeholder="THCS Giảng Võ"
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Môn giảng dạy & chương trình:
                </label>
                <div className="relative">
                  <BookOpen className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Địa lí THCS – Bộ sách Kết nối tri thức"
                    className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 outline-none"
                  />
                </div>
              </div>

              {/* GRADES ASSIGNED */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Khối lớp Thầy / Cô phụ trách giảng dạy:
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {([6, 7, 8, 9] as Grade[]).map((g) => {
                    const isSelected = assignedGrades.includes(g);
                    return (
                      <button
                        key={g}
                        type="button"
                        onClick={() => handleToggleGrade(g)}
                        className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1 ${
                          isSelected
                            ? 'bg-purple-600 text-white border-purple-600 shadow-xs'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <GraduationCap className="h-3 w-3" />
                        <span>Lớp {g}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* AVATAR CHOOSER */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Biểu tượng đại diện:
                </label>
                <div className="flex gap-2">
                  {['👩‍🏫', '👨‍🏫', '🧭', '🏔️', '🌍', '🔭'].map((ico) => (
                    <button
                      key={ico}
                      type="button"
                      onClick={() => setAvatar(ico)}
                      className={`h-9 w-9 rounded-xl text-lg flex items-center justify-center border transition-all ${
                        avatar === ico
                          ? 'bg-purple-100 border-purple-500 ring-2 ring-purple-300'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {ico}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mật khẩu (tối thiểu 6 kí tự):
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Xác nhận lại mật khẩu:
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-purple-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-black text-xs shadow-md shadow-purple-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="h-4 w-4" />
                <span>Đăng kí tài khoản Giáo viên</span>
              </button>
            </form>
          )}

          {/* SECURITY DISCLAIMER */}
          <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-purple-600 shrink-0 mt-0.5" />
            <span>
              <strong>Chính sách phân quyền học đường:</strong> Tài khoản giáo viên có toàn quyền xem tiến độ điểm số các lớp, xuất dữ liệu chẩn đoán Error DNA và phê duyệt ngân hàng câu hỏi. Học sinh không được phép tự chuyển đổi nếu không có thông tin xác thực giáo viên.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
