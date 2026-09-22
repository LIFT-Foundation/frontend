import React from 'react';
import { siteData } from '../../../data/content';

export default function CallToAction({ onJoinVolunteer, onDonateClick }) {
  const { callToAction } = siteData;

  return (
    <section id="volunteer" className="py-16 sm:py-20 px-4 sm:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
          {callToAction.title}
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
          {callToAction.subtitle}
        </p>
      </div>

      {/* 2 Dual Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: Volunteer */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-teal-900 transition-colors">
              {callToAction.cards[0].title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              {callToAction.cards[0].description}
            </p>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={onJoinVolunteer}
              className="px-6 py-2.5 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200"
            >
              {callToAction.cards[0].buttonText}
            </button>
          </div>
        </div>

        {/* Card 2: Donate */}
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between text-left group">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-teal-900 transition-colors">
              {callToAction.cards[1].title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
              {callToAction.cards[1].description}
            </p>
          </div>
          <div className="mt-6">
            <button
              type="button"
              onClick={onDonateClick}
              className="px-6 py-2.5 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs tracking-wide shadow-sm hover:shadow transition-all duration-200"
            >
              {callToAction.cards[1].buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
