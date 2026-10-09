import React from 'react';
import { BookOpen, Users, Heart, GraduationCap } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function QuickRibbon() {
  const { ribbonItems } = siteData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'book-open':
        return <BookOpen className="w-5 h-5 text-teal-800 stroke-[1.8]" />;
      case 'users':
        return <Users className="w-5 h-5 text-teal-800 stroke-[1.8]" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-teal-800 stroke-[1.8]" />;
      case 'graduation-cap':
        return <GraduationCap className="w-5 h-5 text-teal-800 stroke-[1.8]" />;
      default:
        return <Heart className="w-5 h-5 text-teal-800 stroke-[1.8]" />;
    }
  };

  // Exactly 2 sets (6 items total) so 3 items fill 100% of visible screen width
  const displayItems = [...ribbonItems, ...ribbonItems];

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm py-4 relative z-20 overflow-hidden">
      <style>{`
        @keyframes marqueeSlowLoop {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-ribbon-slow {
          display: flex;
          width: 200%;
          animation: marqueeSlowLoop 36s linear infinite;
        }
        .animate-ribbon-slow:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-2 sm:px-6 overflow-hidden">
        <div className="animate-ribbon-slow flex items-center">
          {displayItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-1/8 min-w-[240px] flex-shrink-0 px-2 sm:px-4 flex items-center justify-center cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-teal-50/80 border border-teal-100 flex items-center justify-center text-teal-800 flex-shrink-0 group-hover:scale-110 group-hover:bg-[#fdf0e8] transition-transform">
                  {getIcon(item.icon)}
                </div>
                <div className="min-w-0 pr-4 border-r border-gray-200/50">
                  <h4 className="text-[12px] sm:text-[13px] font-bold text-gray-900 group-hover:text-teal-900 leading-tight whitespace-nowrap">
                    {item.title}
                  </h4>
                  <p className="text-[10px] font-normal text-gray-500 leading-tight mt-0.5 whitespace-nowrap">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
