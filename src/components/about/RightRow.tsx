/* eslint-disable @next/next/no-img-element */
import React from 'react';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
type RightRowProps = {
  data: { src: string; title: string }[];
};
// takes a truncated data array
function RightRow({ data }: RightRowProps) {
  return (
    <div className='flex gap-40'>
      {data.map((img) => (
        <motion.div
          animate={{ x: 1000 }}
          transition={{
            ease: 'linear',
            duration: 50,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='hover:brightness-110 hover:cursor-pointer'
          key={uniqid()}
        >
          <img
            className='h-10'
            src={img.src}
            alt={img.title}
            title={img.title}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default RightRow;
