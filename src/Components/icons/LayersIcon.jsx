'use client';

import { motion, useAnimation } from 'motion/react';
import { forwardRef, useEffect, useRef } from 'react';
import { cn } from "../../lib/utils";

const defaultTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 14,
  mass: 1,
};

const LayersIcon = forwardRef(({ className, size = 28, ...props }, ref) => {
  const controls = useAnimation();
  const isControlledRef = useRef(false);

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start('firstState');
      await controls.start('secondState');
    };

    // Start animation when the component mounts
    startAnimation();

    // Optionally, if you want to continuously animate, you can use a loop here
    const intervalId = setInterval(() => {
      startAnimation(); // This will keep the animation running
    }, 3000); // Adjust the timing of animation looping (3 seconds for example)

    return () => clearInterval(intervalId); // Clean up the interval on unmount
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
        stroke="white" // Ensuring the stroke color is white
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
        <motion.path
          d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"
          variants={{
            normal: { y: 0 },
            firstState: { y: -9 },
            secondState: { y: 0 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"
          variants={{
            normal: { y: 0 },
            firstState: { y: -5 },
            secondState: { y: 0 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
      </svg>
    </div>
  );
});

LayersIcon.displayName = 'LayersIcon';

export { LayersIcon };
