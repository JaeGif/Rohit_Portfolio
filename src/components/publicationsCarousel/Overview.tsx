import { PublicationType } from '@/types/data';
import React from 'react';
import Publication from '../publications/Publication';
import { motion } from 'framer-motion';
import uniqid from 'uniqid';
type OverviewProps = {
  data: PublicationType;
};
function Overview({ data }: OverviewProps) {
  return (
    <motion.div
      onClick={(e) => {
        e.stopPropagation();
      }}
      key={uniqid()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className='flex justify-center items-center z-20'
    >
      <Publication data={data} />
    </motion.div>
  );
}

export default Overview;
