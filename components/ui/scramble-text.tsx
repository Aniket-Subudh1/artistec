'use client';
import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&';

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

interface ScrambleTextProps {
  text: string;
  delay?: number;
  duration?: number;
  className?: string;
  trigger?: boolean;
}

export function ScrambleText({
  text,
  delay = 0,
  duration = 900,
  className,
  trigger = true,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!trigger) return;
    const timeout = setTimeout(() => {
      const totalFrames = Math.round((duration / 1000) * 40); 
      let frame = 0;
      frameRef.current = setInterval(() => {
        const progress = frame / totalFrames;
        const revealedChars = Math.floor(progress * text.length);
        setDisplay(
          text
            .split('')
            .map((char, i) => {
              if (char === ' ') return ' ';
              if (i < revealedChars) return char;
              return randomChar();
            })
            .join(''),
        );
        frame++;
        if (frame > totalFrames) {
          clearInterval(frameRef.current!);
          setDisplay(text);
        }
      }, 1000 / 40);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (frameRef.current) clearInterval(frameRef.current);
    };
  }, [text, delay, duration, trigger]);

  return <span className={className}>{display}</span>;
}

interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  trigger?: boolean;
  cursor?: boolean;
}

export function Typewriter({
  text,
  delay = 0,
  speed = 38,
  className,
  trigger = true,
  cursor = true,
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!trigger) return;
    setDisplayed('');
    setDone(false);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [text, delay, speed, trigger]);

  return (
    <span className={className}>
      {displayed}
      {cursor && !done && (
        <span
          aria-hidden
          className="ml-px inline-block h-[1em] w-0.5 animate-[blink_0.8s_step-end_infinite] bg-current align-middle opacity-80"
        />
      )}
    </span>
  );
}
