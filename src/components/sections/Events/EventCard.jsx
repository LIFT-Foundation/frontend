import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group">
      <div>
        {/* Top Image Preview with Date Badge */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Rounded Date Badge in Top Left */}
          <div className="absolute top-2.5 left-2.5 w-11 h-11 rounded-lg bg-white/95 backdrop-blur-sm shadow-sm flex flex-col items-center justify-center text-center">
            <span className="text-[8px] font-bold text-[#ea580c] tracking-wider uppercase leading-none">
              {event.month}
            </span>
            <span className="text-sm font-extrabold text-gray-900 leading-tight">
              {event.day}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-teal-900 transition-colors">
            {event.title}
          </h3>

          <div className="mt-2.5 space-y-1 text-[11px] text-gray-500">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#f28e63]" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{event.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Arrow Action */}
      <div className="px-4 pb-3 flex justify-end">
        <div className="w-6 h-6 rounded-full bg-gray-50 group-hover:bg-peach-50 text-gray-400 group-hover:text-[#f28e63] flex items-center justify-center transition-colors">
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
}
