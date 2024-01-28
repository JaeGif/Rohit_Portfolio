import { PublicationType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import Publication from '../publicationsCarousel/Publication';

import uniqid from 'uniqid';
import CurrentFeature from './CurrentFeature';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';
import CarouselIndicator from './CarouselIndicator';
type FeaturedProps = {
  data: PublicationType[];
};
function Featured({ data }: FeaturedProps) {
  const [index, setIndex] = useState(0);

  // contains featured articles and slowly cycles through them
  const handleChangeIndex = (incIndex: number) => {
    setIndex(incIndex);
  };
  const handleDecIndex = () => {
    if (index === 0) setIndex(data.length - 1);
    else setIndex(index - 1);
  };
  const handleIncIndex = () => {
    if (index === data.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  return (
    <div className='flex justify-center items-start w-screen h-full'>
      <div className='flex w-full h-[80vh] justify-around items-center p-10 gap-2'>
        <CarouselIndicator
          length={data.length}
          data={data}
          index={index}
          options={{ vHeight: 80, description: true, absCount: 1 }}
          changeIndex={handleChangeIndex}
          handleIncIndex={handleIncIndex}
          handleDecIndex={handleDecIndex}
        />
      </div>
    </div>
  );
}

export default Featured;
