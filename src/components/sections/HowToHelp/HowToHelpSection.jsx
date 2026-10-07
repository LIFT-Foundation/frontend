import React from 'react';
import { Heart, BookOpen, Utensils, Building, ArrowRight } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function HowToHelpSection({ onDonateClick }) {
  const { howToHelp } = siteData;

  const renderIcon = (id) => {
    const props = { className: "w-6 h-6 text-white" };
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
    <section id="how-to-help" className="py-16 sm:py-24 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-peach-100 text-[11px] font-semibold text-[#ea580c] mb-3">
            <Heart className="w-3.5 h-3.5 fill-[#ea580c]" />
            <span>{howToHelp.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            {howToHelp.title}
          </h2>

          <p className="text-xs sm:text-sm text-gray-500 mt-2.5 leading-relaxed">
            {howToHelp.subtitle}
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howToHelp.ways.map((way, idx) => (
            <div
              key={way.id}
              className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-md ${
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
                <button
                  type="button"
                  onClick={onDonateClick}
                  className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-[#0c3930] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{way.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
