import React, { useState } from 'react';
import Image from 'next/image';
import uniqid from 'uniqid';
import { motion, useScroll } from 'framer-motion';
type UnderProps = {
  data: { src: string }[];
  foreground: boolean;
};
function Under({ data, foreground }: UnderProps) {
  return (
    <motion.div
      className={`absolute h-[98%] gap-[1%] w-full ${
        foreground ? 'z-30 overflow-scroll' : 'z-10 overflow-hidden'
      }`}
    >
      <div className='w-full gap-[1%] grid grid-cols-2 justify-evenly justify-items-center content-evenly items-center'>
        {data.map((image) => (
          <motion.div
            animate={foreground ? { scale: 1 } : { scale: 0.9 }}
            key={uniqid()}
            className={`shadow-xl w-fit h-fit relative p-1 ${
              foreground ? 'bg-white' : 'bg-black'
            }`}
          >
            {foreground ? (
              <></>
            ) : (
              <div className='h-full w-full absolute top-0 bg-[rgba(0,0,0,.7)] z-30'></div>
            )}
            <Image
              className='max-h-[600px] w-fit object-contain'
              src={image.src}
              alt='hobby image'
              height={700}
              width={700}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Under;
