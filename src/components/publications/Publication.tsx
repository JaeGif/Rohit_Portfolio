import { PublicationType } from '@/types/data';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ArticleImage from './ArticleImage';
import uniqid from 'uniqid';
type PublicationProps = {
  data: PublicationType;
};

function Publication({ data }: PublicationProps) {
  return (
    <div className='flex p-4 justify-between items center sm:w-3/4 w-full bg-white opacity-100 rounded-lg text-black gap-10 shadow-lg shadow-black'>
      <span className='flex flex-col w-2/3'>
        <h2 className='text-xl pr-2'>{data.title}</h2>
        <p>
          <em>{data.publisher}</em>
        </p>
        {data.year && (
          <p className='text-sm'>
            <em>Published: {data.year}</em>
          </p>
        )}
        {data.summary && (
          <div className='p-2'>
            <h3 className='text-lg text-blue-500'>Summary</h3>
            <p className='max-h-60 overflow-scroll p-2'>{data.summary}</p>
          </div>
        )}
        {data.type === 'Work in Progress' && (
          <p className='text-sm'>
            <em>{data.type}</em>
          </p>
        )}
      </span>
      {data.src && (
        <div className='flex flex-col justify-center items-center gap-2 w-1/3'>
          <ArticleImage src={data.image} />
          {data.authors && (
            <span>
              <p>
                {data.authors.map((author, i) => (
                  <em
                    className={`text-xs ${
                      author === 'Rohit Mallick' ? 'font-bold' : ''
                    }`}
                    key={uniqid()}
                  >
                    {author}
                    {i < data.authors.length - 1 && ', '}
                  </em>
                ))}
              </p>
            </span>
          )}
          <a href={data.src} target='_blank' rel='noreferrer' className='z-30'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className='border-2 border-black p-1 rounded-md flex justify-center items-center gap-2'
            >
              Article
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 96 960 960'
                width='24'
              >
                <path
                  fill={'#000'}
                  d='M180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h279v60H180v600h600V597h60v279q0 24-18 42t-42 18H180Zm202-219-42-43 398-398H519v-60h321v321h-60V319L382 717Z'
                />
              </svg>
            </motion.button>
          </a>
        </div>
      )}
    </div>
  );
}

export default Publication;
