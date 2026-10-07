import React from 'react';
import { BookOpen, Utensils, Users, GraduationCap, Home, Heart, Church, Sprout, ArrowRight } from 'lucide-react';

export default function CauseCard({ cause }) {
  const renderIcon = (iconName) => {
    const props = { className: "w-4 h-4 text-white stroke-[2.2]" };
    switch (iconName) {
      case 'book-open':
        return <BookOpen {...props} />;
      case 'utensils':
        return <Utensils {...props} />;
      case 'users':
        return <Users {...props} />;
      case 'graduation-cap':
        return <GraduationCap {...props} />;
      case 'home':
        return <Home {...props} />;
      case 'heart':
        return <Heart {...props} />;
      case 'church':
        return <Church {...props} />;
      case 'sprout':
        return <Sprout {...props} />;
      default:
        return <Heart {...props} />;
    }
  };

  return (
    <div className="bg-white rounded-[1.75rem] overflow-hidden border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Top Image Container */}
      <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Floating Center Badge overlapping border */}
      <div className="relative -mt-5 flex justify-center z-20">
        <div className={`w-10 h-10 rounded-full ${cause.badgeBg} flex items-center justify-center shadow-md border-[3px] border-white group-hover:scale-110 transition-transform duration-200`}>
          {renderIcon(cause.badgeIcon)}
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-2 pb-5 px-4 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-teal-900 transition-colors">
            {cause.title}
          </h3>
          {cause.tagline && (
            <span className="inline-block text-[11px] font-semibold text-[#ea580c] uppercase tracking-wider mt-0.5 mb-1">
              {cause.tagline}
            </span>
          )}
          <p className="text-xs text-gray-500 mt-1 leading-relaxed">
            {cause.description}
          </p>
        </div>

        {/* Learn More Pill Button matching exact card theme */}
        <div className="pt-2 mt-2 flex items-center justify-center">
          <a
            href="#programs"
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-semibold transition-all ${
              cause.btnColor || 'bg-gray-100 text-gray-700'
            }`}
          >
            <span>Learn More</span>
            <ArrowRight className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
