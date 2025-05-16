import React from 'react';
import Image from 'next/image';
function Headshot() {
  return (
    <div className='h-fit w-fit rounded-3xl overflow-hidden'>
      <Image
        height={300}
        width={300}
        src={'/assets/rohit_professional.jpg'}
        alt='headshot of rohit'
        aria-label='headshot of rohit'
      />
    </div>
  );
}

export default Headshot;
