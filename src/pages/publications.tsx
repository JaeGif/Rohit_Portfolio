import PublicationsWrapper from '@/components/publications/PublicationsWrapper';
import React from 'react';
import CarouselWrapper from '@/components/publicationsCarousel/CarouselWrapper';
import SlideshowWrapper from '@/components/slideshow/SlideshowWrapper';
function Publications() {
  return (
    <div className='flex justify-center items-center'>
      <SlideshowWrapper />
    </div>
  );
}

export default Publications;
