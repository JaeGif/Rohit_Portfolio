/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import DescriptiveContainer from './DesciptiveContainer';
import { AnimatePresence, motion } from 'framer-motion';
import { PublicationType } from '@/types/data';
type FeaturedElementProps = {
  data: PublicationType;
  index: number;
  current: number;
};
function FeaturedElement({ data, index, current }: FeaturedElementProps) {
  const [isCurrent, setIsCurrent] = useState(false);
  useEffect(() => {
    console.log(index, isCurrent);
    index === current ? setIsCurrent(true) : setIsCurrent(false);
  }, [index, current, isCurrent]);
  return (
    <motion.div
      animate={{ scale: isCurrent ? 1.075 : 1 }}
      className={`relative h-full min-w-full flex-col justify-center items-center rounded-lg cursor-pointer  ${
        isCurrent
          ? 'z-10 shadow-lg overflow-hidden border-4 border-blue-300'
          : 'shadow-md overflow-hidden'
      }`}
    >
      {!isCurrent && (
        <div className='absolute top-0 left-0 h-full min-w-full bg-black opacity-[7.5%] hover:opacity-5 rounded-lg'></div>
      )}
      <motion.img
        src={data.image}
        alt='placeholder'
        className={`min-w-full object-contain`}
      />
      <AnimatePresence>
        {isCurrent && <DescriptiveContainer data={data} />}
      </AnimatePresence>
    </motion.div>
  );
}

export default FeaturedElement;
