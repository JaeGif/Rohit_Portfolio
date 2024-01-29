import { PublicationType } from '@/types/data';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
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
  const [distance, setDistance] = useState(index - highlightedIndex);
  useEffect(() => {
    if (index === highlightedIndex)
      controls.start({
        scale: options.description ? 1.025 : 1.2,
        transition: { ease: 'linear', duration: 0.1 },
      });
  }, [index, highlightedIndex, controls, options]);

  useEffect(() => {
    setDistance(index - highlightedIndex);
  }, [index, highlightedIndex, options, distance]);

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
      className={`flex h-full ${
        options.description && 'w-full'
      } flex-col justify-center items-center cursor-pointer`}
    >
      <div
        className={`rounded-t-md h-full shadow-md ${
          (index !== highlightedIndex || !options.description) &&
          `rounded-b-md ${
            !options.description &&
            index === highlightedIndex &&
            'border-2 border-blue-400 shadow-lg shadow-black'
          }`
        } overflow-hidden`}
      >
        <img
          src={data.image}
          alt='placeholder'
          style={{ opacity: 1 / (distance === 0 ? 1 : Math.abs(distance)) }}
          className={`h-full`}
        />
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
