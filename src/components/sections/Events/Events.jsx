import React from 'react';
import { ArrowRight } from 'lucide-react';
import EventCard from './EventCard';
import { siteData } from '../../../data/content';

export default function Events() {
  const { events } = siteData;

  return (
    <section id="events" className="py-14 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-teal-800 uppercase mb-1">
            <span className="w-5 h-[1.5px] bg-[#f28e63] inline-block" />
            <span>{events.badge}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-xl">
            {events.subtitle}
          </p>
        </div>

        <div>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-semibold text-xs tracking-wide transition-all duration-200"
          >
            <span>{events.cta}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3 Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {events.items.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
