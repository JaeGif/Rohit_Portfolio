import React from 'react';

type LineProps = {
  length?: number;
};
function Line({ length = 4 }: LineProps) {
  return (
    <div className={`h-1 w-${length} bg-teal-400 -mr-1`}>
      <p className='invisible'>l</p>
    </div>
  );
}

export default Line;
