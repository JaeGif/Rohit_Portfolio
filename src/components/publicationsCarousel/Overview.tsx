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
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      className='z-10 fixed top-0 opacity-95'
    >
      <Publication data={data} />
    </motion.div>
  );
}

export default Overview;
