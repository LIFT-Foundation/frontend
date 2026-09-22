import React from 'react';
import { Clock } from 'lucide-react';

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Date badge */}
        <div className="w-12 h-12 rounded-xl bg-[#fbebe3] flex flex-col items-center justify-center text-center mb-4">
          <span className="text-[9px] font-bold text-peach-600 tracking-wider uppercase leading-none">
            {event.month}
          </span>
          <span className="text-base font-extrabold text-gray-900 leading-tight">
            {event.day}
          </span>
        </div>

        {/* Event Title */}
        <h4 className="text-sm sm:text-base font-bold text-gray-900 leading-snug hover:text-teal-900 transition-colors">
          {event.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
          {event.description}
        </p>
      </div>

      {/* Time & Meta */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-gray-400 font-medium">
        <Clock className="w-3.5 h-3.5 text-peach-500" />
        <span>{event.time}</span>
      </div>
    </div>
  );
}
