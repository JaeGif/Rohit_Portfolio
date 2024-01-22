import React from 'react';
import GithubIcon from '../iconWrappers/GithubIcon';

function Footer() {
  return (
    <div className='w-full h-16 text-center items-center flex flex-col mt-5'>
      <div className='h-[1px] w-11/12 dark:bg-white bg-gray-950'>
        <p className='invisible'>dummy content</p>
      </div>
      <div className='flex justify-center items-center gap-2 p-5'>
        <em className='text-sm text-gray-100'>
          &#169; {new Date().getFullYear()} Jacob Gifford
        </em>
        <a href='https://github.com/JaeGif' rel='noreferrer' target='_blank'>
          <GithubIcon height={16} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
