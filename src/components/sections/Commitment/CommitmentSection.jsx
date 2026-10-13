import React from 'react';
import { Plus, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import TiltCard from '../../effects/TiltCard';
import RippleButton from '../../effects/RippleButton';
import ParallaxLayer from '../../effects/ParallaxLayer';

export default function CommitmentSection({ onGetInvolved }) {
  const { commitment } = siteData;

  const renderIcon = (type) => {
    switch (type) {
      case 'plus':
        return <Plus className="w-4 h-4 text-white stroke-[2.5]" />;
      case 'users':
        return <Users className="w-4 h-4 text-white stroke-[2]" />;
      case 'shield-check':
        return <ShieldCheck className="w-4 h-4 text-white stroke-[2]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-white stroke-[2]" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <ScrollReveal direction="up" delay={100}>
        <div className="bg-[#0c3930] rounded-[2.2rem] sm:rounded-[2.8rem] p-8 sm:p-10 lg:p-12 text-white shadow-2xl relative overflow-hidden">
          {/* Right Corner Leaf Silhouette with Parallax float */}
          <ParallaxLayer speed={0.12} className="absolute right-0 top-0 bottom-0 w-72 pointer-events-none select-none overflow-hidden flex items-center justify-end">
            <svg viewBox="0 0 200 300" className="w-64 h-full text-white opacity-[0.06] fill-current animate-float-slow">
              <path d="M120,40 C150,10 180,30 190,70 C200,110 170,160 130,170 C90,180 80,130 90,90 Z" />
              <path d="M70,140 C100,100 150,110 160,150 C170,190 130,230 90,220 C50,210 50,170 70,140 Z" />
              <path d="M100,210 C130,180 170,200 170,240 C170,280 130,300 90,290 C60,280 70,240 100,210 Z" />
            </svg>
          </ParallaxLayer>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

            {/* Left Column: Heading, subtitle, and CTA */}
            <div className="lg:col-span-5 space-y-4">
              {/* Orange bullet + Our Commitment */}
              <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider text-teal-100 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#f28e63] inline-block animate-ping" />
                <span>{commitment.badge}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-white tracking-tight leading-[1.15]">
                <span>{commitment.titleStart}</span>{' '}
                <span className="text-[#f28e63]">{commitment.titleHighlight}</span>
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-[13px] text-teal-100/75 leading-relaxed max-w-sm font-normal">
                {commitment.subtitle}
              </p>

              {/* Get Involved Button */}
              <div className="pt-2">
                <RippleButton
                  onClick={onGetInvolved}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs tracking-wide shadow-button hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <span>{commitment.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                </RippleButton>
              </div>
            </div>

            {/* Right Column: 3 Semi-Transparent Rounded Pillar Cards with 3D Tilt */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 text-center">
              {commitment.pillars.map((pillar) => (
                <TiltCard key={pillar.id} maxTilt={6} scale={1.03} className="h-full">
                  <div className="flex flex-col items-center justify-start p-5 sm:p-6 rounded-[1.75rem] bg-[#07241e]/60 backdrop-blur-md border border-white/10 hover:border-white/25 hover:bg-[#07241e]/80 transition-all duration-300 shadow-lg h-full group">
                    {/* Outlined circular icon with dual ring effect */}
                    <div className="w-11 h-11 rounded-full border border-teal-300/40 bg-[#0c3930]/80 flex items-center justify-center mb-3.5 shadow-inner text-[#f28e63] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {renderIcon(pillar.icon)}
                    </div>

                    {/* Pillar Label */}
                    <h4 className="text-xs sm:text-[13px] font-bold text-white tracking-tight mb-1.5 group-hover:text-peach-200 transition-colors">
                      {pillar.title}
                    </h4>

                    {/* Pillar Description */}
                    <p className="text-[10.5px] text-teal-100/70 leading-relaxed font-normal">
                      {pillar.description}
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
