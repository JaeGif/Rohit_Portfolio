import React from 'react';

type ProgressHighlightProps = {
  scrollProgress: number;
};
function ProgressHighlight({ scrollProgress }: ProgressHighlightProps) {
  return (
    <div
      className={`absolute left-[${scrollProgress}%] top-1.5 h-1 w-1 rounded-3xl shadow-[0_0_4px_5px_rgba(96,165,250,.9)] bg-blue-400`}
    >
      <p className='invisible'>h</p>
    </div>
  );
}

export default ProgressHighlight;
