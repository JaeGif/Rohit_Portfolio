import React from 'react';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
import Publication from './Publication';

type CurrentWorkInProgressProps = {
  dataset: PublicationType[];
};
function CurrentWorkInProgress({ dataset }: CurrentWorkInProgressProps) {
  return (
    <>
      {dataset.map((el) =>
        el.type === 'Review' ? (
          <span
            key={uniqid()}
            className='w-full flex justify-center items-center'
          >
            <Publication data={el} />
          </span>
        ) : (
          <></>
        )
      )}
    </>
  );
}

export default CurrentWorkInProgress;
