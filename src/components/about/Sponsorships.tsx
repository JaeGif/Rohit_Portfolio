import React from 'react';
import LeftRow from './LeftRow';

type SponsorshipsProps = {
  data: { src: string; title: string }[];
};
function Sponsorships({ data }: SponsorshipsProps) {
  return (
    <div>
      <LeftRow data={data} />
    </div>
  );
}

export default Sponsorships;
