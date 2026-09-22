import React, { useState } from 'react';
import { siteData } from '../../../data/content';

export default function DonationCard() {
  return (
    <div id="donation-card" className="w-full max-w-[390px] bg-white rounded-3xl p-6 sm:p-7 shadow-float border border-white/60 relative z-20 text-gray-800">
      <div className="text-center sm:text-left mb-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {siteData.donationCard.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {siteData.donationCard.subtitle}
        </p>
      </div>
    </div>
  );
}
