import React, { UIEvent, useEffect, useState } from 'react';

import TimeLineSegment from './progress/TimeLineSegment';
import Line from './progress/Line';
import Circle from './progress/Circle';
import ProgressHighlight from './progress/ProgressHighlight';
import TimeLineHeader from './progress/TimeLineHeader';

function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const handleScroll = (e: any) => {
    setScrollProgress(
      Math.floor((e.target.scrollTop / e.target.scrollHeight) * 200)
    );
  };

  return (
    <div onScroll={handleScroll} className='overflow-scroll w-screen h-screen'>
      <div className='flex items-center relative h-[200vh] w-screen bg-red-300'>
        <TimeLineHeader scrollProgress={scrollProgress} />
      </div>
    </div>
  );
}

export default Timeline;
