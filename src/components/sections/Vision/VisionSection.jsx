import React from 'react';
import { MapPin, Globe, Building2, CheckCircle2 } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function VisionSection() {
  const { vision2030 } = siteData;

  return (
    <section id="vision" className="py-16 sm:py-24 bg-gradient-to-b from-[#0b332c] to-[#07241e] text-white relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
        <Globe className="w-[600px] h-[600px] text-teal-300 stroke-[0.5]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-900/80 border border-teal-700/60 text-[11px] font-semibold text-teal-200 uppercase tracking-widest mb-3">
            <Globe className="w-3.5 h-3.5 text-[#f28e63]" />
            <span>{vision2030.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {vision2030.title}
          </h2>

          <p className="text-xs sm:text-sm text-teal-100/80 leading-relaxed max-w-2xl mx-auto">
            {vision2030.subtitle}
          </p>
        </div>

        {/* 3 Step Expansion Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {vision2030.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="bg-teal-900/40 border border-teal-700/50 rounded-3xl p-8 text-center backdrop-blur-sm relative group hover:border-[#f28e63] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-[#f28e63]/20 border border-[#f28e63]/40 flex items-center justify-center text-[#f28e63]">
                {idx === 0 && <Globe className="w-6 h-6" />}
                {idx === 1 && <MapPin className="w-6 h-6" />}
                {idx === 2 && <Building2 className="w-6 h-6" />}
              </div>

              <div className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-tight">
                {stat.value}
              </div>

              <h3 className="text-base font-bold text-teal-100 mb-1">
                {stat.label}
              </h3>

              <p className="text-xs text-teal-200/70">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Linear Progression Bar */}
        <div className="bg-teal-950/70 border border-teal-800/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-8 h-8 text-[#f28e63] flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-white">Systematic Phase 1 Rollout Strategy</h4>
              <p className="text-xs text-teal-200/70 mt-0.5">
                Connecting divisional centres directly with local churches, qualified educators, and international partners for 100% transparency.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#how-to-help"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white text-xs font-semibold shadow-md transition-all"
            >
              Sponsor a Divisional Centre
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
