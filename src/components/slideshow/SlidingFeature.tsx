import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [current, setCurrent] = useState(Math.floor(data.length / 2));
  const [translateX, setTranslateX] = useState(0);
  const width = 25;
  const handleChangeIndex = (clickedIndex: number) => {
    if (clickedIndex === current) return;

    const distance = current - clickedIndex;

    const travel = distance * width;
    setTranslateX((prev) => prev + travel);
    setCurrent(clickedIndex);
  };

  const incIndex = () => {
    if (current !== data.length - 1) {
      setTranslateX((prev) => prev - width);
      setCurrent((prev) => prev + 1);
    }
  };
  const decIndex = () => {
    if (current !== 0) {
      setTranslateX((prev) => prev + width);
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <span className='w-full h-full flex justify-center items-center gap-5'>
      {current > 0 && <LeftChevron decIndex={decIndex} />}
      <div
        className={`flex justify-center items-center w-[75vw] h-full bg-slate-50 rounded-xl overflow-hidden`}
      >
        <motion.div
          animate={{ x: `${translateX}vw` }}
          className={`flex justify-center w-full items-center`}
        >
          {data.map((publication, i) => (
            <div
              onClick={() => handleChangeIndex(i)}
              className={`h-full w-[25vw] min-w-[25vw]`}
              key={uniqid()}
            >
              <FeaturedElement data={publication} index={i} current={current} />
            </div>
          ))}
        </motion.div>
      </div>
      {current < data.length - 1 && <RightChevron incIndex={incIndex} />}
    </span>
  );
}

export default SlidingFeature;
