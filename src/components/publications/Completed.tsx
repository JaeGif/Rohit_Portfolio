import React from 'react';
import Publication from './Publication';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';

type CompletedProps = {
  dataset: PublicationType[];
};
function Completed({ dataset }: CompletedProps) {
  return (
    <>
      {dataset.map((el, i) =>
        el.type !== 'Work in Progress' ? (
          el.type !== 'Review' ? (
            el.summary && (
              <span
                key={uniqid()}
                className='w-full flex justify-center items-center'
              >
                <span className='w-8 flex justify-end'>
                  <h1 className='pr-5'>{i + 1}</h1>
                </span>
                <Publication data={el} />
              </span>
            )
          ) : (
            <></>
          )
        ) : (
          <></>
        )
      )}
    </>
  );
}

export default Completed;
