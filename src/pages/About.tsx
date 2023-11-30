import Headshot from '@/components/about/Headshot';
import Name from '@/components/about/Name';
import Title from '@/components/about/Title';
import React from 'react';

function About() {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='flex flex-col'>
        <Name />
        <Title />
      </div>
      <Headshot />
    </div>
  );
}

export default About;
