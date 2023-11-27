import React from 'react';

type CircleProps = {
  size?: number | 'auto';
};

function Circle({ size = 'auto' }: CircleProps) {
  return (
    <div
      className={`h-${size} w-${size} bg-teal-600 rounded-3xl flex justify-center items-center`}
    >
      <div className='h-1/2 w-1/2 bg-teal-300 rounded-2xl'>
        <p className='invisible'>c</p>
      </div>
    </div>
  );
}

export default Circle;
