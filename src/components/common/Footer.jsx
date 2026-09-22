import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { siteData } from '../../data/content';

export default function Footer({ onDonateClick }) {
  const { footer, brand } = siteData;

  const renderSocialIcon = (name) => {
    switch (name) {
      case 'facebook':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        );
      case 'twitter':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      case 'instagram':
        return (
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-teal-900 text-white mt-12 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-teal-800/70">
          
          {/* Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2.5 group inline-flex">
              <div className="w-9 h-9 rounded-full bg-teal-800 border border-teal-600/50 flex items-center justify-center text-peach-400 group-hover:scale-105 transition-transform duration-200">
                <HeartHandshake className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white">
                  {brand.name}
                </span>
                <span className="text-[10px] tracking-wider uppercase text-teal-300 font-medium -mt-1">
                  {brand.subtitle}
                </span>
              </div>
            </a>

            <p className="text-xs text-teal-200/80 leading-relaxed max-w-xs font-normal">
              {footer.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {footer.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="w-8 h-8 rounded-full bg-teal-800/80 border border-teal-700/60 flex items-center justify-center text-teal-200 hover:text-white hover:bg-peach-500 hover:border-peach-500 transition-all duration-200"
                >
                  {renderSocialIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Column 1: Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {footer.columns[0].title}
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-200/80">
              {footer.columns[0].links.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Column 2: Our Causes */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {footer.columns[1].title}
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-200/80">
              {footer.columns[1].links.map((item) => (
                <li key={item}>
                  <a href="#causes" className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Column 3: Support */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {footer.columns[2].title}
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-200/80">
              {footer.columns[2].links.map((item) => (
                <li key={item}>
                  {item === 'Donate Now' ? (
                    <button
                      type="button"
                      onClick={onDonateClick}
                      className="hover:text-peach-400 transition-colors text-left font-semibold text-peach-300"
                    >
                      {item}
                    </button>
                  ) : (
                    <a href="#" className="hover:text-white transition-colors">
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center text-xs text-teal-300/60">
          <p>{brand.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
