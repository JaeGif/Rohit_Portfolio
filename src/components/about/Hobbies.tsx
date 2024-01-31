import React from 'react';
import GalleryContainer from './gallery/GalleryContainer';
import Hint from './gallery/Hint';

function Hobbies() {
  return (
    <div className='flex flex-col'>
      <h1>Gallery</h1>
      <Hint />
      <GalleryContainer />
    </div>
  );
}

export default Hobbies;
