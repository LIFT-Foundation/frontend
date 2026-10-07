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

  return (
    <div className="bg-white border-b border-gray-100 shadow-sm py-4 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {ribbonItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center gap-3 pt-2.5 sm:pt-0 ${
                idx === 0 ? 'pt-0' : ''
              } lg:px-3 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group`}
            >
              <div className="text-teal-800 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                {getIcon(item.icon)}
              </div>
              <div className="min-w-0">
                <h4 className="text-[12px] font-bold text-gray-900 group-hover:text-teal-900 leading-tight">
                  {item.title}
                </h4>
                <p className="text-[10px] text-gray-500 leading-tight mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
