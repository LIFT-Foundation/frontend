import React from 'react';
import { BookOpen, Utensils, Users, GraduationCap, Home, Heart, Church, Sprout, ArrowRight } from 'lucide-react';
import TiltCard from '../../effects/TiltCard';

export default function CauseCard({ cause, onLearnMore }) {
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
    <TiltCard maxTilt={6} scale={1.02} className="h-full">
      <div className="bg-white rounded-[1.75rem] overflow-hidden border border-gray-100/90 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-gray-200/80 transition-all duration-300 flex flex-col h-full group">
        {/* Top Image Container */}
        <div className="relative aspect-[16/10] w-full bg-gray-100 overflow-hidden">
          <img
            src={cause.image}
            alt={cause.title}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Floating Center Badge overlapping border */}
        <div className="relative -mt-5 flex justify-center z-20">
          <div className={`w-10 h-10 rounded-full ${cause.badgeBg} flex items-center justify-center shadow-md border-[3px] border-white group-hover:scale-115 group-hover:rotate-6 transition-all duration-300`}>
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
          <div className="pt-3 mt-2 flex items-center justify-center">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                if (onLearnMore) onLearnMore(cause);
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm group/btn cursor-pointer ${
                cause.btnColor || 'bg-gray-100 text-gray-700'
              }`}
            >
              <span>Learn More</span>
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
