import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import FeaturedElement from './FeaturedElement';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
type SlidingFeatureProps = {
  data: PublicationType[];
};
function SlidingFeature({ data }: SlidingFeatureProps) {
  // scale needs to be smaller for things on eithere side of the shown element
  // opacity also needs to be smaller
  const [scope, animate] = useAnimate();
  const [current, setCurrent] = useState(Math.floor(data.length / 2));
  const handleChangeIndex = (clickedIndex: number) => {
    console.log(clickedIndex, current, data.length);
    if (clickedIndex === current) return;
    if (
      clickedIndex === 0 ||
      current === 0 ||
      current === 1 ||
      clickedIndex === data.length - 1 ||
      current === data.length - 1
    ) {
      console.log('restricted');
      return setCurrent(clickedIndex);
    }
    const distance = current - clickedIndex;
    console.log('translating', distance);

    const travel = distance * 30;
    console.log(distance);
    animate(scope.current, { x: `${travel}vw` });
    setCurrent(clickedIndex);
  };
  useEffect(() => {
    console.log(current);
  }, [current]);
  return (
    <span className='w-full h-full flex justify-center items-center border-2'>
      <div className='flex justify-center items-center border-blue-500 border-2 w-[90vw]'>
        <motion.div
          ref={scope}
          className='border-2 border-red-500 flex justify-center w-fit items-center'
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
