import React, { useState } from 'react';
import { motion } from 'framer-motion';
import FeaturedElement from './FeaturedElement';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';
import useMediaQuery from '@/hooks/useMediaQuery';

type SlidingFeatureProps = {
  data: PublicationType[];
};
function SlidingFeature({ data }: SlidingFeatureProps) {
  // scale needs to be smaller for things on eithere side of the shown element
  // opacity also needs to be smaller
  const isMobile = useMediaQuery('(max-width: 768px)');

  const isEven = data.length % 2 === 0;

  const [current, setCurrent] = useState(
    isEven ? 0 : Math.floor(data.length / 2)
  );
  const [translateX, setTranslateX] = useState(
    isEven ? (isMobile ? 75 : 25) : 0
  );
  const width = isMobile ? 75 : 25;
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
    <span
      className={
        isMobile
          ? 'w-full h-full flex justify-center items-center gap-1'
          : 'w-full h-full flex justify-center items-center gap-5'
      }
    >
      <LeftChevron
        shown={current > 0 ? 'visible' : 'invisible'}
        decIndex={decIndex}
      />
      <div
        className={
          'flex justify-center items-center w-[75vw] h-full bg-slate-200 border-4 border-slate-200 rounded-xl overflow-hidden'
        }
      >
        <motion.div
          animate={{ x: `${translateX}vw` }}
          className={`flex ${
            isEven ? 'justify-start' : 'justify-center'
          } w-full items-center`}
        >
          {data.map((publication, i) => (
            <div
              onClick={() => handleChangeIndex(i)}
              className={
                isMobile
                  ? `h-full w-[75vw] min-w-[75vw]`
                  : `h-full w-[25vw] min-w-[25vw]`
              }
              key={uniqid()}
            >
              <FeaturedElement data={publication} index={i} current={current} />
            </div>
          ))}
        </motion.div>
      </div>
      <RightChevron
        shown={current < data.length - 1 ? 'visible' : 'invisible'}
        incIndex={incIndex}
      />
    </span>
  );
}

export default SlidingFeature;
