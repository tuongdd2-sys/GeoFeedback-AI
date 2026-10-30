import React, { useState } from 'react';
import { Grade, TextbookSource } from '../types';
import { OFFICIAL_TEXTBOOK_CHAPTERS } from '../data/curriculumData';
import { GeoMimiMascot } from './GeoMimiMascot';
import {
  BookOpen,
  ChevronRight,
  Target,
  FileText,
  Play,
  Search,
  CheckCircle,
  FolderOpen,
  Layers,
  Sparkles,
  Award,
} from 'lucide-react';

interface LessonSelectorProps {
  activeGrade: Grade;
  onGradeChange: (grade: Grade) => void;
  onSelectLessonForStudy: (lesson: TextbookSource) => void;
  onSelectLessonForQuiz: (lesson: TextbookSource) => void;
}

export const LessonSelector: React.FC<LessonSelectorProps> = ({
  activeGrade,
  onGradeChange,
  onSelectLessonForStudy,
  onSelectLessonForQuiz,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');

  const gradeLessons = OFFICIAL_TEXTBOOK_CHAPTERS.filter((l) => l.grade === activeGrade);

  // Group lessons by chapter
  const chaptersMap = new Map<string, { id: string; title: string; count: number }>();
  gradeLessons.forEach((l) => {
    if (!chaptersMap.has(l.chapterId)) {
      chaptersMap.set(l.chapterId, { id: l.chapterId, title: l.chapterTitle, count: 1 });
    } else {
      chaptersMap.get(l.chapterId)!.count += 1;
    }
  });
  const chapters = Array.from(chaptersMap.values());

  const filtered = gradeLessons.filter((l) => {
    const matchesChapter = selectedChapterId === 'all' || l.chapterId === selectedChapterId;
    if (!matchesChapter) return false;

    if (!searchTerm.trim()) return true;
    const kw = searchTerm.toLowerCase();
    return (
      l.lessonTitle.toLowerCase().includes(kw) ||
      l.chapterTitle.toLowerCase().includes(kw) ||
      l.learningObjectives.some((obj) => obj.toLowerCase().includes(kw))
    );
  });

  const gradeIcons: Record<Grade, string> = {
    6: '🌍',
    7: '🌏',
    8: '🏔️',
    9: '🌾',
  };

  return (
    <div className="space-y-6">
      {/* HEADER BANNER WITH GEOMIMI */}
      <div className="rounded-3xl bg-gradient-to-r from-[#102A43] via-[#0f3d59] to-[#0f4c5c] p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-400/20 px-3 py-1 text-xs font-bold text-teal-300 border border-teal-300/30 mb-2">
            <span>{gradeIcons[activeGrade]}</span>
            <span>Khối Lớp {activeGrade} • Đầy đủ {gradeLessons.length} bài học chuẩn SGK</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black">
            Chương trình Địa lí Lớp {activeGrade} – Kết nối tri thức với cuộc sống
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-slate-200">
            Trích xuất 100% từ phần Địa lí chính thức (bỏ phần Lịch sử), trích dẫn chính xác yêu cầu cần đạt, số trang SGK và PDF.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-auto bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20">
          <GeoMimiMascot size="sm" mood="explorer" />
          <div className="text-xs">
            <span className="font-black text-amber-300 block">{gradeLessons.length} Bài học</span>
            <span className="text-slate-300 text-[11px]">{chapters.length} Chương mục lục</span>
          </div>
        </div>
      </div>

      {/* GRADE FILTER & CHAPTER TABS */}
      <div className="bg-white p-4 sm:p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        {/* Grade switch pills */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl">
            {([6, 7, 8, 9] as Grade[]).map((g) => (
              <button
                key={g}
                onClick={() => {
                  onGradeChange(g);
                  setSelectedChapterId('all');
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                  activeGrade === g
                    ? 'bg-gradient-to-r from-teal-400 to-sky-400 text-slate-950 shadow-xs'
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200'
                }`}
              >
                <span>Lớp {g}</span>
                <span>{gradeIcons[g]}</span>
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm theo tên bài học hoặc yêu cầu cần đạt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-xs rounded-2xl border border-slate-300 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
            />
          </div>
        </div>

        {/* Chapter filter tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setSelectedChapterId('all')}
            className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-bold transition-colors ${
              selectedChapterId === 'all'
                ? 'bg-[#102A43] text-teal-300'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Tất cả các chương ({gradeLessons.length})
          </button>
          {chapters.map((ch) => (
            <button
              key={ch.id}
              onClick={() => setSelectedChapterId(ch.id)}
              className={`px-3 py-1.5 rounded-xl whitespace-nowrap font-semibold transition-colors ${
                selectedChapterId === ch.id
                  ? 'bg-[#102A43] text-teal-300 font-bold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {ch.title.split('.')[0]} ({ch.count} bài)
            </button>
          ))}
        </div>
      </div>

      {/* LESSONS CARDS LIST */}
      <div className="space-y-3.5">
        <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-2">
          <span>Hiển thị {filtered.length} / {gradeLessons.length} bài học Địa lí Lớp {activeGrade}</span>
          <span>Sách Giáo khoa Kết nối tri thức với cuộc sống</span>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          {filtered.map((item, idx) => (
            <div
              key={item.lessonId}
              className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm hover:border-teal-300 hover:shadow-md transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-100 pb-3">
                <div className="space-y-1">
                  <span className="text-[11px] font-black text-teal-700 uppercase tracking-wider block">
                    {item.chapterTitle}
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 flex items-center gap-2">
                    <span>{item.lessonTitle}</span>
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs shrink-0">
                  <span className="rounded-xl bg-slate-100 border border-slate-200 px-2.5 py-1 font-mono text-slate-700">
                    📖 SGK tr. {item.bookPageStart}
                    {item.bookPageEnd ? ` – ${item.bookPageEnd}` : ''}
                  </span>
                  <span className="rounded-xl bg-sky-50 border border-sky-200 px-2.5 py-1 font-mono text-sky-800">
                    📄 PDF tr. {item.pdfPageStart}
                  </span>
                </div>
              </div>

              {/* Learning Objectives */}
              <div className="space-y-2">
                <span className="text-xs font-black text-slate-500 uppercase flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-teal-600" />
                  <span>Yêu cầu cần đạt chính thức:</span>
                </span>
                <ul className="space-y-1 pl-1">
                  {item.learningObjectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <span className="text-teal-600 font-bold shrink-0 mt-0.5">•</span>
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTIONS */}
              <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-slate-400">
                  Mã bài học: <code className="font-mono text-slate-600">{item.lessonId}</code>
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectLessonForStudy(item)}
                    className="px-4 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>1. Ôn Sổ tay SGK</span>
                  </button>

                  <button
                    onClick={() => onSelectLessonForQuiz(item)}
                    className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    <span>2. Luyện tập ngay</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
