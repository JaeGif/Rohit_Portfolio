import React, { useEffect, useState } from 'react';
import Featured from './Featured';

import publicationDataset from '../../data/publications.json';
import { PublicationType } from '@/types/data';

function SlideshowWrapper() {
  const data = publicationDataset.publications;
  const [featured, setFeatured] = useState<PublicationType[]>();

  useEffect(() => {}, [data]);
  return <div>{featured && <Featured data={featured} />}</div>;
}

export default SlideshowWrapper;
