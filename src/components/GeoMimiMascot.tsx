import React from 'react';

export type MascotMood = 'happy' | 'waving' | 'explorer' | 'thinking' | 'celebrating';

interface GeoMimiMascotProps {
  mood?: MascotMood;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSpeechBubble?: boolean;
  speechText?: string;
}

export const GeoMimiMascot: React.FC<GeoMimiMascotProps> = ({
  mood = 'happy',
  size = 'md',
  className = '',
  showSpeechBubble = false,
  speechText,
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32',
  };

  return (
    <div className={`relative inline-flex items-center gap-2 select-none ${className}`}>
      <div className={`relative ${sizeMap[size]} shrink-0 transition-transform duration-300 hover:scale-110`}>
        <svg
          viewBox="0 0 120 120"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer glow aura */}
          <circle cx="60" cy="62" r="48" fill="#38BDF8" fillOpacity="0.2" />

          {/* Earth Body (Ocean Blue) */}
          <circle cx="60" cy="62" r="44" fill="#0284C7" stroke="#0F172A" strokeWidth="3" />

          {/* Continents (Emerald Green landforms) */}
          <g fill="#10B981" stroke="#047857" strokeWidth="1">
            {/* Asia & Vietnam outline */}
            <path d="M48 35 C55 30, 72 32, 78 40 C75 48, 68 50, 62 48 C58 54, 52 52, 48 45 Z" />
            <path d="M72 45 C78 48, 85 45, 88 52 C85 58, 79 60, 74 55 Z" />
            {/* Africa / Australia land */}
            <path d="M42 64 C48 60, 56 65, 58 75 C52 82, 45 80, 40 72 Z" />
            <path d="M72 74 C78 72, 84 76, 82 84 C76 88, 70 82, 72 74 Z" />
            {/* Polar ice cap */}
            <ellipse cx="60" cy="24" rx="20" ry="6" fill="#F8FAFC" fillOpacity="0.8" />
          </g>

          {/* Explorer Hat */}
          {mood === 'explorer' || mood === 'happy' || mood === 'waving' ? (
            <g id="explorer-hat">
              {/* Hat brim */}
              <ellipse cx="60" cy="26" rx="38" ry="9" fill="#F59E0B" stroke="#B45309" strokeWidth="2.5" />
              {/* Hat crown */}
              <path
                d="M38 25 C38 12, 82 12, 82 25 Z"
                fill="#FBBF24"
                stroke="#B45309"
                strokeWidth="2.5"
              />
              {/* Hat ribbon */}
              <path d="M39 24 C45 20, 75 20, 81 24" stroke="#DC2626" strokeWidth="3.5" fill="none" />
              {/* Little badge star on hat */}
              <circle cx="60" cy="18" r="3.5" fill="#EF4444" />
            </g>
          ) : (
            /* Graduation Cap or Headband */
            <g id="student-cap">
              <polygon points="60,10 95,22 60,34 25,22" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
              <rect x="45" y="27" width="30" height="9" rx="3" fill="#0F172A" />
              <path d="M60 22 L88 36 L88 44" stroke="#F59E0B" strokeWidth="2" fill="none" />
              <circle cx="88" cy="45" r="2.5" fill="#F59E0B" />
            </g>
          )}

          {/* Eyes */}
          {mood === 'celebrating' ? (
            /* Starry Happy Eyes */
            <g fill="#0F172A">
              <path d="M46 56 L48 51 L53 53 L49 57 L52 61 L47 59 L43 62 L45 57 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />
              <path d="M74 56 L76 51 L81 53 L77 57 L80 61 L75 59 L71 62 L73 57 Z" fill="#F59E0B" stroke="#0F172A" strokeWidth="1" />
            </g>
          ) : mood === 'thinking' ? (
            /* Curious Eyes looking up */
            <g fill="#0F172A">
              <circle cx="48" cy="54" r="5" />
              <circle cx="72" cy="54" r="5" />
              <circle cx="50" cy="52" r="2" fill="#FFFFFF" />
              <circle cx="74" cy="52" r="2" fill="#FFFFFF" />
              {/* Raised eyebrow */}
              <path d="M43 47 Q48 43 53 47" stroke="#0F172A" strokeWidth="2" fill="none" />
              <path d="M67 49 Q72 45 77 49" stroke="#0F172A" strokeWidth="2" fill="none" />
            </g>
          ) : (
            /* Cute Big Anime Eyes */
            <g fill="#0F172A">
              <ellipse cx="48" cy="58" rx="5" ry="6" />
              <ellipse cx="72" cy="58" rx="5" ry="6" />
              {/* Eye sparkle highlights */}
              <circle cx="50" cy="56" r="2" fill="#FFFFFF" />
              <circle cx="46" cy="60" r="1" fill="#FFFFFF" />
              <circle cx="74" cy="56" r="2" fill="#FFFFFF" />
              <circle cx="70" cy="60" r="1" fill="#FFFFFF" />
            </g>
          )}

          {/* Blushing Pink Cheeks */}
          <ellipse cx="38" cy="66" rx="5" ry="3" fill="#FB7185" fillOpacity="0.8" />
          <ellipse cx="82" cy="66" rx="5" ry="3" fill="#FB7185" fillOpacity="0.8" />

          {/* Cute Mouth */}
          {mood === 'happy' || mood === 'celebrating' || mood === 'waving' ? (
            <path
              d="M52 68 Q60 76 68 68"
              stroke="#0F172A"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="#F43F5E"
            />
          ) : mood === 'thinking' ? (
            <ellipse cx="60" cy="71" rx="3.5" ry="4" fill="#0F172A" />
          ) : (
            <path
              d="M54 70 Q60 75 66 70"
              stroke="#0F172A"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          )}

          {/* Waving Hand / Magnifying Glass */}
          {mood === 'waving' || mood === 'celebrating' ? (
            <g id="waving-hand">
              <circle cx="100" cy="46" r="8" fill="#FBBF24" stroke="#0F172A" strokeWidth="2" />
              <path d="M96 42 Q100 36 104 42" stroke="#0F172A" strokeWidth="2" fill="none" />
              {/* Little sparkles around hand */}
              <circle cx="108" cy="36" r="2" fill="#F59E0B" />
              <circle cx="102" cy="30" r="1.5" fill="#EF4444" />
            </g>
          ) : mood === 'thinking' ? (
            <g id="thinking-bulb">
              {/* Mini lightbulb above */}
              <path
                d="M86 28 C86 22, 98 22, 98 28 C98 32, 94 34, 94 37 L90 37 C90 34, 86 32, 86 28 Z"
                fill="#FDE047"
                stroke="#B45309"
                strokeWidth="1.5"
              />
              <rect x="90" y="38" width="4" height="2" fill="#78716C" />
            </g>
          ) : (
            /* Tiny Compass Medal on chest */
            <g id="compass-medal">
              <circle cx="60" cy="94" r="8" fill="#F8FAFC" stroke="#0F172A" strokeWidth="2" />
              <polygon points="60,88 62,94 60,100 58,94" fill="#EF4444" />
              <polygon points="54,94 60,92 66,94 60,96" fill="#3B82F6" />
              <circle cx="60" cy="94" r="1.5" fill="#F59E0B" />
            </g>
          )}
        </svg>
      </div>

      {/* Optional Speech Bubble */}
      {showSpeechBubble && speechText && (
        <div className="relative bg-white text-slate-900 border border-teal-200 text-xs font-semibold px-3 py-1.5 rounded-2xl shadow-md max-w-xs animate-in zoom-in-95">
          <div className="absolute left-0 top-1/2 -translate-x-1.5 -translate-y-1/2 w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-6 border-r-white" />
          {speechText}
        </div>
      )}
    </div>
  );
};
