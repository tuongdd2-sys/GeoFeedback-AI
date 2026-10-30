import React from 'react';
import { Grade, TeacherProfile } from '../types';
import {
  School,
  LogOut,
  Layers,
  ChevronDown,
} from 'lucide-react';

interface TeacherNavbarProps {
  currentTeacher: TeacherProfile;
  activeGrade: Grade;
  onGradeChange: (grade: Grade) => void;
  onLogout: () => void;
}

export const TeacherNavbar: React.FC<TeacherNavbarProps> = ({
  currentTeacher,
  activeGrade,
  onGradeChange,
  onLogout,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#160b2e] text-white border-b border-purple-800/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 gap-3">
          {/* BRAND: TEACHER WORKSPACE */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-900/60 border border-purple-700/60 text-purple-200">
              <School className="h-5 w-5 text-purple-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black tracking-tight text-white">
                  GeoFeedback <span className="text-purple-400">AI</span>
                </span>
                <span className="rounded-md bg-purple-500/20 px-2 py-0.5 text-[10px] font-bold text-purple-300 border border-purple-400/40">
                  CỔNG GIÁO VIÊN
                </span>
              </div>
              <p className="text-[11px] text-purple-300 font-medium hidden sm:block">
                Hệ thống Quản trị & Chẩn đoán Lỗi sai Năng lực Địa lí THCS
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: TEACHER INFO, GRADE FILTER & LOGOUT */}
          <div className="flex items-center gap-2.5">
            {/* Grade Selector for Teacher */}
            <div className="flex items-center gap-1 bg-purple-950/80 border border-purple-700/80 px-2.5 py-1.5 rounded-xl text-xs font-bold text-purple-200">
              <span className="text-[11px] text-purple-300">Khối lớp:</span>
              <select
                value={activeGrade}
                onChange={(e) => onGradeChange(Number(e.target.value) as Grade)}
                className="bg-transparent font-black text-white focus:outline-none cursor-pointer"
              >
                <option value={6} className="bg-purple-950 text-white">Lớp 6</option>
                <option value={7} className="bg-purple-950 text-white">Lớp 7</option>
                <option value={8} className="bg-purple-950 text-white">Lớp 8</option>
                <option value={9} className="bg-purple-950 text-white">Lớp 9</option>
              </select>
            </div>

            {/* Teacher Profile Card */}
            <div className="flex items-center gap-2 bg-purple-900/40 border border-purple-600/40 px-3 py-1.5 rounded-xl text-xs">
              <span className="text-lg">{currentTeacher.avatar || '👩‍🏫'}</span>
              <div className="hidden sm:block text-left">
                <div className="font-bold text-white leading-tight">{currentTeacher.fullName}</div>
                <div className="text-[10px] text-purple-300 leading-tight">{currentTeacher.schoolName}</div>
              </div>
            </div>

            {/* Exit / Logout Button */}
            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-600/80 hover:bg-rose-600 text-white font-bold text-xs transition-all shadow-xs cursor-pointer"
              title="Đăng xuất khỏi Cổng Giáo viên và trở về Giao diện Học sinh"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
