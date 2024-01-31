import { PublicationType } from '@/types/data';
import React from 'react';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
type DescriptiveContainerProps = {
  data: PublicationType;
};
function DescriptiveContainer({ data }: DescriptiveContainerProps) {
  return (
    <motion.span
      key={uniqid()}
      initial={{ y: -50, opacity: 1 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { stiffness: 100 },
      }}
      exit={{ y: -50, opacity: 0 }}
      className='w-full pl-2 pr-2 pb-1 flex md:flex-row flex-col text-center justify-between items-center gap-2 bg-slate-50'
    >
      {data.authors && (
        <span className='leading-3'>
          <p className=''>
            {data.authors.map((author, i) => (
              <em
                className={`text-[.5rem] ${
                  author === 'Rohit Mallick' ? 'font-bold' : ''
                }`}
                key={uniqid()}
              >
                {author}
                {i < data.authors.length - 1 && ', '}
              </em>
            ))}
          </p>
        </span>
      )}
      {data.src && (
        <span className='w-full flex justify-center md:w-1/4 '>
          <a href={data.src} target='_blank' rel='noreferrer' className='z-30'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className='text-xs border-2 border-black p-1 rounded-md flex justify-center items-center gap-1'
            >
              Article
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='18'
                viewBox='0 96 960 960'
                width='24'
              >
                <path
                  fill={'#000'}
                  d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
                />
              </svg>
            </motion.button>
          </a>
        </span>
      )}
    </motion.span>
  );
}

export default DescriptiveContainer;
