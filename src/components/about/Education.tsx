import React from 'react';
import Image from 'next/image';
function Education() {
  return (
    <div className='flex flex-col'>
      <h1 className='pt-10 pb-10'>Education</h1>
      <div className='flex flex-col justify-center items-center gap-5 w-full'>
        <span className='flex justify-between items-center w-full flex-wrap'>
          <Image
            src={'/assets/home/purdueLogo.png'}
            alt='purdue'
            height={200}
            width={200}
          />
          <p>
            I did my undergrad at{' '}
            <em className='not-italic text-yellow-500'>Purdue University </em>
            where I studied{' '}
            <em className='not-italic text-yellow-500'>Computer Stuff</em>
          </p>
        </span>
        <span className='flex justify-between items-center w-full flex-wrap'>
          <p>
            I went to graduate school at{' '}
            <em className='not-italic text-orange-500'>Clemson University </em>
            where I studied{' '}
            <em className='not-italic text-orange-500'>Computer Stuff</em>
          </p>
          <Image
            src={'/assets/home/clemson.png'}
            alt='clemson'
            height={200}
            width={200}
          />
        </span>
      </div>
    </div>
  );
}

export default Education;
