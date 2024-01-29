import React from 'react';
import { motion } from 'framer-motion';

function AboutLinks() {
  return (
    <nav className='flex justify-center gap-2'>
      <a href='/assets/rohit_cv.pdf' target='_blank'>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className='flex justify-center items-center gap-2 p-2 rounded-md hover:border-blue-400'
        >
          CV
          <motion.svg
            whileHover={{ scale: 1.05 }}
            xmlns='http://www.w3.org/2000/svg'
            height='18'
            viewBox='0 96 960 960'
            width='24'
          >
            <path
              fill={'#000'}
              d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
            />
          </motion.svg>
        </motion.button>
      </a>
      <motion.button
        whileHover={{ scale: 1.05 }}
        className='p-2 rounded-md hover:border-blue-400'
      >
        Contact
      </motion.button>
    </nav>
  );
}

export default AboutLinks;
