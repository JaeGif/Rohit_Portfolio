import React from 'react';
import uniqid from 'uniqid';
import Image from 'next/image';
type OverProps = {
  data: { src: string }[];
};
function Over({ data }: OverProps) {
  return (
    <div className='sticky top-0 left-0 grid grid-cols-3 z-20 gap-[10%] p-10 pt-5'>
      {data.map((image) => (
        <div key={uniqid()} className='p-1 bg-white shadow-xl w-fit'>
          <Image
            loading='lazy'
            src={image.src}
            alt='hobby image'
            height={500}
            width={500}
          />
        </div>
      ))}
    </div>
  );
}

export default Over;
