import React from 'react';

function AboutLinks() {
  return (
    <nav className='flex justify-center gap-2'>
      <a href='/assets/rohit_cv.pdf' target='_blank'>
        <button className='flex justify-center items-center gap-2 border-2 border-white border-solid p-2 rounded-md'>
          CV
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='18'
            viewBox='0 96 960 960'
            width='24'
          >
            <path
              fill={'#fff'}
              d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
            />
          </svg>
        </button>
      </a>
      <button className='border-2 border-white border-solid p-2 rounded-md'>
        Contact
      </button>
    </nav>
  );
}

export default AboutLinks;
