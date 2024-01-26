import { PublicationType } from '@/types/data';
import React from 'react';

type FeaturedProps = {
  data: PublicationType[];
};
function Featured({ data }: FeaturedProps) {
  // contains featured articles and slowly cycles through them
  return <div>Featured</div>;
}

export default Featured;
