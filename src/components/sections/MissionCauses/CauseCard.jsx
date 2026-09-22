import React from 'react';
import { BookOpen, Droplets, Home, Activity } from 'lucide-react';

export default function CauseCard({ cause }) {
  // Map icon name to Lucide component
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'book':
        return <BookOpen className="w-5 h-5 text-white stroke-[2.2]" />;
      case 'droplet':
        return <Droplets className="w-5 h-5 text-white stroke-[2.2]" />;
      case 'home':
        return <Home className="w-5 h-5 text-white stroke-[2.2]" />;
      case 'activity':
        return <Activity className="w-5 h-5 text-white stroke-[2.2]" />;
      default:
        return <BookOpen className="w-5 h-5 text-white" />;
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group">
      {/* Card Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={cause.image}
          alt={cause.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Floating Center Badge */}
      <div className="relative -mt-6 flex justify-center z-10">
        <div className={`w-12 h-12 rounded-full ${cause.badgeBg} flex items-center justify-center shadow-md border-4 border-white group-hover:scale-110 transition-transform duration-300`}>
          {renderIcon(cause.badgeIcon)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-3 text-center flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-base font-bold text-gray-900 group-hover:text-teal-900 transition-colors">
            {cause.title}
          </h4>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed px-1">
            {cause.description}
          </p>
        </div>
      </div>
    </div>
  );
}
