import { PublicationType } from '@/types/data';
import React, { useEffect, useState } from 'react';
import CurrentSlide from './CurrentSlide';
import Carousel from './Carousel';
import CarouselIndicator from './CarouselIndicator';
import useMediaQuery from '@/hooks/useMediaQuery';

type SlideshowProps = {
  data: PublicationType[];
};
function Slideshow({ data }: SlideshowProps) {
  const [currentData, setCurrentData] = useState<PublicationType>(data[0]);
  const [index, setIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 768px)');
  console.log(isMobile);
  const handleChangeIndex = (incIndex: number) => {
    setIndex(incIndex);
  };
  const handleDecIndex = () => {
    if (index === 0) setIndex(data.length - 1);
    else setIndex(index - 1);
  };
  const handleIncIndex = () => {
    if (index === data.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  useEffect(() => {
    setCurrentData(data[index]);
  }, [index, data]);

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <CurrentSlide data={currentData} />
      <div className='h-[15vh] w-full'>
        <CarouselIndicator
          handleDecIndex={handleDecIndex}
          handleIncIndex={handleIncIndex}
          changeIndex={handleChangeIndex}
          data={data}
          length={data.length}
          index={index}
          options={{
            vHeight: 15,
            description: false,
            absCount: isMobile ? 1 : 3,
          }}
        />
      </div>
      <CarouselIndicator length={data.length} index={index} />
    </div>
  );
}

export default Slideshow;
