import React from 'react';
import uniqid from 'uniqid';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';

type OverProps = {
  data: { src: string }[];
  foreground: boolean;
};
function Over({ data, foreground }: OverProps) {
  return (
    <div
      className={
        foreground
          ? 'w-full h-[98%] overflow-scroll absolute z-20'
          : 'w-full h-[98%] oveflow-hidden z-20'
      }
    >
      <div className='justify-evenly justify-items-center content-evenly items-center grid grid-cols-3 gap-[1%]'>
        {data.map((image) => (
          <motion.div
            animate={foreground ? { scale: 1 } : { scale: 0.9 }}
            key={uniqid()}
            className={'shadow-lg shadow-black w-fit h-fit'}
          >
            {foreground ? (
              <></>
            ) : (
              <div className='h-full w-full absolute top-0 bg-[rgba(0,0,0,.4)] z-30'></div>
            )}
            <Image src={image.src} alt='hobby image' height={200} width={200} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Over;
