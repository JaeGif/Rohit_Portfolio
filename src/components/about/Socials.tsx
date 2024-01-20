import React from 'react';
import Image from 'next/image';
function Socials() {
  return (
    <div className='flex justify-center items-center gap-2 p-2'>
      <a
        href='https://www.linkedin.com/in/rohit-mallick-165780165/'
        target='_blank'
        rel='noreferrer'
      >
        <Image
          src={'assets/icons/linkedin-original.svg'}
          height={36}
          width={36}
          alt='linkedin icon'
          aria-label='linkedin icon'
        />
      </a>
      <p>Other</p>
    </div>
  );
}

export default Socials;
