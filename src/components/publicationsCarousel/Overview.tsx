import { PublicationType } from '@/types/data';
import React from 'react';
import Publication from '../publications/Publication';
import { AnimatePresence, motion } from 'framer-motion';
import uniqid from 'uniqid';
type OverviewProps = {
  data: PublicationType;
};
function Overview({ data }: OverviewProps) {
  return (
    <motion.div
      key={uniqid()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className='flex justify-center items-center'
    >
      <Publication data={data} />
    </motion.div>
  );
}

export default Overview;
