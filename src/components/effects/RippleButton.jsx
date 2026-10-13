import React, { useState } from 'react';

/**
 * RippleButton: Button with click ripple micro-interaction and premium hover scaling.
 */
export default function RippleButton({
  children,
  onClick,
  className = '',
  rippleColor = 'rgba(255, 255, 255, 0.45)',
  type = 'button',
  ...props
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now() + Math.random(),
    };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);

    if (onClick) onClick(e);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] select-none ${className}`}
      {...props}
    >
      {/* Ripple elements */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none absolute rounded-full animate-ripple"
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            backgroundColor: rippleColor,
          }}
        />
      ))}
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2 w-full h-full">
        {children}
      </span>
    </button>
  );
}
