import React from 'react';
import PersonalDescription from '@/components/about/PersonalDescription';
import Education from '@/components/about/Education';
import Hobbies from '@/components/about/Hobbies';
function about() {
  return (
    <div className='flex flex-col w-full p-16 gap-5'>
      <PersonalDescription />
      <Education />
      <Hobbies />
    </div>
  );
}

export default about;