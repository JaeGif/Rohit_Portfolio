import React, { useEffect, useState } from 'react';
import Featured from './Featured';

import publicationDataset from '../../data/publications.json';
import { PublicationType } from '@/types/data';
import Slideshow from './Slideshow';

function SlideshowWrapper() {
  const data = publicationDataset.publications;
  const [featured, setFeatured] = useState<PublicationType[]>();
  useEffect(() => {
    if (featured) return;
    let featuredTemp = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].featured) featuredTemp.push(data[i]);
    }
    if (!featured) setFeatured(featuredTemp);
  }, [data, featured]);

  return (
    <div className='h-full w-full'>
      {featured && (
        <div
          className={
            'flex flex-col md:items-start items-center gap-5 md:gap-0 md:h-screen'
          }
        >
          <h1 className={'p-0 md:pl-10'}>Featured</h1>
          <Featured data={featured} />
        </div>
      )}
      <div className='flex flex-col'>
        <h1 className='p-10'>Publications</h1>
        <Slideshow data={data} />
      </div>
    </div>
  );
}

export default SlideshowWrapper;
