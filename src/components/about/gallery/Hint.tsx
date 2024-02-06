import React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
function Hint() {
  const isMobileSmall = useMediaQuery('(max-width: 600px)');

  return (
    <div className='flex w-full justify-center items-center p-4'>
      <p className='text-xs text-gray-500'>
        Hint:
        {isMobileSmall
          ? ' Scroll the gallery'
          : ' Click and scroll the gallery'}
      </p>
    </div>
  );
}

export default Hint;
