import React from 'react';
import EventCard from './EventCard';
import { siteData } from '../../../data/content';

export default function Events() {
  const { events } = siteData;

  return (
    <section id="events" className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {events.title}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xl">
            {events.subtitle}
          </p>
        </div>

        <div>
          <button
            type="button"
            className="px-5 py-2 rounded-full border border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-semibold text-xs tracking-wide transition-all duration-200"
          >
            {events.cta}
          </button>
        </div>
      </div>

      {/* Content Layout: 3 Events and Volunteers Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: 3 Event Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {events.items.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Right Side: Featured Volunteer Photo Banner */}
        <div className="lg:col-span-4 relative rounded-2xl overflow-hidden min-h-[220px] lg:min-h-full group shadow-sm border border-gray-100">
          <img
            src={events.featuredImage}
            alt="Volunteers organizing food packages"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-transparent to-transparent flex items-end p-5">
            <span className="text-xs font-semibold text-white/90 bg-teal-900/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
              Community Action in Progress
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
