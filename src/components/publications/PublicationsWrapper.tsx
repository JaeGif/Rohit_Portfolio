import React from 'react';
import publicationDataset from '../../data/publications.json';
import Publication from './Publication';
import uniqid from 'uniqid';
import Completed from './Completed';
import CurrentWorkInProgress from './CurrentWorkInProgress';
import UnderReview from './UnderReview';
function PublicationsWrapper() {
  const dataset = publicationDataset.publications;
  return (
    <div className='flex w-full flex-col justify-center items-center gap-5'>
      <h1>Current Work</h1>
      <CurrentWorkInProgress dataset={dataset} />
      <h1>Published Works</h1>
      <Completed dataset={dataset} />
      <h1>Under Review</h1>
      <UnderReview dataset={dataset} />
    </div>
  );
}

export default PublicationsWrapper;
