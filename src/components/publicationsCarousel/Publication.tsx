/* eslint-disable @next/next/no-img-element */
import { PublicationType } from '@/types/data';
import React from 'react';
type PublicationProps = {
  data: PublicationType;
  changeIndex?: Function;
  index?: number;
};
// image and truncated title revealled normally
// hover reveals full title, authors, venue, and link
function Publication({ data, index, changeIndex }: PublicationProps) {
  return (
    <div
      onClick={changeIndex ? () => changeIndex(index) : () => {}}
      className='w-full h-full'
    >
      <img src={data.image} alt='placeholder' className='w-full' />
    </div>
  );
}

export default Publication;
