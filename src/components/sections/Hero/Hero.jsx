import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function Hero({ onExplorePrograms, onDonateClick }) {
  const { hero } = siteData;

  return (
    <section className="relative bg-[#0b382d] text-white overflow-hidden min-h-[540px] lg:min-h-[600px] flex items-center">
      {/* Top-Left Soft Organic Wave Silhouettes matching exact target design mockup */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 overflow-hidden pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 800 800"
          className="absolute -top-32 -left-32 w-[950px] h-[950px] opacity-[0.22] text-[#06211a] fill-current"
        >
          <path d="M0,0 L650,0 C550,220 420,380 280,500 C160,600 50,680 0,720 Z" />
        </svg>

        <svg
          viewBox="0 0 800 800"
          className="absolute top-12 -left-20 w-[750px] h-[750px] opacity-[0.14] text-[#134d3f] fill-current"
        >
          <path d="M0,150 C250,150 480,280 400,520 C320,700 120,760 0,800 Z" />
        </svg>
      </div>

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[540px] lg:min-h-[600px]">

          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center px-6 sm:px-10 lg:pl-14 lg:pr-4 xl:pl-20 py-12 lg:py-16 space-y-6 z-10">
            {/* Tagline Badge with Orange Indicator Line */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-[12px] font-semibold tracking-[0.24em] text-teal-200/90 uppercase">
              <span className="w-7 h-[2px] bg-[#f28e63] inline-block" />
              <span>{hero.tag}</span>
            </div>

            {/* Main Hero Heading (Exactly 3 Lines with clean breathable spacing) */}
            <h1 className="text-3xl sm:text-4xl md:text-[2.55rem] lg:text-[2.7rem] xl:text-[3.1rem] font-extrabold tracking-tight leading-[1.18] text-white flex flex-col gap-1.5 sm:gap-2">
              <span className="block whitespace-nowrap">{hero.titleLine1}</span>
              <span className="block whitespace-nowrap text-[#f28e63]">{hero.titleLine2}</span>
              <span className="block whitespace-nowrap">{hero.titleLine3}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-teal-100/90 max-w-md leading-relaxed font-normal">
              {hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onDonateClick}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-bold text-xs shadow-md hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="#programs"
                onClick={onExplorePrograms}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-teal-400/30 hover:border-teal-300 bg-teal-950/30 hover:bg-teal-900/50 text-white font-semibold text-xs backdrop-blur-sm transition-all duration-200"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Full-Height Curved Photo of Children */}
          <div className="lg:col-span-7 xl:col-span-7 relative min-h-[380px] sm:min-h-[460px] lg:min-h-full overflow-hidden">
            <div className="absolute inset-0 w-full h-full">
              <img
                src={hero.image}
                alt="Happy Sri Lankan children smiling and pointing forward"
                className="w-full h-full object-cover object-left lg:object-center scale-[1.01]"
                loading="eager"
              />

              {/* Smoother, narrower organic gradient blend so more of the left side of the photo is visible */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#0b382d] via-[#0b382d]/40 to-transparent pointer-events-none" />

              {/* Soft gradient bottom on mobile */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0b382d] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
