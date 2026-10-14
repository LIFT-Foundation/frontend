import React, { useState, useEffect } from 'react';

/**
 * Typewriter: Types out letters dynamically with deletion and looping effect.
 */
export default function Typewriter({
  words = [],
  typingSpeed = 85,
  deletingSpeed = 45,
  delayBetweenWords = 2200,
  loop = true,
  className = '',
  cursorClassName = 'text-[#f28e63]',
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;

    const fullWord = words[currentWordIndex % words.length];

    if (!loop && currentText === fullWord) {
      return;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        const nextText = fullWord.substring(0, currentText.length + 1);
        setCurrentText(nextText);
        if (nextText === fullWord) {
          if (!loop) return;
          // Pause at end of word before backspacing
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting backward
        const prevText = fullWord.substring(0, currentText.length - 1);
        setCurrentText(prevText);
        if (prevText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords, loop]);

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{currentText}</span>
      <span
        className={`inline-block w-[3px] h-[0.9em] ml-1 bg-current rounded-full animate-pulse self-center ${cursorClassName}`}
        aria-hidden="true"
      />
    </span>
  );
}
