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
          ? 'absolute grid grid-cols-3 z-20 gap-[10%] p-10 pt-5 overflow-scroll'
          : 'overflow-hidden grid grid-cols-3 z-20 gap-[10%] p-10 pt-5'
      }
    >
      {data.map((image) => (
        <motion.div
          animate={foreground ? { scale: 1 } : { scale: 0.9 }}
          key={uniqid()}
          className={'p-1 bg-white shadow-xl w-fit h-fit'}
        >
          <Image src={image.src} alt='hobby image' height={500} width={500} />
        </motion.div>
      ))}
    </div>
  );
}

export default Over;
