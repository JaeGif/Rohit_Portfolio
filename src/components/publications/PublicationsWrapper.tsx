import React from 'react';
import publicationDataset from '../../data/publications.json';
import Publication from './Publication';
import uniqid from 'uniqid';
function PublicationsWrapper() {
  const dataset = publicationDataset.publications;
  return (
    <div className='flex w-full flex-col justify-center items-center gap-5'>
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
    </div>
  );
}

export default PublicationsWrapper;
