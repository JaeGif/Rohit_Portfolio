import React, { useEffect, useState, useMemo } from 'react';
import publicationDataset from '../../data/publications.json';
import uniqid from 'uniqid';
import DownColumn from './DownColumn';
import { PublicationType } from '@/types/data';
import UpColumn from './UpColumn';
import Overview from './Overview';
import { AnimatePresence } from 'framer-motion';
function CarouselWrapper() {
  const dataset = publicationDataset.publications;
  // split them into thirds

  const [dataOneThird, setDataOneThird] = useState<PublicationType[]>();
  const [dataTwoThirds, setDataTwoThirds] = useState<PublicationType[]>();
  const [dataThreeThirds, setDataThreeThirds] = useState<PublicationType[]>();
  const [loaded, setLoaded] = useState(false);
  const [overViewVisible, setOverviewVisible] = useState(false);
  const [overviewData, setOverviewData] = useState<PublicationType>();
  // animate the motion no scroll effect

  const handleOpeningOverview = (data: PublicationType) => {
    setOverviewData(data);
    setOverviewVisible(true);
  };
  const handleClosingOverview = () => {
    setOverviewData(undefined);
    setOverviewVisible(false);
  };

  const ScrollColumns = useMemo(() => {
    return (
      <>
        {dataOneThird && (
          <DownColumn
            key={uniqid()}
            dataset={dataOneThird}
            openOverview={handleOpeningOverview}
          />
        )}
        {dataTwoThirds && (
          <UpColumn
            key={uniqid()}
            dataset={dataTwoThirds}
            openOverview={handleOpeningOverview}
          />
        )}
        {dataThreeThirds && (
          <DownColumn
            key={uniqid()}
            dataset={dataThreeThirds}
            openOverview={handleOpeningOverview}
          />
        )}
      </>
    );
  }, [dataOneThird, dataTwoThirds, dataThreeThirds]);
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

    <div className='relative h-[82vh] w-screen flex justify-center items-center overflow-hidden gap-1'>
      {ScrollColumns}
      <AnimatePresence>
        {overViewVisible && overviewData && (
          <div
            className='h-screen w-screen fixed z-10 flex justify-center items-center bg-[rgba(0,0,0,0)]'
            onClick={handleClosingOverview}
          >
            <Overview data={overviewData} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CarouselWrapper;
