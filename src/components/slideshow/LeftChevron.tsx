import React from 'react';
import { motion } from 'framer-motion';
type LeftChevronProps = {
  decIndex: Function;
};
function LeftChevron({ decIndex }: LeftChevronProps) {
  return (
    <motion.div
      whileHover={{ transform: 'translateX(-10px)' }}
      onClick={() => {
        decIndex();
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
          fill='#000'
          d='M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z'
        />
      </svg>
    </motion.div>
  );
}

export default LeftChevron;
