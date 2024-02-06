import React from 'react';
import LeftRow from './LeftRow';

type SponsorshipsProps = {
  data: { src: string; title: string }[];
};
function Sponsorships({ data }: SponsorshipsProps) {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='p-5'>Sponsorships</h1>
      <LeftRow data={data} />
    </div>
  );
}

export default Sponsorships;
