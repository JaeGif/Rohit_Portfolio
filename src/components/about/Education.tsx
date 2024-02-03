import React from 'react';
import Image from 'next/image';
function Education() {
  return (
    <div className='flex flex-col p-10'>
      <div className='flex justify-evenly flex-wrap gap-10 items-center w-full'>
        <Image
          src={'/assets/home/purdueLogo.png'}
          alt='purdue'
          height={200}
          width={200}
        />

        <Image
          src={'/assets/home/clemson.png'}
          alt='clemson'
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}

export default Education;
