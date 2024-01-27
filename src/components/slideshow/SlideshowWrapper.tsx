import React, { useEffect, useState } from 'react';
import Featured from './Featured';

import publicationDataset from '../../data/publications.json';
import { PublicationType } from '@/types/data';
import Slideshow from './Slideshow';

function SlideshowWrapper() {
  const data = publicationDataset.publications;
  const [featured, setFeatured] = useState<PublicationType[]>();
  const [notFeatured, setNotFeatured] = useState<PublicationType[]>();

  useEffect(() => {
    if (featured && notFeatured) return;
    let featuredTemp = [];
    let unFeaturedTemp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].featured) featuredTemp.push(data[i]);
      else {
        unFeaturedTemp.push(data[i]);
      }
    }
    if (!featured) setFeatured(featuredTemp);
    if (!notFeatured) setNotFeatured(unFeaturedTemp);
  }, [data, featured, notFeatured]);

  return (
    <div className='h-full w-full'>
      {featured && (
        <div className='flex flex-col'>
          <h1 className='pl-10'>Featured</h1>
          <Featured data={featured} />
        </div>
      )}
      {notFeatured && (
        <div className='flex flex-col'>
          <h1 className='pl-10'>Everything Else</h1>
          <Slideshow data={notFeatured} />
        </div>
      )}
    </div>
  );
}

export default SlideshowWrapper;
