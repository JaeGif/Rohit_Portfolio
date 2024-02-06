import React from 'react';
import RightRow from './RightRow';

type CollaborationsProps = {
  data: { src: string; title: string }[];
};
function Collaborations({ data }: CollaborationsProps) {
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='p-5'>Collaborations</h1>
      <RightRow data={data} />
    </div>
  );
}

export default Collaborations;
