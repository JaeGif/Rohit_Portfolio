import React from 'react';
import LeftRow from './LeftRow';
import MobileSCComponent from './MobileSCComponent';
import useMediaQuery from '@/hooks/useMediaQuery';
type SponsorshipsProps = {
  data: { src: string; title: string }[];
};
function Sponsorships({ data }: SponsorshipsProps) {
  const isMobileSmall = useMediaQuery('(max-width: 600px)');

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='p-5'>Sponsorships</h1>
      {isMobileSmall ? (
        <MobileSCComponent data={data} />
      ) : (
        <LeftRow data={data} />
      )}{' '}
    </div>
  );
}

export default Sponsorships;
