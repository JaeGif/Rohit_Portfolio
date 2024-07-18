import React from 'react';
import RightRow from './RightRow';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileSCComponent from './MobileSCComponent';
type CollaborationsProps = {
  data: { src: string; title: string }[];
};
function Collaborations({ data }: CollaborationsProps) {
  const isMobileSmall = useMediaQuery('(max-width: 600px)');
  // map collabs on width and fixed stuff
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='p-5'>Collaborations</h1>
      {isMobileSmall ? (
        <MobileSCComponent data={data} />
      ) : (
        <RightRow data={data} />
      )}
    </div>
  );
}

export default Collaborations;
