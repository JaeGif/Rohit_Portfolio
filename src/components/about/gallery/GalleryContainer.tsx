import React, { useState } from 'react';
import data from '../../../data/about.json';
import Under from './Under';
import Over from './Over';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileGallery from './MobileGallery';

function GalleryContainer() {
  const gallery = data.gallery;
  const [isUnderOver, setIsUnderOver] = useState(false);
  const isMobileSmall = useMediaQuery('(max-width: 600px)');

  return (
    <div
      onClick={() => setIsUnderOver((prev) => !isUnderOver)}
      className={
        isMobileSmall
          ? 'max-h-[300px] overflow-scroll no-scrollbar'
          : 'relative w-full h-screen overflow-hidden flex justify-center items-center'
      }
    >
      {isMobileSmall ? (
        <MobileGallery data={gallery} />
      ) : (
        <>
          <Under
            foreground={isUnderOver}
            data={gallery.slice(0, gallery.length / 3)}
          />
          <Over
            foreground={!isUnderOver}
            data={gallery.slice(gallery.length / 3, -1)}
          />
        </>
      )}
    </div>
  );
}

export default GalleryContainer;
