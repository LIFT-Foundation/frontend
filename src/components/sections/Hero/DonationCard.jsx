import React, { useState } from 'react';
import { siteData } from '../../../data/content';

export default function DonationCard() {
  const [frequency, setFrequency] = useState('One Time');
  const [amount, setAmount] = useState(siteData.donationCard.defaultAmount);

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
      <div className="space-y-4">
        <div className="flex p-1 bg-gray-100 rounded-xl text-xs font-semibold text-gray-600">
          {siteData.donationCard.frequencies.map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => setFrequency(freq)}
              className={`flex-1 py-2 text-center rounded-lg transition-all duration-200 ${
                frequency === freq ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
              }`}
            >
              {freq}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {siteData.donationCard.amounts.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setAmount(val)}
              className={`py-2 text-xs font-semibold rounded-xl transition-all duration-200 border ${
                amount === val
                  ? 'bg-peach-500 text-white border-peach-500 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200'
              }`}
            >
              ${val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
