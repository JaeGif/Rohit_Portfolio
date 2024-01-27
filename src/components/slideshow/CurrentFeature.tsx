import { PublicationType } from '@/types/data';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react';
import DescriptiveContainer from './DesciptiveContainer';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
type CurrentFeatureProps = {
  data: PublicationType;
  changeIndex: Function;
  index: number;
  highlightedIndex: number;
  options?: { description?: boolean };
};
function CurrentFeature({
  data,
  changeIndex,
  index,
  highlightedIndex,
  options = { description: true },
}: CurrentFeatureProps) {
  const controls = useAnimationControls();
  useEffect(() => {
    if (index === highlightedIndex)
      controls.start({
        scale: options.description ? 1.025 : 1.2,
        transition: { ease: 'linear', duration: 0.1 },
      });
  }, [index, highlightedIndex, controls, options]);
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={controls}
      onClick={
        changeIndex
          ? () => {
              if (highlightedIndex === index) return;
              else {
                changeIndex(index);
              }
            }
          : () => {}
      }
      className={`w-full h-full cursor-pointer ${
        index === highlightedIndex && 'shadow-lg shadow-black'
      }`}
    >
      <div
        className={`h-fit w-fit rounded-t-md ${
          (index !== highlightedIndex || !options.description) && 'rounded-b-md'
        } overflow-hidden`}
      >
        <img src={data.image} alt='placeholder' className='w-full' />
      </div>
      {options.description && (
        <AnimatePresence>
          {highlightedIndex === index && <DescriptiveContainer data={data} />}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

export default CurrentFeature;
