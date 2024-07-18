import React, { useEffect, useState } from 'react';
import RightRow from './RightRow';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileSCComponent from './MobileSCComponent';
import LeftRow from './LeftRow';
import uniqid from 'uniqid';
type CollaborationsProps = {
  data: { src: string; title: string }[];
};
function Collaborations({ data }: CollaborationsProps) {
  const isMobileSmall = useMediaQuery('(max-width: 600px)');
  const isMedium = useMediaQuery('(max-width: 1000px)');
  const isSmall = useMediaQuery('(max-width: 800px)');

  // map collabs on width and fixed stuff
  const [rowFactor, setRowFactor] = useState(4);
  useEffect(() => {
    if (isSmall) setRowFactor(2);
    else if (isMedium) setRowFactor(3);
    else setRowFactor(4);
  }, [isMedium, isSmall]);

  const grouped = data.reduce((res: any[], el, i) => {
    if (i % rowFactor === 0) {
      res[res.length] = [el];
    } else {
      res[res.length - 1] = [...res[res.length - 1], el];
    }
    return res;
  }, []);
  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='p-5'>Collaborations</h1>
      {isMobileSmall ? (
        <MobileSCComponent data={data} />
      ) : (
        grouped.map((group, i) => {
          if ((i + 2) % 2 === 0) {
            return <LeftRow data={group} key={uniqid()} />;
          } else {
            return <RightRow data={group} key={uniqid()} />;
          }
        })
      )}
    </div>
  );
}

export default Collaborations;
