import React from 'react';

interface ProjectThumbnailProps {
  type: 'effy' | 'trade' | 'kmc' | 'lumina' | 'corekraft' | 'signmate';
  className?: string;
}

export const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ type, className = '' }) => {
  if (type === 'effy') {
    // Exact match for the Effy thumbnail in the reference image:
    // Bright pink/magenta background with a realistic iPhone mockup showing app screen
    return (
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center bg-gradient-to-br from-[#ff2a85] via-[#ff4d9d] to-[#e60067] shadow-inner select-none ${className}`}
      >
        {/* Subtle radial sheen */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />

        {/* iPhone mockup */}
        <div className="relative w-20 h-28 sm:w-22 sm:h-30 mt-3 bg-neutral-900 rounded-t-[20px] p-[2.5px] shadow-[0_8px_20px_rgba(0,0,0,0.35)] border border-neutral-700/60 overflow-hidden flex flex-col">
          {/* Phone Speaker & Dynamic Island */}
          <div className="w-full flex justify-center pt-1 pb-1 z-10 bg-black">
            <div className="w-7 h-2 bg-neutral-900 rounded-full flex items-center justify-end pr-1 border border-neutral-800">
              <div className="w-1 h-1 bg-neutral-800 rounded-full" />
            </div>
          </div>

          {/* Phone Screen Display */}
          <div className="flex-1 bg-gradient-to-b from-[#1c192e] to-[#0c0a14] p-1.5 flex flex-col justify-between overflow-hidden">
            {/* Screen status clock */}
            <div className="flex justify-between items-center px-1 text-[7px] text-white/90 font-mono tracking-tighter">
              <span>9:41</span>
              <div className="flex gap-0.5 items-center">
                <span className="w-1.5 h-1 border border-white/80 rounded-xs" />
              </div>
            </div>

            {/* App Icons / Voice Cards */}
            <div className="grid grid-cols-3 gap-1 my-1">
              <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-amber-400 to-orange-500 shadow-sm flex items-center justify-center text-[7px] text-white font-bold">
                6
              </div>
              <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-pink-500 to-rose-500 shadow-sm flex items-center justify-center">
                <div className="w-2 h-0.5 bg-white rounded-full" />
              </div>
              <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-600 shadow-sm flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              </div>
              <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-emerald-400 to-teal-600 shadow-sm" />
              <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-sm" />
              <div className="w-4 h-4 rounded-md bg-gradient-to-tr from-red-500 to-orange-400 shadow-sm" />
            </div>

            {/* Bottom Dock / Audio Waveform preview */}
            <div className="w-full bg-white/10 backdrop-blur-xs rounded-lg py-0.5 px-1 flex items-center justify-around">
              <div className="w-0.5 h-2 bg-pink-400 rounded-full animate-pulse" />
              <div className="w-0.5 h-3 bg-pink-300 rounded-full animate-pulse delay-75" />
              <div className="w-0.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-150" />
              <div className="w-0.5 h-2.5 bg-white rounded-full animate-pulse" />
              <div className="w-0.5 h-1 bg-pink-400 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'trade') {
    // Exact match for the Trade thumbnail in reference image:
    // Modern architectural building facade corner, bright blue sky, white building,
    // orange rectangular B2B sign with dark abstract logo mark
    return (
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-neutral-200 select-none ${className}`}
      >
        {/* Sky */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a94b8] via-[#6ba8c8] to-[#92bfd6]" />

        {/* Diagonal modern building facade */}
        <div
          className="absolute inset-0 bg-[#e4e5e7] shadow-xl transform origin-bottom-left"
          style={{
            clipPath: 'polygon(0% 18%, 100% 42%, 100% 100%, 0% 100%)',
          }}
        >
          {/* Concrete panels grid lines */}
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:16px_16px]" />

          {/* Architectural shadow beam */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-400/25" />

          {/* Wall mounted signage box */}
          <div className="absolute top-4 left-3 sm:top-5 sm:left-4 bg-white rounded-md p-1.5 shadow-md flex items-center gap-1.5 border border-neutral-300">
            {/* Small B2B vertical text */}
            <div className="writing-vertical text-[8px] font-bold text-neutral-600 tracking-tighter uppercase border-r border-neutral-300 pr-0.5 select-none" style={{ writingMode: 'vertical-lr' }}>
              B2B
            </div>

            {/* Bright Orange Logo Box with stylized black Trade T mark */}
            <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#ea580c] rounded flex items-center justify-center shadow-xs">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 8C5 6.89543 5.89543 6 7 6H17C18.1046 6 19 6.89543 19 8V9C19 9.55228 18.5523 10 18 10H14V17C14 17.5523 13.5523 18 13 18H11C10.4477 18 10 17.5523 10 17V10H6C5.44772 10 5 9.55228 5 9V8Z"
                  fill="#000000"
                />
              </svg>
            </div>
          </div>

          {/* Ground / street perspective ledge */}
          <div className="absolute bottom-0 inset-x-0 h-4 bg-neutral-300 border-t border-neutral-400/50" />
        </div>
      </div>
    );
  }

  if (type === 'kmc') {
    return (
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-white select-none p-3.5 sm:p-4 flex items-center justify-center border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] group-hover:border-neutral-300 transition-all ${className}`}
      >
        <img
          src="/assets/aistudio/kitemedialogoo_c93bfb06.png"
          alt="Kite Media Concept"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('public')) {
              target.src = '/public/assets/aistudio/kitemedialogoo_c93bfb06.png';
            }
          }}
          className="w-full h-auto object-contain max-h-12 sm:max-h-14 group-hover:scale-105 transition-transform duration-200"
        />
      </div>
    );
  }

  if (type === 'corekraft') {
    return (
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-white select-none p-3.5 sm:p-4 flex items-center justify-center border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] group-hover:border-neutral-300 transition-all ${className}`}
      >
        <img
          src="/assets/aistudio/logo_ee6cb459.png"
          alt="Corekraft"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('public')) {
              target.src = '/public/assets/aistudio/logo_ee6cb459.png';
            }
          }}
          className="w-full h-auto object-contain max-h-10 sm:max-h-11 group-hover:scale-105 transition-transform duration-200"
        />
      </div>
    );
  }

  if (type === 'signmate') {
    return (
      <div
        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-white select-none p-3.5 sm:p-4 flex items-center justify-center border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.03)] group-hover:border-neutral-300 transition-all ${className}`}
      >
        <img
          src="/assets/aistudio/322-removebg-preview_4c180e48.png"
          alt="Sign Mate"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (!target.src.includes('public')) {
              target.src = '/public/assets/aistudio/322-removebg-preview_4c180e48.png';
            }
          }}
          className="w-auto h-12 sm:h-14 object-contain group-hover:scale-105 transition-transform duration-200"
        />
      </div>
    );
  }

  // lumina
  return (
    <div
      className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 bg-gradient-to-br from-[#18182b] via-[#241d3b] to-[#3b2348] select-none flex items-center justify-center ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_70%)]" />
      <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-400 to-pink-400 shadow-[0_0_25px_rgba(168,85,247,0.5)] flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white/90 shadow-sm" />
      </div>
      <div className="absolute bottom-2 text-[8px] font-mono tracking-widest text-indigo-300/80 uppercase">
        SPATIAL LIGHT
      </div>
    </div>
  );
};
