import React, { useEffect, useState } from 'react';
import publicationDataset from '../../data/publications.json';
import Publication from './Publication';
import uniqid from 'uniqid';
import DownColumn from './DownColumn';
import { PublicationType } from '@/types/data';
import UpColumn from './UpColumn';
function CarouselWrapper() {
  const dataset = publicationDataset.publications;
  // split them into thirds

  const [dataOneThird, setDataOneThird] = useState<PublicationType[]>();
  const [dataTwoThirds, setDataTwoThirds] = useState<PublicationType[]>();
  const [dataThreeThirds, setDataThreeThirds] = useState<PublicationType[]>();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (loaded) {
      console.log(
        dataOneThird!.length,
        dataTwoThirds!.length,
        dataThreeThirds!.length
      );
      return;
    }
    !dataOneThird && setDataOneThird(dataset.slice(0, dataset.length / 3));
    !dataTwoThirds &&
      setDataTwoThirds(
        dataset.slice(dataset.length / 3, (dataset.length / 3) * 2)
      );
    !dataThreeThirds &&
      setDataThreeThirds(
        dataset.slice((dataset.length / 3) * 2, dataset.length)
      );
    if (dataOneThird && dataTwoThirds && dataThreeThirds) setLoaded(true);
  }, [dataset, dataOneThird, dataTwoThirds, dataThreeThirds, loaded]);

  return (
    // height needs to be calculated to subtract
    // the header and footer heights

    <div className='h-[82vh] w-screen flex justify-center items-center overflow-hidden'>
      {dataOneThird && <DownColumn key={uniqid()} dataset={dataOneThird} />}
      {dataTwoThirds && <UpColumn key={uniqid()} dataset={dataTwoThirds} />}
      {dataThreeThirds && (
        <DownColumn key={uniqid()} dataset={dataThreeThirds} />
      )}
    </div>
  );
}

export default CarouselWrapper;
