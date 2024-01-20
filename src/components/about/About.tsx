import Headshot from '@/components/about/Headshot';
import Name from '@/components/about/Name';
import Title from '@/components/about/Title';
import React from 'react';
import PersonalDescription from './PersonalDescription';
import Socials from './Socials';
import AboutLinks from './AboutLinks';
function About() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='h-screen w-screen flex justify-evenly items-center'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='flex flex-col justify-center items-center'>
            <Name />
            <Title />
          </div>
          <Socials />
          <AboutLinks />
        </div>
        <Headshot />
      </div>
      <PersonalDescription />
    </div>
  );
}

export default About;
