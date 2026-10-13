import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import RippleButton from '../../effects/RippleButton';
import ParallaxLayer from '../../effects/ParallaxLayer';

export default function MissionOverview({ onLearnMoreClick }) {
  const { mission } = siteData;

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto relative overflow-hidden scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Column: Heading, description, and CTA button */}
        <div className="lg:col-span-5 space-y-5 pr-0 lg:pr-4">
          <ScrollReveal direction="left" delay={100}>
            {/* Badge */}
            <div className="flex items-center gap-2.5 text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">
              <span className="w-6 h-[2px] bg-[#f28e63] inline-block" />
              <span>{mission.badge}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={200}>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold tracking-tight text-[#0c3930] leading-[1.12]">
              {mission.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={300}>
            {/* Description */}
            <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed font-normal max-w-md">
              {mission.description}
            </p>
          </ScrollReveal>

          {/* Pill Button */}
          <ScrollReveal direction="left" delay={400}>
            <div className="pt-2">
              <RippleButton
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0c3930] hover:bg-[#07241e] text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>{mission.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </RippleButton>
            </div>
          </ScrollReveal>
        </div>

        {/* Center: Delicate Leafy Branch Watermark with Parallax Drift */}
        <div className="hidden lg:flex lg:col-span-1 justify-center items-center pointer-events-none select-none">
          <ParallaxLayer speed={0.15}>
            <svg viewBox="0 0 100 200" className="w-20 h-40 opacity-30 text-[#8ec5ab] fill-current animate-float-slow">
              <path d="M50,190 C50,140 45,90 20,40 C35,60 55,75 50,110 C60,85 75,55 90,30 C90,60 70,100 55,140 Z" />
              <path d="M10,80 C30,75 45,85 48,105 C40,115 20,110 10,80 Z" />
              <path d="M85,90 C65,95 52,110 50,130 C65,130 85,120 85,90 Z" />
              <path d="M15,130 C30,130 45,140 48,155 C35,165 20,155 15,130 Z" />
            </svg>
          </ParallaxLayer>
        </div>

        {/* Right Column: Classroom Children Photo with Floating Frosted Glass Scripture Card */}
        <div className="lg:col-span-6 relative">
          <ScrollReveal direction="right" delay={250}>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl aspect-[16/10] sm:aspect-[16/9] w-full group">
              {/* Real Children Learning Photo */}
              <img
                src={mission.centerImage}
                alt="Children learning together in Sri Lanka classroom"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Floating Glassmorphic Frosted Scripture Card */}
              <div className="absolute bottom-3 right-3 left-3 sm:left-auto sm:right-4 sm:bottom-4 sm:max-w-[330px] md:max-w-[350px] bg-white/70 hover:bg-white/85 backdrop-blur-xl rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_0_rgba(0,0,0,0.18)] border border-white/80 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1">
                <div>
                  <span className="text-xl sm:text-2xl font-serif text-[#ea7849] font-bold block leading-none select-none">
                    “
                  </span>
                  <p className="font-serif italic text-gray-900 text-[11px] sm:text-[12px] leading-relaxed mt-1">
                    "{mission.scriptureQuote}"
                  </p>
                </div>

                <div className="pt-2.5 mt-2.5 border-t border-gray-900/10 flex items-center justify-between text-right">
                  <span className="text-[10px] font-semibold text-teal-900/60 tracking-wider">
                    HOLY BIBLE
                  </span>
                  <span className="text-[10.5px] font-bold text-[#0c3930] tracking-wide">
                    {mission.scriptureRef}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
