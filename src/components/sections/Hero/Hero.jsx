import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function Hero({ onExplorePrograms, onDonateClick }) {
  const { hero } = siteData;

  return (
    <section className="relative bg-[#0c3930] text-white overflow-hidden min-h-[520px] lg:min-h-[580px] flex items-center">
      {/* Background Soft Organic Foliage / Leaf Pattern Watermark on Left */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 overflow-hidden pointer-events-none select-none z-0">
        <svg
          viewBox="0 0 600 600"
          className="absolute -left-20 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.06] text-white fill-current"
        >
          <path d="M120,400 C150,220 280,120 450,150 C480,300 380,480 200,490 C140,490 110,460 120,400 Z" />
          <path d="M100,200 C120,80 240,20 380,50 C400,180 300,320 150,330 C110,330 90,290 100,200 Z" />
          <path d="M50,450 C80,350 180,300 280,320 C290,420 220,520 120,530 C70,530 40,500 50,450 Z" />
        </svg>
      </div>

      <div className="w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[520px] lg:min-h-[580px]">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center px-6 sm:px-12 lg:pl-16 lg:pr-8 xl:pl-24 py-12 lg:py-16 space-y-6">
            {/* Tagline Badge */}
            <div className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] text-teal-200/90 uppercase">
              <span className="w-6 h-[1.5px] bg-[#f28e63] inline-block" />
              <span>{hero.tag}</span>
            </div>

            {/* Main Hero Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-bold tracking-tight leading-[1.08] text-white">
              <span>{hero.titleLine1}</span> <br />
              <span className="text-[#f28e63]">{hero.titleLine2}</span> <br />
              <span>{hero.titleLine3}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xs sm:text-[13px] text-teal-100/80 max-w-md leading-relaxed font-normal">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onDonateClick}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <a
                href="#programs"
                onClick={onExplorePrograms}
                className="flex items-center gap-1.5 px-6 py-3 rounded-full border border-teal-500/50 hover:border-teal-300 bg-teal-900/30 hover:bg-teal-800/40 text-white font-medium text-xs backdrop-blur-sm transition-all duration-200"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Full-Height Organic Curved Photo of Happy Children */}
          <div className="lg:col-span-6 xl:col-span-6 relative min-h-[360px] sm:min-h-[440px] lg:min-h-full overflow-hidden">
            {/* Organic S-Curve Divider Overlay visible on large screens */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={hero.image}
                alt="Children in Sri Lanka smiling with hope"
                className="w-full h-full object-cover object-center scale-[1.02]"
                loading="eager"
              />

              {/* Soft dark vignette on left edge to blend seamlessly into teal */}
              <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0c3930] via-[#0c3930]/40 to-transparent pointer-events-none" />
              
              {/* Soft gradient bottom on mobile */}
              <div className="lg:hidden absolute inset-0 bg-gradient-to-t from-[#0c3930] via-transparent to-transparent pointer-events-none" />

              {/* Clean Image View */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
