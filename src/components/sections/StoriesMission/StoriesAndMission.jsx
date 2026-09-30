import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function StoriesAndMission({ onBecomeVolunteer, onDonateClick }) {
  const { stories, joinMission } = siteData.storiesAndMission;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        
        {/* Left: Stories of Hope Overview */}
        <div className="lg:col-span-3 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {stories.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            {stories.subtitle}
          </p>
          <div className="pt-1">
            <button
              type="button"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <span>{stories.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Center: Dinuthi Testimonial Card */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-sm relative flex items-center gap-4">
          <img
            src={stories.testimonial.avatar}
            alt={stories.testimonial.author}
            className="w-14 h-14 rounded-full object-cover border-2 border-teal-800 flex-shrink-0"
            loading="lazy"
          />
          <div className="flex-1 pr-6">
            <p className="font-serif italic text-xs sm:text-[13px] text-gray-700 leading-relaxed">
              "{stories.testimonial.quote}"
            </p>
            <div className="mt-2 text-xs">
              <span className="font-bold text-gray-900">{stories.testimonial.author}</span>
              <span className="text-[11px] text-gray-400 block -mt-0.5">{stories.testimonial.location}</span>
            </div>
          </div>
          {/* Subtle Carousel Next Button icon */}
          <div className="absolute right-4 w-7 h-7 rounded-full border border-gray-100 bg-gray-50 text-gray-400 flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Right: Join Our Mission Dual CTA */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
            {joinMission.title}
          </h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            {joinMission.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              type="button"
              onClick={onBecomeVolunteer}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <span>{joinMission.volunteerBtn}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
            <button
              type="button"
              onClick={onDonateClick}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#f28e63] hover:bg-[#ea7849] text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <span>{joinMission.donateBtn}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
