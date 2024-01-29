import React, { useState } from 'react';
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
    if (clickedIndex === current) return;
    const distance = current - clickedIndex;
    const travel = distance * 20;
    animate(scope.current, { x: `${travel}%` });
    setCurrent(clickedIndex);
    console.log(distance, travel);
  };

  return (
    <motion.span className='w-full h-full flex justify-center items-center overflow-hidden border-2'>
      <motion.div
        ref={scope}
        className='border-2 border-red-500 flex justify-center w-full items-center'
      >
        {data.map(
          (publication, i) =>
            Math.abs(current - i) <= 2 && (
              <motion.div
                onClick={() => handleChangeIndex(i)}
                className='h-full shadow-lg shadow-black w-[20%] border-fuchsia-200 border-2'
                key={uniqid()}
              >
                <FeaturedElement
                  data={publication}
                  index={i}
                  current={current}
                />
              </motion.div>
            )
        )}
      </motion.div>
    </motion.span>
  );
}

export default SlidingFeature;
