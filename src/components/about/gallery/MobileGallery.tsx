import React from 'react';
import Image from 'next/image';
import uniqid from 'uniqid';
type MobileGalleryProps = {
  data: { src: string }[];
};
function MobileGallery({ data }: MobileGalleryProps) {
  return (
    <div className='flex justify-center items-center gap-5 w-fit'>
      {data.map((img) => (
        <div
          key={uniqid()}
          className='bg-white p-1 min-w-[70vw] max-h-[300px] overflow-hidden flex justify-center items-center'
        >
          <Image src={img.src} alt='gallery image' height={600} width={600} />
        </div>
      ))}
    </div>
  );
}

export default MobileGallery;
