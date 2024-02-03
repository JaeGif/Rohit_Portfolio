import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
function Hint() {
  const isMobileSmall = useMediaQuery('(max-width: 600px)');

  return (
    <div className='flex w-full justify-center items-center'>
      <p className='text-xs text-gray-400'>
        Hint:{isMobileSmall ? ' Scroll the gallery' : ' Click the gallery'}
      </p>
    </div>
  );
}

export default Hint;
