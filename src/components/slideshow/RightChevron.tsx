import React from 'react';
import { motion } from 'framer-motion';
type RightChevronProps = {
  incIndex: Function;
};
function RightChevron({ incIndex }: RightChevronProps) {
  return (
    <motion.div
      whileHover={{ transform: 'translateX(10px)' }}
      onClick={() => {
        incIndex();
      }}
      className='cursor-pointer h-full flex justify-center items-center'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='48'
        viewBox='0 -960 960 960'
        width='48'
      >
        <path
          fill='#fff'
          d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z'
        />
      </svg>
    </motion.div>
  );
}

export default RightChevron;
