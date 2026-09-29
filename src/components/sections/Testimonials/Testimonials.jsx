import React from 'react';
import { Quote, Clock, HeartHandshake } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function Testimonials() {
  const { testimonials } = siteData;

  return (
    <section className="relative bg-teal-900 text-white py-20 sm:py-28 my-10 overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 sm:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 L1440,0 C1100,50 800,60 0,20 Z"
            fill="#faf9f6"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Side: Title & Description */}
          <div className="lg:col-span-5 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {testimonials.title}
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/80 max-w-sm leading-relaxed">
              {testimonials.subtitle}
            </p>
          </div>

          {/* Right Side: Coming Soon Card OR Real Testimonial */}
          <div className="lg:col-span-7 flex justify-end">
            {testimonials.comingSoon ? (
              /* Elegant Coming Soon State */
              <div className="w-full max-w-xl bg-teal-800/40 border border-teal-700/40 border-dashed rounded-3xl p-8 sm:p-10 text-center relative">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-teal-800/60 border border-teal-600/50 flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-peach-400 stroke-[1.8]" />
                  </div>

                  <Quote className="w-7 h-7 text-peach-400/30" />

                  <p className="text-sm text-teal-100/70 leading-relaxed italic max-w-sm">
                    {testimonials.comingSoonText}
                  </p>

                  <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-teal-300/60">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Stories coming soon — to God's glory</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Real Testimonial Card */
              <div className="w-full max-w-xl bg-teal-800/60 border border-teal-700/60 rounded-3xl p-6 sm:p-8 backdrop-blur-md relative shadow-xl">
                <Quote className="w-8 h-8 text-peach-400/30 mb-3" />

                <blockquote className="text-base sm:text-lg font-medium text-teal-50 leading-relaxed italic">
                  "{testimonials.item.quote}"
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  {testimonials.item.avatar ? (
                    <img
                      src={testimonials.item.avatar}
                      alt={testimonials.item.author}
                      className="w-11 h-11 rounded-full object-cover border-2 border-peach-400/80 shadow-md"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-teal-700 border-2 border-peach-400/80 flex items-center justify-center">
                      <span className="text-sm font-bold text-peach-300">
                        {testimonials.item.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-bold text-white">
                      {testimonials.item.author}
                    </div>
                    <div className="text-xs text-teal-300/80">
                      {testimonials.item.role}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-8 sm:h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 L1440,60 C900,10 600,0 0,40 Z"
            fill="#faf9f6"
          />
        </svg>
      </div>
    </section>
  );
}
