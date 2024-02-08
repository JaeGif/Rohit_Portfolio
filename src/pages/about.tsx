import React from 'react';
import PersonalDescription from '@/components/about/PersonalDescription';
import Education from '@/components/about/Education';
import Hobbies from '@/components/about/Hobbies';
import Head from 'next/head';
function about() {
  return (
    <>
      <Head>
        <title>Rohit Mallick | About</title>
        <meta
          name='description'
          content='Description of Rohit Mallicks academic career'
        ></meta>
      </Head>

      <div className='flex flex-col w-full p-16 gap-5'>
        <h1 className='flex justify-center'>About Me</h1>
        <PersonalDescription />
        <Education />
        <Hobbies />
      </div>
    </>
  );
}

export default about;
