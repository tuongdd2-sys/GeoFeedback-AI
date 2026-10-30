import React, { useState } from 'react';
import { Grade, StudentAccount, StudentProfile } from '../types';
import { storageService } from '../services/storageService';
import {
  UserPlus,
  LogIn,
  X,
  Compass,
  CheckCircle,
  GraduationCap,
  School,
  Lock,
  User,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Snowflake,
  Mountain,
} from 'lucide-react';

interface StudentAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthSuccess: (profile: StudentProfile) => void;
}

const AVATAR_OPTIONS = [
  { icon: '❄️', label: 'Băng Hà' },
  { icon: '🏔️', label: 'Núi Tuyết' },
  { icon: '🧭', label: 'La Bàn' },
  { icon: '🌍', label: 'Địa Cầu' },
  { icon: '🦅', label: 'Đại Bàng' },
  { icon: '🔭', label: 'Thiên Văn' },
];

export const StudentAuthModal: React.FC<StudentAuthModalProps> = ({
  isOpen,
  onClose,
  onAuthSuccess,
}) => {
  const [activeMode, setActiveMode] = useState<'login' | 'register'>('login');
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Login form state
  const [loginUsername, setLoginUsername] = useState<string>('');
  const [loginPassword, setLoginPassword] = useState<string>('');

  // Register form state
  const [regDisplayName, setRegDisplayName] = useState<string>('');
  const [regUsername, setRegUsername] = useState<string>('');
  const [regPassword, setRegPassword] = useState<string>('');
  const [regGrade, setRegGrade] = useState<Grade>(6);
  const [regClassName, setRegClassName] = useState<string>('6A1');
  const [regSchoolName, setRegSchoolName] = useState<string>('THCS Chu Văn An');
  const [regAvatar, setRegAvatar] = useState<string>('❄️');

  if (!isOpen) return null;

  const sampleAccounts = storageService.getAllAccounts();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!loginUsername.trim()) {
      setErrorMsg('Vui lòng nhập tên đăng nhập.');
      return;
    }

    const profile = storageService.loginStudent(loginUsername.trim(), loginPassword.trim());
    if (profile) {
      onAuthSuccess(profile);
      onClose();
    } else {
      setErrorMsg('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
  };

  const handleQuickLogin = (account: StudentAccount) => {
    const profile = storageService.loginStudent(account.username, '');
    if (profile) {
      onAuthSuccess(profile);
      onClose();
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!regDisplayName.trim()) {
      setErrorMsg('Vui lòng nhập họ và tên của em.');
      return;
    }
    if (!regUsername.trim()) {
      setErrorMsg('Vui lòng nhập tên đăng nhập mong muốn.');
      return;
    }
    if (!regClassName.trim()) {
      setErrorMsg('Vui lòng nhập tên lớp của em (ví dụ: 6A1, 7B, 8C, 9A).');
      return;
    }

    try {
      const newProfile = storageService.registerStudent({
        username: regUsername.trim(),
        displayName: regDisplayName.trim(),
        password: regPassword.trim(),
        grade: regGrade,
        className: regClassName.trim().toUpperCase(),
        schoolName: regSchoolName.trim() || 'Trường THCS',
        avatar: regAvatar,
      });

      onAuthSuccess(newProfile);
      onClose();
    } catch (err: any) {
      setErrorMsg(err.message || 'Đăng kí không thành công. Tên đăng nhập có thể đã tồn tại.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg rounded-2xl bg-white/95 backdrop-blur-xl border border-sky-100 shadow-2xl overflow-hidden">
        {/* FROSTY GLACIAL HEADER */}
        <div className="relative bg-gradient-to-r from-sky-600 via-teal-600 to-cyan-600 p-6 text-white overflow-hidden">
          {/* Subtle ice sparkles */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute bottom-0 right-4 opacity-15 pointer-events-none">
            <Mountain className="w-32 h-32" />
          </div>

          <div className="relative z-10 flex items-start justify-between">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-bold backdrop-blur-xs border border-white/30">
                <Snowflake className="h-3 w-3 animate-spin" style={{ animationDuration: '10s' }} />
                <span>Trạm Thám Hiểm Băng Hà THCS</span>
              </div>
              <h2 className="text-xl font-black tracking-tight text-white flex items-center gap-2">
                <span>Cá nhân hóa học tập Địa lí</span>
              </h2>
              <p className="text-xs text-sky-100 font-medium">
                Lưu trữ chẩn đoán Error DNA, huy hiệu và tiến độ theo từng lớp học
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-all"
              title="Đóng"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* MODE TOGGLE TABS */}
          <div className="relative z-10 flex items-center gap-2 mt-4 pt-3 border-t border-white/20">
            <button
              onClick={() => {
                setActiveMode('login');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeMode === 'login'
                  ? 'bg-white text-teal-900 shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <LogIn className="h-3.5 w-3.5" />
              <span>Đăng nhập</span>
            </button>

            <button
              onClick={() => {
                setActiveMode('register');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeMode === 'register'
                  ? 'bg-white text-teal-900 shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <UserPlus className="h-3.5 w-3.5" />
              <span>Tạo tài khoản học sinh</span>
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-4">
          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold flex items-center gap-2">
              <span className="text-sm">⚠️</span>
              <span>{errorMsg}</span>
            </div>
          )}

          {/* ================= MODE: LOGIN ================= */}
          {activeMode === 'login' && (
            <div className="space-y-4">
              <form onSubmit={handleLogin} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-sky-600" />
                    Tên đăng nhập
                  </label>
                  <input
                    type="text"
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    placeholder="Ví dụ: minhquan6a hoặc nhập tên của em"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <Lock className="h-3.5 w-3.5 text-sky-600" />
                    Mật khẩu (tùy chọn)
                  </label>
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="Mật khẩu của em (hoặc để trống)"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50/50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white text-xs font-black shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Đăng nhập vào không gian học tập</span>
                </button>
              </form>

              {/* QUICK SELECT SAMPLE STUDENT ACCOUNTS ACROSS CLASSES */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Hoặc chọn nhanh tài khoản mẫu của các lớp:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {sampleAccounts.map((acc) => (
                    <button
                      key={acc.id}
                      type="button"
                      onClick={() => handleQuickLogin(acc)}
                      className="p-2.5 rounded-xl border border-sky-100 bg-sky-50/60 hover:bg-sky-100/70 hover:border-sky-300 text-left transition-all flex items-center gap-2 group cursor-pointer"
                    >
                      <span className="text-xl shrink-0">{acc.avatar}</span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-black text-slate-800 truncate group-hover:text-teal-900">
                          {acc.displayName}
                        </div>
                        <div className="text-[10px] text-teal-800 font-semibold truncate">
                          Lớp {acc.className} • Khối {acc.grade}
                        </div>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-teal-700 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================= MODE: REGISTER ================= */}
          {activeMode === 'register' && (
            <form onSubmit={handleRegister} className="space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <User className="h-3.5 w-3.5 text-sky-600" />
                  Họ và tên học sinh *
                </label>
                <input
                  type="text"
                  required
                  value={regDisplayName}
                  onChange={(e) => setRegDisplayName(e.target.value)}
                  placeholder="Ví dụ: Nguyễn Minh Quân, Lê Hoàng Nam..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                    <GraduationCap className="h-3.5 w-3.5 text-sky-600" />
                    Khối lớp *
                  </label>
                  <select
                    value={regGrade}
                    onChange={(e) => {
                      const g = Number(e.target.value) as Grade;
                      setRegGrade(g);
                      setRegClassName(`${g}A1`);
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  >
                    <option value={6}>Lớp 6 (Địa lí 6)</option>
                    <option value={7}>Lớp 7 (Địa lí 7)</option>
                    <option value={8}>Lớp 8 (Địa lí 8)</option>
                    <option value={9}>Lớp 9 (Địa lí 9)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tên lớp cụ thể *
                  </label>
                  <input
                    type="text"
                    required
                    value={regClassName}
                    onChange={(e) => setRegClassName(e.target.value)}
                    placeholder="Ví dụ: 6A1, 7B, 8C, 9A2..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 uppercase focus:outline-none focus:ring-2 focus:ring-sky-400 bg-slate-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1">
                  <School className="h-3.5 w-3.5 text-sky-600" />
                  Trường THCS
                </label>
                <input
                  type="text"
                  value={regSchoolName}
                  onChange={(e) => setRegSchoolName(e.target.value)}
                  placeholder="Ví dụ: THCS Giảng Võ, THCS Chu Văn An..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent bg-slate-50/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tên đăng nhập *
                  </label>
                  <input
                    type="text"
                    required
                    value={regUsername}
                    onChange={(e) => setRegUsername(e.target.value.toLowerCase().replace(/\s+/g, ''))}
                    placeholder="Ví dụ: minhquan6a"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mật khẩu (tùy chọn)
                  </label>
                  <input
                    type="password"
                    value={regPassword}
                    onChange={(e) => setRegPassword(e.target.value)}
                    placeholder="Mật khẩu"
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400 bg-slate-50/50"
                  />
                </div>
              </div>

              {/* AVATAR PICKER */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                  Chọn biểu tượng Avatar thám hiểm:
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {AVATAR_OPTIONS.map((av) => (
                    <button
                      key={av.icon}
                      type="button"
                      onClick={() => setRegAvatar(av.icon)}
                      className={`p-2 rounded-xl border text-center transition-all flex flex-col items-center gap-1 cursor-pointer ${
                        regAvatar === av.icon
                          ? 'border-teal-500 bg-teal-50 ring-2 ring-teal-400'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-xl">{av.icon}</span>
                      <span className="text-[10px] text-slate-500 font-semibold">{av.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-black shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer mt-2"
              >
                <UserPlus className="h-4 w-4" />
                <span>Hoàn tất đăng kí & Bắt đầu học</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
export default StudentAuthModal;
