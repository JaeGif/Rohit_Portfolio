import Headshot from '@/components/about/Headshot';
import Name from '@/components/about/Name';
import Title from '@/components/about/Title';
import React from 'react';
import Socials from './Socials';
import AboutLinks from './AboutLinks';
import SponsersAndCollaborations from './SponsorsAndCollaborations';
function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen'>
      <div className='h-screen w-screen flex items-center flex-col-reverse md:flex-row justify-evenly'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <div className='flex flex-col justify-center items-center w-full sm:w-[450px] p-2 gap-2'>
            <Name />
            <Title />
          </div>
          <Socials />
          <AboutLinks />
        </div>
        <Headshot />
      </div>
      <SponsersAndCollaborations />
    </div>
  );
}

export default Home;
