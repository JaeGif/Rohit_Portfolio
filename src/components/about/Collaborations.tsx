import React from 'react';
import RightRow from './RightRow';

type CollaborationsProps = {
  data: { src: string; title: string }[];
};
function Collaborations({ data }: CollaborationsProps) {
  return (
    <div>
      <RightRow data={data} />
    </div>
  );
}

export default Collaborations;
