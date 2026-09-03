import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character: React.FC<{ char: string; progress: any; range: [number, number] }> = ({
  char,
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[#D7E2EA]">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charIndex = 0;
  const totalChars = text.length;

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] mx-auto text-[clamp(1rem,2vw,1.35rem)] ${className}`}
    >
      {words.map((word, wordIdx) => {
        const chars = word.split('');
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.25em]">
            {chars.map((char, cIdx) => {
              const start = charIndex / totalChars;
              charIndex++;
              const end = charIndex / totalChars;
              return (
                <Character
                  key={cIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
