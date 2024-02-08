import React from 'react';
import SlideshowWrapper from '@/components/slideshow/SlideshowWrapper';
import Head from 'next/head';
function Publications() {
  return (
    <>
      <Head>
        <title>Rohit Mallick | Publications</title>
        <link rel='icon' href='/assets/images/bluetitle.ico'></link>
        <meta
          name='description'
          content='Rohit Mallicks work and publications'
        />
      </Head>
      <div className='flex justify-center items-center'>
        <SlideshowWrapper />
      </div>
    </>
  );
}

export default Publications;
