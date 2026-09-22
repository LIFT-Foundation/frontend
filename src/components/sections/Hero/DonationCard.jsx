import React, { useState } from 'react';
import { ShieldCheck, ChevronDown, Check } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function DonationCard() {
  const [frequency, setFrequency] = useState('One Time');
  const [amount, setAmount] = useState(siteData.donationCard.defaultAmount);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCause, setSelectedCause] = useState('Select Cause');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div id="donation-card" className="w-full max-w-[390px] bg-white rounded-3xl p-6 sm:p-7 shadow-float border border-white/60 relative z-20 text-gray-800">
      {/* Card Header */}
      <div className="text-center sm:text-left mb-5">
        <h3 className="text-xl font-bold tracking-tight text-gray-900">
          {siteData.donationCard.title}
        </h3>
        <p className="text-xs text-gray-500 mt-1">
          {siteData.donationCard.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Frequency Tabs (One Time / Monthly) */}
        <div className="flex p-1 bg-gray-100 rounded-xl text-xs font-semibold text-gray-600">
          {siteData.donationCard.frequencies.map((freq) => (
            <button
              key={freq}
              type="button"
              onClick={() => setFrequency(freq)}
              className={`flex-1 py-2 text-center rounded-lg transition-all duration-200 ${
                frequency === freq
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'hover:text-gray-900 text-gray-500'
              }`}
            >
              {freq}
            </button>
          ))}
        </div>

        {/* Preset Amounts Grid */}
        <div className="grid grid-cols-4 gap-2">
          {siteData.donationCard.amounts.map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => setAmount(val)}
              className={`py-2 text-xs font-semibold rounded-xl transition-all duration-200 border ${
                amount === val
                  ? 'bg-peach-500 text-white border-peach-500 shadow-sm'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-peach-300 hover:bg-peach-50/50'
              }`}
            >
              ${val}
            </button>
          ))}
        </div>

        {/* Full Name Input */}
        <div className="space-y-1">
          <label className="block text-[11px] font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-peach-500 focus:ring-2 focus:ring-peach-200 outline-none transition-all placeholder:text-gray-400 bg-gray-50/40"
          />
        </div>

        {/* Email Address Input */}
        <div className="space-y-1">
          <label className="block text-[11px] font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-peach-500 focus:ring-2 focus:ring-peach-200 outline-none transition-all placeholder:text-gray-400 bg-gray-50/40"
          />
        </div>

        {/* Select Cause Dropdown */}
        <div className="space-y-1 relative">
          <label className="block text-[11px] font-semibold text-gray-700">
            Select Cause
          </label>
          <div className="relative">
            <select
              value={selectedCause}
              onChange={(e) => setSelectedCause(e.target.value)}
              className="w-full appearance-none px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:border-peach-500 focus:ring-2 focus:ring-peach-200 outline-none transition-all bg-gray-50/40 text-gray-700 cursor-pointer pr-8"
            >
              {siteData.donationCard.causes.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* Submit Donate Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl bg-peach-500 hover:bg-peach-600 text-white font-semibold text-sm shadow-button hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 mt-2"
        >
          {isSubmitted ? (
            <>
              <Check className="w-4 h-4" />
              <span>Thank You for Donating!</span>
            </>
          ) : (
            <span>Donate Now</span>
          )}
        </button>

        {/* Security / Trust note */}
        <div className="pt-1 flex items-center justify-center gap-1.5 text-[11px] text-gray-500 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-peach-500" />
          <span>{siteData.donationCard.securityNote}</span>
        </div>
      </form>
    </div>
  );
}
