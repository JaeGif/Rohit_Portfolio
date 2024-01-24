import React from 'react';
import Publication from './Publication';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
type UpColumnProps = {
  dataset: PublicationType[];
};
// takes a truncated data array
function UpColumn({ dataset }: UpColumnProps) {
  return (
    <div className=''>
      {dataset.map((data) => (
        <Publication key={uniqid()} data={data} />
      ))}
    </div>
  );
}

export default UpColumn;
