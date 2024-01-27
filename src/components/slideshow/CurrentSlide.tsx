import { PublicationType } from '@/types/data';
import React from 'react';
import Publication from '../publications/Publication';

type CurrentSlideProps = {
  data: PublicationType;
};
function CurrentSlide({ data }: CurrentSlideProps) {
  return (
    <div className='h-[70vh] flex justify-center items-center'>
      <Publication data={data} />
    </div>
  );
}

export default CurrentSlide;
