/* eslint-disable @next/next/no-img-element */
import { PublicationType } from '@/types/data';
import React from 'react';
type PublicationProps = {
  data: PublicationType;
};
// image and truncated title revealled normally
// hover reveals full title, authors, venue, and link
function Publication({ data }: PublicationProps) {
  return (
    <div className='w-full h-full'>
      <img src={data.image} alt='placeholder' className='w-full' />
    </div>
  );
}

export default Publication;
