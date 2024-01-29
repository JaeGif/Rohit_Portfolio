/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import DescriptiveContainer from './DesciptiveContainer';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { PublicationType } from '@/types/data';
type FeaturedElementProps = {
  data: PublicationType;
  index: number;
  current: number;
};
function FeaturedElement({ data, index, current }: FeaturedElementProps) {
  const [isCurrent, setIsCurrent] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  useEffect(() => {
    Math.abs(current - index) <= 2 ? setIsHidden(false) : setIsHidden(true);
    index === current ? setIsCurrent(true) : setIsCurrent(false);
  }, [index, current, isCurrent]);
  return (
    <motion.div
      className={`h-full w-full border-2 flex-col justify-center items-center cursor-pointe`}
    >
      <motion.img
        src={data.image}
        alt='placeholder'
        className={`w-full object-contain ${
          isCurrent ? 'opacity-100' : 'opacity-80'
        }`}
      />
      {/*       <AnimatePresence>
        <DescriptiveContainer data={data} />
      </AnimatePresence> */}
    </motion.div>
  );
}

export default FeaturedElement;
