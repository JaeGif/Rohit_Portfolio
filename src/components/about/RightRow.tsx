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
    <div className='flex md:gap-40 gap-10 overflow-hidden w-screen'>
      {data.map((img) => (
        <motion.div
          animate={{ x: 300 }}
          transition={{
            ease: 'linear',
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='hover:brightness-110 flex justify-center items-center'
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

export default RightRow;
