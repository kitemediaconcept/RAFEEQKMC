import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface BrandLogosProps {
  onBrandClick?: (brandId: string) => void;
}

export const BrandLogos: React.FC<BrandLogosProps> = ({ onBrandClick }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const brands = [
    {
      id: 'kite',
      name: 'Kite Media Concept',
      src: '/assets/aistudio/kitemedialogoo_c93bfb06.png',
      fallbackSrc: '/public/assets/aistudio/kitemedialogoo_c93bfb06.png',
      alt: 'Kite Media Concept Logo',
      role: 'Creative Direction & Omnichannel Media',
      heightClass: 'h-6 sm:h-7 max-w-[125px] sm:max-w-[145px]',
    },
    {
      id: 'corekraft',
      name: 'Corekraft',
      src: '/assets/aistudio/logo_ee6cb459.png',
      fallbackSrc: '/public/assets/aistudio/logo_ee6cb459.png',
      alt: 'Corekraft Logo',
      role: 'Brand Identity & Strategy',
      heightClass: 'h-5 sm:h-6 max-w-[110px] sm:max-w-[130px]',
    },
    {
      id: 'signmate',
      name: 'Sign Mate',
      src: '/assets/aistudio/322-removebg-preview_4c180e48.png',
      fallbackSrc: '/public/assets/aistudio/322-removebg-preview_4c180e48.png',
      alt: 'Sign Mate Logo',
      role: 'Signage & Environmental Branding',
      heightClass: 'h-6 sm:h-7 max-w-[55px] sm:max-w-[65px]',
    },
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl py-3 sm:py-3.5 px-4 sm:px-6 shadow-xs border border-black/[0.04] transition-all hover:border-black/[0.08] relative">
      <div className="flex items-center justify-between sm:justify-around gap-3 sm:gap-6 overflow-x-auto no-scrollbar">
        {brands.map((brand) => (
          <div
            key={brand.id}
            onClick={() => onBrandClick?.(brand.id)}
            onMouseEnter={() => setActiveTooltip(brand.id)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="group relative flex items-center justify-center p-1 cursor-pointer transition-all duration-200"
            title={`${brand.name} — ${brand.role}`}
          >
            <img
              src={brand.src}
              alt={brand.alt}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (!target.src.includes('public')) {
                  target.src = brand.fallbackSrc;
                }
              }}
              className={`${brand.heightClass} object-contain transition-all duration-200 group-hover:scale-105 filter group-hover:brightness-105`}
            />

            {/* Subtle floating tooltip on hover */}
            {activeTooltip === brand.id && (
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-[10px] font-medium py-1 px-2.5 rounded-lg whitespace-nowrap shadow-md pointer-events-none z-20 animate-in fade-in zoom-in-95 duration-100 flex items-center gap-1.5">
                <span className="font-semibold">{brand.name}</span>
                <span className="text-neutral-400">·</span>
                <span className="text-neutral-300">{brand.role}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
