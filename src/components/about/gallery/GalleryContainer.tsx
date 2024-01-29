import React, { useState } from 'react';

import data from '../../../data/about.json';
import Under from './Under';
import Over from './Over';
function GalleryContainer() {
  const gallery = data.gallery;
  return (
    <div className='relative w-full h-screen'>
      <Under data={gallery.slice(gallery.length / 2)} />
      <Over data={gallery.slice(gallery.length / 2, -1)} />
    </div>
  );
}

export default GalleryContainer;
