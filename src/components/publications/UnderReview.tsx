import { PublicationType } from '@/types/data';
import React from 'react';
import uniqid from 'uniqid';
import Publication from './Publication';
type UnderReviewProps = {
  dataset: PublicationType[];
};
function UnderReview({ dataset }: UnderReviewProps) {
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

export default UnderReview;
