import React, { useState } from 'react';
import { Mail, ArrowRight, Check } from 'lucide-react';
import { siteData } from '../../../data/content';

export default function Newsletter() {
  const { newsletter } = siteData;
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3500);
  };

  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="bg-[#fce9df] rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 lg:p-10 border border-peach-200/50 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        
        {/* Left Side: Mail Icon + Title & Subtitle */}
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#ea580c] text-white flex items-center justify-center flex-shrink-0 shadow-sm">
            <Mail className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              {newsletter.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              {newsletter.subtitle}
            </p>
          </div>
        </div>

        {/* Right Side: Horizontal Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-2.5 w-full lg:w-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={newsletter.placeholder}
            className="w-full sm:w-80 px-5 py-3 text-xs sm:text-sm rounded-full bg-white border border-transparent focus:border-peach-400 focus:ring-2 focus:ring-peach-200 outline-none text-gray-800 placeholder:text-gray-400 shadow-sm transition-all"
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 flex-shrink-0 flex items-center justify-center gap-1.5"
          >
            {subscribed ? (
              <>
                <Check className="w-4 h-4 text-peach-300" />
                <span>Subscribed!</span>
              </>
            ) : (
              <>
                <span>{newsletter.cta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

      </div>
    </section>
  );
}
