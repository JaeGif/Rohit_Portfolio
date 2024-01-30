import React, { useState } from 'react';

import data from '../../../data/about.json';
import Under from './Under';
import Over from './Over';
function GalleryContainer() {
  const gallery = data.gallery;
  const [isUnderOver, setIsUnderOver] = useState(false);
  return (
    <div
      onClick={() => setIsUnderOver((prev) => !isUnderOver)}
      className='relative w-full h-screen overflow-scroll no-scrollbar'
    >
      <Under
        foreground={isUnderOver}
        data={gallery.slice(gallery.length / 3)}
      />
      <Over data={gallery.slice(gallery.length / 3, -1)} />
    </div>
  );
}

export default GalleryContainer;
