'use client';

import { motion, useAnimation } from 'motion/react';
import { forwardRef, useEffect, useRef } from 'react';
import { cn } from "../../lib/utils";


const circleTransition = {
  duration: 0.3,
  delay: 0.1,
  opacity: { delay: 0.15 },
};

const circleVariants = {
  normal: {
    pathLength: 1,
    opacity: 1,
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
  },
};

const EarthIcon = forwardRef(({ className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start('animate');
    };

    // Start animation immediately on mount
    startAnimation();

    // Optionally, loop the animation for continuous interactivity
    const intervalId = setInterval(() => {
      startAnimation(); // Re-trigger animation for continuous effect
    }, 3000); // Change the interval duration if needed

    return () => clearInterval(intervalId); // Clean up on unmount
  }, [controls]);

  return (
    <div
      className={cn(
        `cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 `,
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="black" // Ensuring the stroke color is black
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.path
          animate={controls}
          d="M21.54 15H17a2 2 0 0 0-2 2v4.54"
          transition={{ duration: 0.7, delay: 0.5, opacity: { delay: 0.5 } }}
          variants={{
            normal: {
              pathLength: 1,
              opacity: 1,
              pathOffset: 0,
            },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
            },
          }}
        />
        <motion.path
          animate={controls}
          d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
          transition={{ duration: 0.7, delay: 0.5, opacity: { delay: 0.5 } }}
          variants={{
            normal: {
              pathLength: 1,
              opacity: 1,
              pathOffset: 0,
            },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
            },
          }}
        />
        <motion.path
          animate={controls}
          d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
          transition={{ duration: 0.7, delay: 0.5, opacity: { delay: 0.5 } }}
          variants={{
            normal: {
              pathLength: 1,
              opacity: 1,
              pathOffset: 0,
            },
            animate: {
              pathLength: [0, 1],
              opacity: [0, 1],
              pathOffset: [1, 0],
            },
          }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          transition={circleTransition}
          variants={circleVariants}
          animate={controls}
        />
      </svg>
    </div>
  );
});

EarthIcon.displayName = 'EarthIcon';

export { EarthIcon };
