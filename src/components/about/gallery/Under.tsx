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
      className={`absolute top-[5%] gap-[5%] w-full ${
        foreground ? 'z-30 overflow-scroll' : 'z-10 overflow-hidden'
      } grid grid-cols-2 justify-center items-center h-full`}
    >
      {data.map((image) => (
        <motion.div
          animate={foreground ? { scale: 1 } : { scale: 0.9 }}
          key={uniqid()}
          className={`p-2 bg-white shadow-xl w-fit`}
        >
          <Image src={image.src} alt='hobby image' height={700} width={700} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Under;
