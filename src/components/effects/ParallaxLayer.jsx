import React, { useEffect, useRef, useState } from 'react';

/**
 * ParallaxLayer: Offsets children elements relative to scroll speed
 * creating multi-layered 3D depth.
 */
export default function ParallaxLayer({
  children,
  speed = 0.15, // positive moves slower/with scroll, negative moves opposite
  className = '',
  style = {},
  ...props
}) {
  const [offsetY, setOffsetY] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (elementRef.current) {
            const rect = elementRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Only calculate when element is near viewport
            if (rect.top < viewportHeight && rect.bottom > 0) {
              const distanceFromCenter = rect.top - viewportHeight / 2;
              setOffsetY(distanceFromCenter * speed);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        ...style,
        transform: `translate3d(0, ${offsetY.toFixed(1)}px, 0)`,
        willChange: 'transform',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
