import React from 'react';
import SectionBadge from '../../common/SectionBadge';
import DonationCard from './DonationCard';
import { siteData } from '../../../data/content';

export default function Hero({ onExploreCauses }) {
  const scrollToDonation = () => {
    const el = document.getElementById('donation-card');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-teal-900 text-white pt-10 pb-28 md:pb-36 lg:pb-44 overflow-hidden">
      {/* Background Subtle Radial Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-700/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-peach-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-4 space-y-6">
            <SectionBadge variant="hero">
              {siteData.hero.badge}
            </SectionBadge>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12] text-white">
              {siteData.hero.title[0]} <br />
              {siteData.hero.title[1]} <br />
              {siteData.hero.title[2]}
            </h1>

            <p className="text-sm sm:text-base text-teal-100/80 max-w-sm leading-relaxed font-normal">
              {siteData.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={scrollToDonation}
                className="px-6 py-3 rounded-full bg-peach-500 hover:bg-peach-600 text-white font-semibold text-xs sm:text-sm shadow-button hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                {siteData.hero.primaryCta}
              </button>
              <a
                href="#causes"
                onClick={onExploreCauses}
                className="px-6 py-3 rounded-full border border-teal-600/70 hover:border-teal-400 bg-teal-800/20 hover:bg-teal-800/50 text-white font-medium text-xs sm:text-sm backdrop-blur-sm transition-all duration-200"
              >
                {siteData.hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Center Column: Warm Children Photo */}
          <div className="lg:col-span-4 flex justify-center items-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-teal-800/40 group">
              <img
                src={siteData.hero.image}
                alt="Children Smiling with Hope"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              {/* Soft overlay gradient matching the teal background */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Column: Make a Donation Card */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <DonationCard />
          </div>

        </div>
      </div>

      {/* Curved Bottom Wave SVG Divider matching the template */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative block w-full h-12 sm:h-16 md:h-20 lg:h-24 preserve-3d"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C320,110 500,120 720,80 C980,30 1200,20 1440,70 L1440,120 L0,120 Z"
            fill="#faf9f6"
          />
        </svg>
      </div>
    </section>
  );
}
