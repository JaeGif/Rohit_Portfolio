/* eslint-disable @next/next/no-img-element */

import React from 'react';
import uniqid from 'uniqid';
type MobileSCComponentProps = {
  data: { src: string; title: string }[];
};
function MobileSCComponent({ data }: MobileSCComponentProps) {
  return (
    <div className='flex flex-wrap justify-center items-center w-screen gap-8'>
      {data.map((img) => (
        <img
          key={uniqid()}
          className='w-1/3 object-contain'
          src={img.src}
          alt={img.title}
          title={img.title}
        />
      ))}
    </div>
  );
}

export default MobileSCComponent;
