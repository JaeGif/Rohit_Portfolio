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
  const [width, setWidth] = useState(25);
  const [gap, setGap] = useState(1);
  const handleChangeIndex = (clickedIndex: number) => {
    if (clickedIndex === current) return;

    const distance = current - clickedIndex;

    const travel = distance * (width + gap);
    setTranslateX((prev) => prev + travel);
    setCurrent(clickedIndex);
  };

  const incIndex = () => {
    if (current !== data.length - 1) {
      setTranslateX((prev) => prev + (width + gap));
      setCurrent((prev) => prev + 1);
    }
  };
  const decIndex = () => {
    if (current !== 0) {
      setTranslateX((prev) => prev - (width + gap));
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <span className='w-full h-full flex justify-center items-center'>
      <div
        className={`flex justify-center items-center w-[${
          width * 3 + (gap / 2) * 3
        }vw] h-full overflow-hidden`}
      >
        <motion.div
          animate={{ x: `${translateX}vw` }}
          className={`flex justify-center w-fit items-center gap-[${gap}vw]`}
        >
          {data.map((publication, i) => (
            <div
              onClick={() => handleChangeIndex(i)}
              className={`h-full w-[${width}vw] min-w-[${width}vw]`}
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
