import React from 'react';
import ProgressHighlight from './ProgressHighlight';
import TimeLineSegment from './TimeLineSegment';

type TimeLineHeaderProps = {
  scrollProgress: number;
};
function TimeLineHeader({ scrollProgress }: TimeLineHeaderProps) {
  return (
    <div className='w-screen flex justify-center fixed top-1 h-4 bg-white'>
      <ProgressHighlight scrollProgress={scrollProgress} />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
      <TimeLineSegment />
    </div>
  );
}

export default TimeLineHeader;
