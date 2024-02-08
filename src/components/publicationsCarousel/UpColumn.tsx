import React from 'react';
import Publication from './Publication';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
type UpColumnProps = {
  dataset: PublicationType[];
  openOverview: Function;
};
// takes a truncated data array
function UpColumn({ dataset, openOverview }: UpColumnProps) {
  // when an element comes out of view, it gets removed from the front of the queue and added to the end
  return (
    <div className='flex flex-col gap-1'>
      {dataset.map((data) => (
        <motion.div
          onClick={() => openOverview(data)}
          animate={{ y: -1000 }}
          transition={{
            ease: 'linear',
            duration: 50,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          key={uniqid()}
          className='hover:brightness-110 hover:cursor-pointer'
        >
          <Publication data={data} />
        </motion.div>
      ))}
    </div>
  );
}

export default UpColumn;
