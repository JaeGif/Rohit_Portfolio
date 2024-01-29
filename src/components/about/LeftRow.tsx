/* eslint-disable @next/next/no-img-element */
import React from 'react';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
type LeftRowProps = {
  data: { src: string; title: string }[];
};
// takes a truncated data array
function LeftRow({ data }: LeftRowProps) {
  return (
    <div className='flex gap-40 overflow-hidden w-screen'>
      {data.map((img) => (
        <motion.div
          animate={{ x: -500 }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='hover:brightness-110 hover:cursor-pointer'
          key={uniqid()}
        >
          <img
            className='w-48 object-contain'
            src={img.src}
            alt={img.title}
            title={img.title}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default LeftRow;
