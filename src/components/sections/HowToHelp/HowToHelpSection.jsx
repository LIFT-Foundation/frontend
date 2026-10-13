import React from 'react';
import { Heart, BookOpen, Utensils, Building, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import TiltCard from '../../effects/TiltCard';
import RippleButton from '../../effects/RippleButton';

export default function HowToHelpSection({ onDonateClick }) {
  const { howToHelp } = siteData;

  const renderIcon = (id) => {
    const props = { className: "w-6 h-6 text-white stroke-[2.2]" };
    switch (id) {
      case 'sponsor-child':
        return <Heart {...props} />;
      case 'support-edu':
        return <BookOpen {...props} />;
      case 'provide-meal':
        return <Utensils {...props} />;
      case 'support-centre':
        return <Building {...props} />;
      default:
        return <Heart {...props} />;
    }
  };

  return (
    <section id="get-involved" className="py-16 sm:py-24 bg-[#faf9f6] relative overflow-hidden scroll-mt-20">
      <div id="how-to-help" className="relative -top-24 invisible" />
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peach-100 text-[11px] font-semibold text-[#ea580c] mb-3">
              <Heart className="w-3.5 h-3.5 fill-[#ea580c] animate-heartbeat" />
              <span>{howToHelp.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              {howToHelp.title}
            </h2>

            <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed">
              {howToHelp.subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with 3D Tilt & Staggered ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howToHelp.ways.map((way, idx) => (
            <ScrollReveal key={way.id} direction="up" delay={150 + idx * 100} className="h-full">
              <TiltCard maxTilt={6} scale={1.02} className="h-full">
                <div className="bg-white rounded-3xl p-6 border border-gray-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-gray-200 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 ${
                      idx === 0 ? 'bg-[#ea580c]' : idx === 1 ? 'bg-[#0d7a64]' : idx === 2 ? 'bg-[#b81d68]' : 'bg-[#6d44b8]'
                    }`}>
                      {renderIcon(way.id)}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-900 transition-colors mb-2">
                      {way.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed mb-6">
                      {way.description}
                    </p>
                  </div>

                  <div>
                    <RippleButton
                      onClick={onDonateClick}
                      className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-[#0c3930] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm hover:shadow group/btn"
                    >
                      <span>{way.cta}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </RippleButton>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
