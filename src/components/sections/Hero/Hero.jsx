import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';

// organic left edge of the photo shifted left (viewBox 1440 x 640)
const EDGE =
  'M620,0 C560,70 640,150 580,235 C520,320 630,400 570,485 C540,530 560,590 540,640';

export default function Hero({ onExplorePrograms, onDonateClick }) {
  const { hero } = siteData;

  return (
    <section className="relative isolate overflow-hidden bg-[#07362a] text-white min-h-[580px] lg:min-h-[640px] flex items-center">
      {/* DESKTOP: photo + green blend, all in one SVG */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 640"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hv-green" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#052a1c" />
            <stop offset="55%" stopColor="#0a4a37" />
            <stop offset="100%" stopColor="#0e5c47" />
          </linearGradient>

          <filter id="hv-blur-mask" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="28" />
          </filter>
          <filter id="hv-blur-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
          <filter id="hv-blur-wave" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="40" />
          </filter>

          {/* white = photo visible, blurred => soft organic edge */}
          <mask id="hv-photo-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="640">
            <rect width="1440" height="640" fill="black" />
            <path d={`${EDGE} L1440,640 L1440,0 Z`} fill="white" filter="url(#hv-blur-mask)" />
          </mask>
        </defs>

        {/* base green */}
        <rect width="1440" height="640" fill="url(#hv-green)" />

        {/* photo (right side, masked) */}
        <image
          href={hero.image}
          x="300"
          y="0"
          width="1140"
          height="640"
          preserveAspectRatio="xMidYMid slice"
          mask="url(#hv-photo-mask)"
        />

        {/* light green rim glow along the curve */}
        <path
          d={EDGE}
          fill="none"
          stroke="#2f9a7a"
          strokeWidth="46"
          opacity="0.35"
          filter="url(#hv-blur-glow)"
        />

        {/* dark organic waves bottom-left / top-left */}
        <ellipse cx="140" cy="640" rx="380" ry="170" fill="#03231a" opacity="0.9" filter="url(#hv-blur-wave)" />
        <ellipse cx="100" cy="40" rx="320" ry="160" fill="#0e5c47" opacity="0.7" filter="url(#hv-blur-wave)" />
      </svg>

      {/* MOBILE / TABLET: photo bg + top-to-bottom fade */}
      <div
        className="lg:hidden absolute inset-0 z-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: `url(${hero.image})` }}
      />
      <div className="lg:hidden absolute inset-0 z-[1] bg-gradient-to-b from-[#07362a] via-[#07362a]/85 to-[#07362a]/35 pointer-events-none" />

      {/* Content shifted more to the left */}
      <div className="w-full px-6 sm:px-10 lg:pl-16 xl:pl-24 lg:pr-8 py-16 lg:py-20 relative z-10">
        <div className="max-w-xl lg:max-w-xl">
          <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-bold tracking-[0.26em] text-teal-200/90 uppercase mb-7">
            <span className="w-8 h-[2.5px] bg-[#f28e63] inline-block rounded-full" />
            <span>{hero.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-extrabold tracking-tight leading-[1.08] text-white flex flex-col gap-1.5 sm:gap-2.5 drop-shadow-md">
            <span className="block whitespace-nowrap">{hero.titleLine1}</span>
            <span className="block whitespace-nowrap text-[#f28e63]">{hero.titleLine2}</span>
            <span className="block whitespace-nowrap">{hero.titleLine3}</span>
          </h1>

          <p className="mt-7 text-sm sm:text-base text-teal-50/90 max-w-lg leading-relaxed font-normal drop-shadow">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onDonateClick}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-sm shadow-lg shadow-[#042820]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>{hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-0.5" />
            </button>

            <a
              href="#programs"
              onClick={(e) => {
                if (onExplorePrograms) {
                  e.preventDefault();
                  onExplorePrograms();
                }
              }}
              className="inline-flex min-h-14 items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border border-teal-300/40 hover:border-teal-200 bg-[#07382d]/40 hover:bg-white/10 text-white font-semibold text-sm backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <span>{hero.secondaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}