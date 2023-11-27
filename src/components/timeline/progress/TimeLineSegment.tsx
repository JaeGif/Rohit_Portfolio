import React from 'react';
import Circle from './Circle';
import Line from './Line';

function TimeLineSegment() {
  return (
    <div className='flex items-center'>
      <Line length={24} />
      <Circle size={4} />
    </div>
  );
}

export default TimeLineSegment;
