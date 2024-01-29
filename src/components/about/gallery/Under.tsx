import React from 'react';
import Image from 'next/image';
import uniqid from 'uniqid';
import { motion, useScroll } from 'framer-motion';
type UnderProps = {
  data: { src: string }[];
};
function Under({ data }: UnderProps) {
  return (
    <motion.div className='absolute top-10 w-full -z-10 gap-[10%] flex justify-center items-center flex-wrap'>
      {data.map((image) => (
        <div key={uniqid()} className='p-1 bg-white shadow-xl'>
          <Image src={image.src} alt='hobby image' height={200} width={200} />
        </div>
      ))}
    </motion.div>
  );
}

export default Under;
