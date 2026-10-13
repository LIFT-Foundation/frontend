import React, { useEffect, useRef, useState } from 'react';

/**
 * CountUp: Smoothly animates numbers from 0 up to end value when scrolled into view.
 */
export default function CountUp({
  end,
  duration = 1800,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const domRef = useRef(null);

  // Extract numeric part from string or number (e.g., "331" or "10,000" or 25)
  const numericEnd = typeof end === 'number' ? end : parseInt(String(end).replace(/[^0-9]/g, ''), 10) || 0;

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setCount(numericEnd);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const el = domRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [numericEnd, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic: 1 - pow(1 - x, 3)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * numericEnd);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, numericEnd, duration]);

  const formattedCount = count.toLocaleString();

  return (
    <span ref={domRef} className={className}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
}
