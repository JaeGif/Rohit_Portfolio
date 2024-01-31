import React from 'react';
import { motion } from 'framer-motion';
type RightChevronProps = {
  incIndex: Function;
};
import useMediaQuery from '@/hooks/useMediaQuery';
function RightChevron({ incIndex }: RightChevronProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

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
        height={isMobile ? '32' : '48'}
        viewBox='0 -960 960 960'
        width={isMobile ? '32' : '48'}
      >
        <path
          fill='#000'
          d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z'
        />
      </svg>
    </motion.div>
  );
}

export default RightChevron;
