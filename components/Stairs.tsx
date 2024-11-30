import { animate, motion } from 'framer-motion';
import React from 'react';

// variants
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'], // Corrected exit variant
  },
};

// calculate reverse index
const reverseIndex = (index: number) => {
  const totalStep = 6; // number of steps
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs */}
      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1, // Added delay based on reverse index
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
