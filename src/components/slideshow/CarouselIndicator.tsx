import { PublicationType } from '@/types/data';
import React from 'react';
import CurrentFeature from './CurrentFeature';
import uniqid from 'uniqid';
import LeftChevron from './LeftChevron';
import RightChevron from './RightChevron';

type CarouselIndicatorProps = {
  length: number;
  index: number;
  data?: PublicationType[];
  changeIndex: Function;
  handleIncIndex: Function;
  handleDecIndex: Function;
};
function CarouselIndicator({
  length,
  index,
  data,
  changeIndex,
  handleDecIndex,
  handleIncIndex,
}: CarouselIndicatorProps) {
  let bubbles = [];

  if (!data)
    for (let i = 0; i < length; i++) {
      bubbles.push(
        <div
          className={`h-2 w-2 rounded-xl ${
            index === i ? 'bg-blue-500' : 'bg-white'
          }`}
        >
          <div className='invisible h-1 w-1'>empty</div>
        </div>
      );
    }

  return (
    <span className='flex justify-center items-center gap-2'>
      <LeftChevron decIndex={handleDecIndex} />
      {!data
        ? bubbles
        : data.map((publication, i) => (
            <CurrentFeature
              options={{ description: false }}
              changeIndex={changeIndex}
              key={uniqid()}
              data={publication}
              index={i}
              highlightedIndex={index}
            />
          ))}
      <RightChevron incIndex={handleIncIndex} />
    </span>
  );
}

export default CarouselIndicator;
