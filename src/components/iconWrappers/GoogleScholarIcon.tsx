import React from 'react';
import { motion } from 'framer-motion';
type GoogleScholarProps = {
  height?: number;
};
function GoogleScholar({ height = 32 }: GoogleScholarProps) {
  return (
    <motion.svg
      whileHover={{ y: -5, scale: 1.15 }}
      className='hover:cursor-pointer'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 128 128'
      height={height}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
        <path fill='#4285f4' d='M256 411.12L0 202.667 256 0z' />
        <path fill='#356ac3' d='M256 411.12l256-208.453L256 0z' />
        <circle fill='#a0c3ff' cx='256' cy='362.667' r='149.333' />
        <path
          fill='#76a7fa'
          d='M121.037 298.667c23.968-50.453 75.392-85.334 134.963-85.334s110.995 34.881 134.963 85.334H121.037z'
        />
      </svg>
    </motion.svg>
  );
}

export default GoogleScholar;
