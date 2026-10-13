import React from 'react';
import { ArrowRight, ChevronRight, Heart } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import TiltCard from '../../effects/TiltCard';
import RippleButton from '../../effects/RippleButton';

export default function StoriesAndMission({ onBecomeVolunteer, onDonateClick }) {
  const { stories, joinMission } = siteData.storiesAndMission;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        {/* Left: Stories of Hope Overview */}
        <div className="lg:col-span-3 space-y-3">
          <ScrollReveal direction="left" delay={100}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {stories.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mt-1">
              {stories.subtitle}
            </p>
            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs transition-all shadow-sm hover:shadow group"
              >
                <span>{stories.cta}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Center: Dinuthi Testimonial Card with 3D Tilt */}
        <div className="lg:col-span-5">
          <ScrollReveal direction="up" delay={200}>
            <TiltCard maxTilt={5} scale={1.02}>
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-300 relative flex items-center gap-4 group">
                <img
                  src={stories.testimonial.avatar}
                  alt={stories.testimonial.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#0c3930] flex-shrink-0 group-hover:scale-105 transition-transform duration-300 shadow-sm"
                  loading="lazy"
                />
                <div className="flex-1 pr-6">
                  <p className="font-serif italic text-xs sm:text-[13px] text-gray-700 leading-relaxed">
                    "{stories.testimonial.quote}"
                  </p>
                  <div className="mt-2 text-xs">
                    <span className="font-bold text-gray-900 group-hover:text-[#0c3930] transition-colors">{stories.testimonial.author}</span>
                    <span className="text-[11px] text-gray-400 block -mt-0.5">{stories.testimonial.location}</span>
                  </div>
                </div>
                {/* Subtle Carousel Next Button icon */}
                <div className="absolute right-4 w-7 h-7 rounded-full border border-gray-100 bg-gray-50 text-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 hover:text-gray-700 transition-colors">
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>

        {/* Right: Join Our Mission Dual CTA */}
        <div className="lg:col-span-4 space-y-3">
          <ScrollReveal direction="right" delay={300}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {joinMission.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed mt-1">
              {joinMission.subtitle}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <RippleButton
                onClick={onBecomeVolunteer}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs shadow-sm hover:shadow-lg transition-all group"
              >
                <span>{joinMission.volunteerBtn}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
              </RippleButton>
              <RippleButton
                onClick={onDonateClick}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs shadow-sm hover:shadow-lg transition-all group"
              >
                <Heart className="w-3 h-3 fill-white text-white animate-heartbeat" />
                <span>{joinMission.donateBtn}</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
              </RippleButton>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
