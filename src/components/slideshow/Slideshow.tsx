import { PublicationType } from '@/types/data';
import React, { useState } from 'react';
import CurrentSlide from './CurrentSlide';
import Carousel from './Carousel';
import CarouselIndicator from './CarouselIndicator';

type SlideshowProps = {
  data: PublicationType[];
};
function Slideshow({ data }: SlideshowProps) {
  const [currentData, setCurrentData] = useState<PublicationType>(data[0]);
  const [index, setIndex] = useState(0);
  return (
    <div>
      <CurrentSlide data={currentData} />
      <div>
        <Carousel data={data} />
        <CarouselIndicator length={data.length} index={index} />
      </div>
    </div>
  );
}

export default Slideshow;
