import React from 'react';
import GalleryContainer from './gallery/GalleryContainer';
import Hint from './gallery/Hint';

function Hobbies() {
  return (
    <div className='flex flex-col'>
      <span className='flex justify-center items-center w-full'>
        <h1>Gallery</h1>
      </span>
      <Hint />
      <GalleryContainer />
    </div>
  );
}

export default Hobbies;
