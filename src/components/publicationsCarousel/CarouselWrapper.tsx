import React from 'react';
import publicationDataset from '../../data/publications.json';
import Publication from './Publication';
import uniqid from 'uniqid';
function CarouselWrapper() {
  const dataset = publicationDataset.publications;

  return (
    <>
      {dataset.map((publication) => (
        <Publication key={uniqid()} />
      ))}
    </>
  );
}

export default CarouselWrapper;
