import React from 'react';

type CarouselIndicatorProps = {
  length: number;
  index: number;
};
function CarouselIndicator({ length, index }: CarouselIndicatorProps) {
  let bubbles = [];

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
    <span className='flex justify-center items-center gap-2'>{bubbles}</span>
  );
}

export default CarouselIndicator;
