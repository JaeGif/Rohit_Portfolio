import { PublicationType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import Publication from '../publicationsCarousel/Publication';

import uniqid from 'uniqid';
import CurrentFeature from './CurrentFeature';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';
import CarouselIndicator from './CarouselIndicator';
import SlidingFeature from './SlidingFeature';
type FeaturedProps = {
  data: PublicationType[];
};
function Featured({ data }: FeaturedProps) {
  return (
    <div className='flex justify-center items-start w-screen h-full'>
      <div className='flex w-full h-[90vh] justify-around items-center p-10 gap-2'>
        <SlidingFeature data={data} />
      </div>
    </div>
  );
}

export default Featured;
