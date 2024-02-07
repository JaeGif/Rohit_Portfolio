import React from 'react';
import { motion } from 'framer-motion';
type LeftChevronProps = {
  decIndex: Function;
  shown: 'visible' | 'invisible';
};
import useMediaQuery from '@/hooks/useMediaQuery';

function LeftChevron({ decIndex, shown }: LeftChevronProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <motion.div
      whileHover={{ transform: 'translateX(-10px)' }}
      onClick={() => {
        decIndex();
      }}
      className={`${shown} cursor-pointer h-full flex justify-center items-center`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height={isMobile ? '32' : '48'}
        viewBox='0 -960 960 960'
        width={isMobile ? '32' : '48'}
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
