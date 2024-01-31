import { PublicationType } from '@/types/data';
import React from 'react';

import SlidingFeature from './SlidingFeature';
type FeaturedProps = {
  data: PublicationType[];
};
function Featured({ data }: FeaturedProps) {
  return (
    <div className='flex justify-center items-start w-screen h-full'>
      <div className='flex w-full h-full justify-around items-center'>
        <SlidingFeature data={data} />
      </div>
    </div>
  );
}

export default Featured;
