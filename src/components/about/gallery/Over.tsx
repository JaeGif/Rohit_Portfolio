import React from 'react';
import uniqid from 'uniqid';
import Image from 'next/image';
type OverProps = {
  data: { src: string }[];
};
function Over({ data }: OverProps) {
  console.log(data);
  return (
    <div className='gap-[10%] grid columns-3'>
      {data.map((image) => (
        <div key={uniqid()} className='p-1 bg-white shadow-lg'>
          <Image src={image.src} alt='hobby image' height={200} width={200} />
        </div>
      ))}
    </div>
  );
}

export default Over;
