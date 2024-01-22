import React from 'react';
import LinkedinIcon from '../iconWrappers/LinkedinIcon';
import GithubIcon from '../iconWrappers/GithubIcon';
function Socials() {
  return (
    <div className='flex justify-center items-center gap-2 p-2'>
      <a
        href='https://www.linkedin.com/in/rohit-mallick-165780165/'
        target='_blank'
        rel='noreferrer'
      >
        <LinkedinIcon />
      </a>
      <a href='https://github.com/RoMallick' target='_blank' rel='noreferrer'>
        <GithubIcon />
      </a>
    </div>
  );
}

export default Socials;
