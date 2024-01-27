import React from 'react';
import LinkedinIcon from '../iconWrappers/LinkedinIcon';
import GithubIcon from '../iconWrappers/GithubIcon';
import GoogleScholar from '../iconWrappers/GoogleScholarIcon';
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
      <a
        href='https://scholar.google.com/citations?user=HIo7kwwAAAAJ&hl=en'
        target='_blank'
        rel='noreferrer'
      >
        <GoogleScholar />
      </a>
    </div>
  );
}

export default Socials;
