import React from 'react';
import { BookOpen, Users, Heart, GraduationCap } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function QuickRibbon() {
  const { ribbonItems } = siteData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-teal-800 stroke-[1.8]" />;
      case 'users':
        return <Users className="w-4 h-4 sm:w-5 sm:h-5 text-teal-800 stroke-[1.8]" />;
      case 'heart':
        return <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-800 stroke-[1.8]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-800 stroke-[1.8]" />;
      default:
        return <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-800 stroke-[1.8]" />;
    }
  };

  // Quadruple items so a single track is comfortably wider than any viewport (even 4K)
  const marqueeGroup = [...ribbonItems, ...ribbonItems, ...ribbonItems, ...ribbonItems];

  const scrollToPrograms = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const renderGroup = (keyPrefix, isAriaHidden = false) => (
    <div
      className="flex items-center shrink-0 animate-marquee-continuous"
      aria-hidden={isAriaHidden}
    >
      {marqueeGroup.map((item, idx) => (
        <div
          key={`${keyPrefix}-${item.id}-${idx}`}
          onClick={scrollToPrograms}
          className="flex items-center gap-3 px-6 sm:px-8 py-1 flex-shrink-0 cursor-pointer select-none group/item"
        >
          <div className="w-9 h-9 rounded-full bg-teal-50/90 border border-teal-100 flex items-center justify-center text-teal-800 flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#fdf0e8] transition-all duration-200">
            {getIcon(item.icon)}
          </div>
          <div className="min-w-0 pr-6 border-r border-gray-200/60">
            <h4 className="text-[12px] sm:text-[13px] font-bold text-gray-900 group-hover/item:text-teal-900 leading-tight whitespace-nowrap transition-colors">
              {item.title}
            </h4>
            <p className="text-[10px] font-normal text-gray-500 leading-tight mt-0.5 whitespace-nowrap">
              {item.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm py-3.5 relative z-20 overflow-hidden group">
      <style>{`
        @keyframes continuousMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
        .animate-marquee-continuous {
          display: flex;
          animation: continuousMarquee 50s linear infinite;
          will-change: transform;
        }
        .group:hover .animate-marquee-continuous {
          animation-play-state: paused;
        }
      `}</style>

      {/* Gentle Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Seamless Infinite Track */}
      <div className="flex w-max">
        {renderGroup('track-1', false)}
        {renderGroup('track-2', true)}
      </div>
    </div>
  );
}
