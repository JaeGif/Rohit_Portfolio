import React from 'react';
import Publication from './Publication';
import { PublicationType } from '@/types/data';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
type DownColumnProps = {
  dataset: PublicationType[];
  openOverview: Function;
};
// takes a truncated data array
function DownColumn({ dataset, openOverview }: DownColumnProps) {
  return (
    <div className='flex flex-col gap-1'>
      {dataset.map((data) => (
        <motion.div
          onClick={() => openOverview(data)}
          animate={{ y: 1000 }}
          transition={{
            ease: 'linear',
            duration: 50,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className='hover:brightness-110 hover:cursor-pointer'
          key={uniqid()}
        >
          <Publication data={data} />
        </motion.div>
      ))}
    </div>
  );
}

export default DownColumn;
