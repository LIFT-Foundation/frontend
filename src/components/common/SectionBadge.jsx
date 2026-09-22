import React from 'react';

export default function SectionBadge({ children, variant = 'peach', dot = false, icon }) {
  if (variant === 'hero') {
    return (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-700/60 bg-teal-800/40 text-xs font-semibold tracking-wider text-teal-100/90 uppercase backdrop-blur-sm shadow-sm">
        <span className="w-2 h-2 rounded-full border border-teal-300 inline-block" />
        <span>{children}</span>
      </div>
    );
  }

  if (variant === 'impact') {
    return (
      <div className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-teal-200/90 mb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-peach-400 inline-block" />
        <span>{children}</span>
      </div>
    );
  }

  // Default warm peach badge (like "Our Mission")
  return (
    <div className="inline-flex items-center px-4 py-1 rounded-full bg-[#fbebe3] text-peach-600 text-xs font-semibold tracking-wide mb-3">
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-peach-500 mr-2" />}
      {children}
    </div>
  );
}
