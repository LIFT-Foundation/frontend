import React from 'react';
import { BookOpenCheck, HeartHandshake, Sparkles, CheckCircle } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function WhyEducationSection() {
  const { whyEducation } = siteData;

  return (
    <section id="why-education" className="py-16 sm:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image Collage / Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
                alt="Children studying in a classroom in Sri Lanka"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c3930]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-bold text-[#f28e63] uppercase tracking-wider">LIFT Impact Promise</span>
                <p className="text-sm font-semibold mt-1">"Education creates options, dignity, and a future beyond poverty."</p>
              </div>
            </div>

            {/* Floating Stat Badge */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-extrabold text-gray-900">100% Free Access</div>
                <div className="text-[11px] text-gray-500">Books, Meals & Tutoring</div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Narrative Points */}
          <div className="lg:col-span-7 space-y-6">
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

            <div className="space-y-4 pt-2">
              {whyEducation.points.map((pt, idx) => (
                <div
                  key={pt.title}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-7 h-7 rounded-full bg-peach-100 text-[#ea580c] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="#how-to-help"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0c3930] hover:bg-[#07241e] text-white text-xs font-semibold shadow-md transition-all"
              >
                <HeartHandshake className="w-4 h-4 text-[#f28e63]" />
                <span>Support Education Today</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
