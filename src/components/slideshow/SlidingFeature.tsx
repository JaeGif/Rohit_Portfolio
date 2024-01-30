import React, { use, useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import FeaturedElement from './FeaturedElement';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';
type SlidingFeatureProps = {
  data: PublicationType[];
};
function SlidingFeature({ data }: SlidingFeatureProps) {
  // scale needs to be smaller for things on eithere side of the shown element
  // opacity also needs to be smaller
  const [scope, animate] = useAnimate();
  const [current, setCurrent] = useState(Math.floor(data.length / 2));
  const [translateX, setTranslateX] = useState(0);

  const handleChangeIndex = (clickedIndex: number) => {
    if (clickedIndex === current) return;

    const distance = current - clickedIndex;

    const travel = distance * 30;
    setTranslateX((prev) => prev + travel);
    setCurrent(clickedIndex);
  };

  const incIndex = () => {
    if (current !== data.length - 1) {
      setTranslateX((prev) => prev + 30);
      setCurrent((prev) => prev + 1);
    }
  };
  const decIndex = () => {
    if (current !== 0) {
      setTranslateX((prev) => prev - 30);
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <span className='w-full h-full flex justify-center items-center border-2'>
      <div className='flex justify-center items-center w-[90vw] overflow-hidden'>
        <motion.div
          animate={{ x: `${translateX}vw` }}
          className='flex justify-center w-fit items-center'
        >
          {data.map((publication, i) => (
            <div
              onClick={() => handleChangeIndex(i)}
              className='h-full shadow-lg shadow-black w-[30vw] min-w-[30vw] border-fuchsia-200 border-2'
              key={uniqid()}
            >
              <FeaturedElement data={publication} index={i} current={current} />
            </div>
          ))}
        </motion.div>
      </div>
    </span>
  );
}

export default SlidingFeature;
