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
  changeIndex?: Function;
  handleIncIndex?: Function;
  handleDecIndex?: Function;
  options?: { vHeight?: number; description?: boolean; absCount?: number };
};
function CarouselIndicator({
  length,
  index,
  data,
  changeIndex,
  handleDecIndex,
  handleIncIndex,
  options = { vHeight: 15, description: false, absCount: 3 },
}: CarouselIndicatorProps) {
  let bubbles = [];

  if (!data)
    for (let i = 0; i < length; i++) {
      bubbles.push(
        <div
          key={uniqid()}
          className={`w-1 h-1 sm:h-2 sm:w-2 rounded-xl ${
            index === i ? 'bg-blue-500' : 'bg-gray-400'
          }`}
        >
          <div className='invisible h-1 w-1'>empty</div>
        </div>
      );
    }

  return (
    <span
      className={`w-full ${
        data ? `h-[${options.vHeight}vh]` : 'h-full'
      } flex justify-around items-center`}
    >
      {data && handleDecIndex && <LeftChevron decIndex={handleDecIndex} />}
      <span
        className={`flex h-full justify-center items-center ${
          data ? 'gap-4' : 'gap-1 sm:gap-2'
        }`}
      >
        {!data
          ? bubbles
          : changeIndex &&
            data.map(
              (publication, i) =>
                Math.abs(i - index) <= options.absCount! && (
                  <CurrentFeature
                    options={{ description: options.description }}
                    changeIndex={changeIndex}
                    key={uniqid()}
                    data={publication}
                    index={i}
                    highlightedIndex={index}
                  />
                )
            )}
      </span>
      {data && handleIncIndex && <RightChevron incIndex={handleIncIndex} />}
    </span>
  );
}

export default CarouselIndicator;
