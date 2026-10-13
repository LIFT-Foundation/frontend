import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal: Animates children when they scroll into the viewport.
 * Supports direction ('up', 'down', 'left', 'right', 'fade', 'zoom'),
 * delay, duration, and custom threshold.
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 700,
  distance = '28px',
  threshold = 0.12,
  className = '',
  once = true,
  style = {},
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, show immediately
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && domRef.current) {
            observer.unobserve(domRef.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // trigger slightly before or at bottom
      }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up':
        return `translate3d(0, ${distance}, 0)`;
      case 'down':
        return `translate3d(0, -${distance}, 0)`;
      case 'left':
        return `translate3d(${distance}, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}, 0, 0)`;
      case 'zoom':
        return 'scale3d(0.94, 0.94, 1)';
      case 'fade':
      default:
        return 'none';
    }
  };

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
