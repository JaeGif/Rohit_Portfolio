import React from 'react';
import Image from 'next/image';
function Headshot() {
  return (
    <div>
      <Image
        height={100}
        width={100}
        src={'/vercel.svg'}
        alt='headshot of rohit'
        aria-label='headshot of rohit'
      />
    </div>
  );
}

export default Headshot;
