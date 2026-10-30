import React from 'react';
import { VisualData } from '../types';
import { MapPin, Compass, BarChart2, Table } from 'lucide-react';

interface VisualAssetViewerProps {
  visualData: VisualData;
}

export const VisualAssetViewer: React.FC<VisualAssetViewerProps> = ({ visualData }) => {
  const { type, title, caption, data } = visualData;

  return (
    <div className="my-4 rounded-xl border border-sky-200 bg-sky-50/50 p-4 shadow-xs">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm font-semibold text-sky-900">
          {type === 'contour' && <Compass className="h-4 w-4 text-sky-600" />}
          {type === 'climate_chart' && <BarChart2 className="h-4 w-4 text-blue-600" />}
          {type === 'map_coord' && <MapPin className="h-4 w-4 text-emerald-600" />}
          {type === 'data_table' && <Table className="h-4 w-4 text-indigo-600" />}
          <span>{title}</span>
        </div>
        <span className="text-xs font-medium text-sky-600 uppercase tracking-wider">Tư liệu trực quan</span>
      </div>

      {/* RENDER CONTOUR MAP SVG */}
      {type === 'contour' && (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 border border-sky-100">
          <svg viewBox="0 0 400 200" className="w-full max-w-md h-48">
            <defs>
              <linearGradient id="contourGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#bae6fd" />
                <stop offset="100%" stopColor="#7dd3fc" />
              </linearGradient>
            </defs>

            {/* Base elevation 50m */}
            <path
              d="M 40,150 Q 140,40 360,150"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text x="50" y="145" fontSize="11" fill="#0369a1" fontWeight="bold">50m</text>

            {/* 100m contour */}
            <path
              d="M 90,135 Q 160,55 350,135"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
            />
            <text x="95" y="130" fontSize="11" fill="#0369a1" fontWeight="bold">100m</text>

            {/* 150m contour - Notice East side (right) is very close, West (left) is wide */}
            <path
              d="M 140,120 Q 180,70 345,120"
              fill="none"
              stroke="#0369a1"
              strokeWidth="2.5"
            />
            <text x="145" y="115" fontSize="11" fill="#0369a1" fontWeight="bold">150m</text>

            {/* 200m contour */}
            <path
              d="M 200,105 Q 230,80 340,105"
              fill="none"
              stroke="#075985"
              strokeWidth="3"
            />
            <text x="210" y="100" fontSize="11" fill="#075985" fontWeight="bold">200m</text>

            {/* Peak marker */}
            <polygon points="320,80 326,92 314,92" fill="#e11d48" />
            <text x="330" y="90" fontSize="12" fill="#e11d48" fontWeight="bold">▲ Đỉnh (250m)</text>

            {/* Labels for East / West slopes */}
            <rect x="70" y="165" width="120" height="24" rx="4" fill="#f0fdf4" stroke="#86efac" />
            <text x="80" y="181" fontSize="11" fill="#166534" fontWeight="600">Sườn Tây (Đường thưa)</text>

            <rect x="250" y="165" width="120" height="24" rx="4" fill="#fff1f2" stroke="#fca5a5" />
            <text x="260" y="181" fontSize="11" fill="#991b1b" fontWeight="600">Sườn Đông (Đường sít)</text>
          </svg>
          <div className="mt-1 flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              Sườn Tây: Dốc thoai thoải
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500"></span>
              Sườn Đông: Dốc đứng hiểm trở
            </span>
          </div>
        </div>
      )}

      {/* RENDER CLIMATE CHART */}
      {type === 'climate_chart' && (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 border border-sky-100">
          <svg viewBox="0 0 420 220" className="w-full max-w-lg h-52">
            {/* Grid lines */}
            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="45"
                y1={30 + i * 35}
                x2="375"
                y2={30 + i * 35}
                stroke="#f1f5f9"
                strokeWidth="1"
              />
            ))}

            {/* Axes */}
            <line x1="45" y1="20" x2="45" y2="170" stroke="#64748b" strokeWidth="1.5" />
            <line x1="375" y1="20" x2="375" y2="170" stroke="#ef4444" strokeWidth="1.5" />
            <line x1="45" y1="170" x2="375" y2="170" stroke="#64748b" strokeWidth="1.5" />

            {/* Axis labels */}
            <text x="15" y="25" fontSize="10" fill="#0284c7" fontWeight="bold">Mưa (mm)</text>
            <text x="365" y="25" fontSize="10" fill="#dc2626" fontWeight="bold">Nhiệt (°C)</text>

            <text x="25" y="35" fontSize="9" fill="#64748b">100</text>
            <text x="25" y="100" fontSize="9" fill="#64748b">50</text>
            <text x="30" y="172" fontSize="9" fill="#64748b">0</text>

            <text x="382" y="35" fontSize="9" fill="#dc2626">30°</text>
            <text x="382" y="100" fontSize="9" fill="#dc2626">15°</text>
            <text x="382" y="172" fontSize="9" fill="#dc2626">0°</text>

            {/* Months */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m, idx) => {
              const x = 58 + idx * 26;
              const rain = data?.rains ? data.rains[idx] : 50;
              const temp = data?.temps ? data.temps[idx] : 10;
              const barHeight = (rain / 100) * 140;
              const barY = 170 - barHeight;
              const tempY = 170 - (temp / 30) * 140;

              return (
                <g key={m}>
                  {/* Rainfall Bar */}
                  <rect
                    x={x - 8}
                    y={barY}
                    width="16"
                    height={barHeight}
                    rx="2"
                    fill="#38bdf8"
                    opacity="0.85"
                  />
                  {/* Month Label */}
                  <text x={x} y="188" fontSize="9" textAnchor="middle" fill="#64748b">
                    T{m}
                  </text>
                  {/* Temperature Dot */}
                  <circle cx={x} cy={tempY} r="3.5" fill="#dc2626" />
                </g>
              );
            })}

            {/* Temperature Curve */}
            {data?.temps && (
              <polyline
                fill="none"
                stroke="#dc2626"
                strokeWidth="2.5"
                points={data.temps
                  .map((t: number, idx: number) => {
                    const x = 58 + idx * 26;
                    const y = 170 - (t / 30) * 140;
                    return `${x},${y}`;
                  })
                  .join(' ')}
              />
            )}
          </svg>
          <div className="mt-1 flex items-center justify-center gap-6 text-xs">
            <span className="flex items-center gap-1 font-medium text-sky-700">
              <span className="inline-block h-3 w-4 rounded-xs bg-sky-400"></span>
              Cột màu xanh: Lượng mưa (mm)
            </span>
            <span className="flex items-center gap-1 font-medium text-rose-700">
              <span className="inline-block h-1 w-4 bg-rose-600"></span>
              Đường màu đỏ: Nhiệt độ trung bình (°C)
            </span>
          </div>
        </div>
      )}

      {/* RENDER COORDINATE GRID SVG */}
      {type === 'map_coord' && (
        <div className="flex flex-col items-center justify-center rounded-lg bg-white p-3 border border-sky-100">
          <svg viewBox="0 0 380 200" className="w-full max-w-md h-48">
            {/* Background Grid */}
            <rect x="50" y="25" width="280" height="150" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1.5" />

            {/* Latitude lines */}
            <line x1="50" y1="55" x2="330" y2="55" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <text x="12" y="59" fontSize="10" fill="#475569" fontWeight="bold">40°B</text>

            <line x1="50" y1="95" x2="330" y2="95" stroke="#0284c7" strokeWidth="1.5" />
            <text x="12" y="99" fontSize="10" fill="#0284c7" fontWeight="bold">20°B</text>

            <line x1="50" y1="135" x2="330" y2="135" stroke="#334155" strokeWidth="2" />
            <text x="5" y="139" fontSize="10" fill="#0f172a" fontWeight="bold">0° Xích đạo</text>

            <line x1="50" y1="170" x2="330" y2="170" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <text x="12" y="174" fontSize="10" fill="#475569" fontWeight="bold">20°N</text>

            {/* Longitude lines */}
            <line x1="90" y1="25" x2="90" y2="175" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <text x="75" y="18" fontSize="10" fill="#475569" fontWeight="bold">0° Gốc</text>

            <line x1="160" y1="25" x2="160" y2="175" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 3" />
            <text x="145" y="18" fontSize="10" fill="#475569" fontWeight="bold">40°Đ</text>

            <line x1="260" y1="25" x2="260" y2="175" stroke="#0284c7" strokeWidth="1.5" />
            <text x="245" y="18" fontSize="10" fill="#0284c7" fontWeight="bold">105°Đ</text>

            {/* Intersection Point A at (20°B, 105°Đ) */}
            <circle cx="260" cy="95" r="7" fill="#e11d48" stroke="#ffffff" strokeWidth="2" />
            <circle cx="260" cy="95" r="14" fill="none" stroke="#e11d48" strokeWidth="1" strokeDasharray="2 2" />
            <rect x="272" y="80" width="80" height="28" rx="4" fill="#ffe4e6" stroke="#f43f5e" />
            <text x="278" y="98" fontSize="11" fill="#9f1239" fontWeight="bold">Điểm A</text>

            {/* Compass Rose */}
            <g transform="translate(340, 45)">
              <circle cx="0" cy="0" r="14" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
              <text x="0" y="-4" fontSize="9" textAnchor="middle" fill="#0284c7" fontWeight="bold">B</text>
              <text x="0" y="10" fontSize="8" textAnchor="middle" fill="#64748b">N</text>
              <text x="8" y="3" fontSize="8" textAnchor="middle" fill="#64748b">Đ</text>
              <text x="-8" y="3" fontSize="8" textAnchor="middle" fill="#64748b">T</text>
            </g>
          </svg>
          <p className="mt-1 text-xs text-slate-500 text-center">
            Điểm A là giao điểm của vĩ tuyến <strong>20°B</strong> và kinh tuyến <strong>105°Đ</strong>.
          </p>
        </div>
      )}

      {/* RENDER DATA TABLE */}
      {type === 'data_table' && data && (
        <div className="overflow-x-auto rounded-lg border border-sky-100 bg-white">
          <table className="min-w-full divide-y divide-sky-100 text-sm">
            <thead className="bg-sky-50/70">
              <tr>
                {data.headers?.map((h: string, idx: number) => (
                  <th
                    key={idx}
                    className="px-4 py-2.5 text-left text-xs font-semibold text-sky-900 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {data.rows?.map((row: string[], rIdx: number) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  {row.map((cell: string, cIdx: number) => (
                    <td
                      key={cIdx}
                      className={`px-4 py-2.5 text-slate-700 ${
                        cIdx === 0 ? 'font-medium text-sky-950' : 'font-mono'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {caption && <p className="mt-2 text-xs italic text-slate-500 text-center">{caption}</p>}
    </div>
  );
};
