import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function MissionOverview({ onLearnMoreClick }) {
  const { mission } = siteData;

  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Column: Heading, description, and CTA button */}
        <div className="lg:col-span-5 space-y-4 pr-0 lg:pr-4">
          {/* Badge */}
          <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
            <span className="w-6 h-[2px] bg-[#f28e63] inline-block" />
            <span>{mission.badge}</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#0c3930] leading-[1.12]">
            {mission.title}
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal max-w-md">
            {mission.description}
          </p>

          {/* Pill Button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onLearnMoreClick}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c3930] hover:bg-[#07241e] text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200"
            >
              <span>{mission.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Delicate Leafy Branch Watermark */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center pointer-events-none select-none">
          <svg viewBox="0 0 100 200" className="w-20 h-40 opacity-30 text-[#8ec5ab] fill-current">
            <path d="M50,190 C50,140 45,90 20,40 C35,60 55,75 50,110 C60,85 75,55 90,30 C90,60 70,100 55,140 Z" />
            <path d="M10,80 C30,75 45,85 48,105 C40,115 20,110 10,80 Z" />
            <path d="M85,90 C65,95 52,110 50,130 C65,130 85,120 85,90 Z" />
            <path d="M15,130 C30,130 45,140 48,155 C35,165 20,155 15,130 Z" />
          </svg>
        </div>

        {/* Right Column: Classroom Children Photo with Floating Scripture Card on top right */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-md aspect-[16/10] sm:aspect-[16/9] w-full group">
            {/* Real Children Learning Photo */}
            <img
              src={mission.centerImage}
              alt="Children learning together in Sri Lanka classroom"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />

            {/* Floating Scripture Card (Positioned top-right/overlapping right edge inside photo) */}
            <div className="absolute top-4 right-4 bottom-4 sm:top-5 sm:right-5 sm:bottom-5 w-[210px] sm:w-[250px] bg-[#f2faf7]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-lg border border-white/60">
              <div>
                <span className="text-2xl font-serif text-teal-800/80 font-bold block leading-none select-none">
                  “
                </span>
                <p className="font-serif italic text-gray-800 text-[11px] sm:text-[12px] leading-relaxed mt-1">
                  "{mission.scriptureQuote}"
                </p>
              </div>

              <div className="pt-2 border-t border-teal-200/40 text-right">
                <span className="text-[10px] font-bold text-teal-900 tracking-wider">
                  {mission.scriptureRef}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
