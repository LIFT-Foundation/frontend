import React, { useState } from 'react';
import { Check, Mail } from 'lucide-react';
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
    }, 4000);
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-5xl mx-auto">
      <div className="bg-[#fbebe1] rounded-[2.5rem] p-8 sm:p-12 text-center border border-peach-200/60 shadow-sm">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
          {newsletter.title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mt-2 max-w-md mx-auto">
          {newsletter.subtitle}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <div className="relative w-full">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={newsletter.placeholder}
              className="w-full px-5 py-3 text-xs sm:text-sm rounded-full bg-white border border-peach-200 focus:border-peach-500 focus:ring-2 focus:ring-peach-300/40 outline-none text-gray-800 placeholder:text-gray-400 shadow-sm transition-all"
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-7 py-3 rounded-full bg-teal-950 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow transition-all duration-200 flex-shrink-0 flex items-center justify-center gap-2"
          >
            {subscribed ? (
              <>
                <Check className="w-4 h-4" />
                <span>Subscribed!</span>
              </>
            ) : (
              <span>{newsletter.buttonText}</span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
