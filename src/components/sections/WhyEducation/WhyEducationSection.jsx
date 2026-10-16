import React from 'react';
import { BookOpenCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';
import ScrollReveal from '../../effects/ScrollReveal';
import RippleButton from '../../effects/RippleButton';
import ParallaxLayer from '../../effects/ParallaxLayer';

export default function WhyEducationSection() {
  const { whyEducation } = siteData;

  const scrollToHelp = () => {
    const el = document.getElementById('how-to-help');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="why-education" className="py-16 sm:py-24 bg-[#faf9f6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage / Visual with Parallax Float */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={150}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
                <img
                  src="/images/why-education-classroom.jpg"
                  alt="Teacher guiding students in a classroom in Sri Lanka"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3930]/95 via-[#0c3930]/40 to-transparent flex flex-col justify-end p-6 sm:p-7 text-white">
                  <span className="text-[11px] font-bold text-[#f28e63] uppercase tracking-wider">{whyEducation.commitment?.badge || 'OUR COMMITMENT'}</span>
                  <p className="text-sm sm:text-base font-bold mt-1 text-white">{whyEducation.commitment?.title || 'Making Education More Accessible'}</p>
                  <p className="text-[11px] text-teal-100/80 mt-1 leading-relaxed max-w-sm">{whyEducation.commitment?.description || 'Planned educational support through learning resources and academic guidance, subject to available funding and resources.'}</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Floating Glassmorphic Stat Badge with Parallax */}
            <ParallaxLayer speed={-0.1} className="absolute -bottom-6 -right-4 sm:right-6 z-20">
              <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/80 flex items-center gap-3 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <BookOpenCheck className="w-5 h-5 text-teal-900" />
                </div>
                <div>
                  <div className="text-lg font-extrabold text-gray-900">100% Free Access</div>
                  <div className="text-[11px] text-gray-500">Books, Meals & Tutoring</div>
                </div>
              </div>
            </ParallaxLayer>
          </div>

          {/* Right Column: Key Narrative Points */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right" delay={100}>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2f3ee] text-[11px] font-semibold text-[#0d7a64] mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{whyEducation.badge}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  {whyEducation.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-3 leading-relaxed">
                  {whyEducation.subtitle}
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-4 pt-2">
              {whyEducation.points.map((pt, idx) => (
                <ScrollReveal key={pt.title} direction="right" delay={200 + idx * 100}>
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-xl hover:-translate-y-1 hover:border-teal-100 transition-all duration-300 group">
                    <div className="w-7 h-7 rounded-full bg-peach-100 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs group-hover:scale-110 group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-200">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-teal-900 transition-colors">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={500}>
              <div className="pt-2 flex items-center gap-3">
                <RippleButton
                  onClick={scrollToHelp}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0c3930] hover:bg-[#07241e] text-white text-xs font-semibold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <HeartHandshake className="w-4 h-4 text-[#f28e63]" />
                  <span>Support Education Today</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </RippleButton>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
