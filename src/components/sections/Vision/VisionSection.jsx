import React from 'react';
import { MapPin, Globe, Building2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import RippleButton from '../../effects/RippleButton';
import CountUp from '../../effects/CountUp';
import TiltCard from '../../effects/TiltCard';
import ParallaxLayer from '../../effects/ParallaxLayer';

export default function VisionSection({ onSponsorClick }) {
  const { vision2030 } = siteData;

  const handleSponsorClick = () => {
    if (onSponsorClick) {
      onSponsorClick();
    } else {
      const el = document.getElementById('how-to-help');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="impact" className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div id="vision" className="relative -top-24 invisible" />
      <ScrollReveal direction="up" delay={100}>
        <div className="bg-[#0c3930] rounded-[2.2rem] sm:rounded-[2.8rem] p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Parallax Background Globe Watermark */}
          <ParallaxLayer
            speed={0.12}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.07] hidden sm:block"
          >
            <Globe className="w-[420px] h-[420px] text-white stroke-[0.8] animate-float-slow" />
          </ParallaxLayer>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

            {/* Left Column: Heading, Subtitle & Action */}
            <div className="lg:col-span-5 space-y-4">
              {/* Orange bullet + Badge */}
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-teal-100 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#f28e63] inline-block animate-ping" />
                <span>{vision2030.badge}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white tracking-tight leading-[1.15]">
                <span>Our Vision for </span>
                <span className="text-[#f28e63]">Sri Lanka</span>
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-teal-100/75 leading-relaxed max-w-sm font-normal">
                {vision2030.subtitle}
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <RippleButton
                  onClick={handleSponsorClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs tracking-wide shadow-button hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <span>Sponsor a Divisional Centre</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                </RippleButton>
              </div>

              {/* Systematic Rollout Tagline */}
              <div className="flex items-center gap-2 text-[11px] text-teal-200/70 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#f28e63] flex-shrink-0" />
                <span>Systematic Phase 1 Rollout across all 25 Districts</span>
              </div>
            </div>

            {/* Right Column: 3 Frosted Glass Stat Cards with CountUp & 3D Tilt */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-center">
              {vision2030.stats.map((stat, idx) => (
                <TiltCard key={stat.label} maxTilt={7} scale={1.03} className="h-full">
                  <div className="flex flex-col items-center justify-start p-5 sm:p-6 rounded-[1.75rem] bg-[#07241e]/60 backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-[#07241e]/80 transition-all duration-300 shadow-lg h-full group">
                    {/* Outlined circular icon with dual ring effect */}
                    <div className="w-11 h-11 rounded-full border border-teal-300/40 bg-[#0c3930]/80 flex items-center justify-center mb-3.5 shadow-inner text-[#f28e63] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {idx === 0 && <Globe className="w-4 h-4 stroke-[2]" />}
                      {idx === 1 && <MapPin className="w-4 h-4 stroke-[2]" />}
                      {idx === 2 && <Building2 className="w-4 h-4 stroke-[2]" />}
                    </div>

                    {/* Animated CountUp Stat Value */}
                    <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">
                      <CountUp end={stat.value} duration={1600 + idx * 200} />
                    </div>

                    {/* Stat Label */}
                    <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight mb-1">
                      {stat.label}
                    </h4>

                    {/* Stat Description */}
                    <p className="text-[10.5px] text-teal-100/70 leading-relaxed font-normal">
                      {stat.desc}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
