/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react';
import uniqid from 'uniqid';
import { motion } from 'framer-motion';
type RightRowProps = {
  data: { src: string; title: string }[];
};
// takes a truncated data array
function RightRow({ data }: RightRowProps) {
  const [width, setWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const ref = useRef<any>(null);

  useEffect(() => {
    if (ref.current) setWidth(ref.current.clientWidth);
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <div className='flex overflow-hidden w-screen items-center pl-5 '>
      <div
        ref={ref}
        className='flex md:gap-40 gap-10 justify-center items-center'
      >
        {data.map((img) => (
          <motion.div
            animate={{ x: windowWidth - width - 20 }}
            transition={{
              ease: 'linear',
              duration: 8 - data.length,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className='hover:brightness-110 flex justify-center items-center'
            key={uniqid()}
          >
            <img
              className='w-48 object-contain'
              src={img.src}
              alt={img.title}
              title={img.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default RightRow;
