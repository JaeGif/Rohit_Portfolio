import { PublicationType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import Publication from '../publicationsCarousel/Publication';

import uniqid from 'uniqid';
import CurrentFeature from './CurrentFeature';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';
type FeaturedProps = {
  data: PublicationType[];
};
function Featured({ data }: FeaturedProps) {
  const [index, setIndex] = useState(1);

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
        <LeftChevron decIndex={handleDecIndex} />
        {data.map((publication, i) => (
          <div key={uniqid()} className=''>
            <CurrentFeature
              highlightedIndex={index}
              index={i}
              changeIndex={handleChangeIndex}
              data={publication}
            />
          </div>
        ))}
        <RightChevron incIndex={handleIncIndex} />
      </div>
    </div>
  );
}

export default Featured;
