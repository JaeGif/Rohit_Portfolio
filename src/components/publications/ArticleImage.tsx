/* eslint-disable @next/next/no-img-element */
import React from 'react';

type ArticleImageProps = {
  src: string;
};
function ArticleImage({ src }: ArticleImageProps) {
  return (
    <div className='h-fit w-fit shadow-md overflow-hidden'>
      <img src={src} className='h-full w-full' alt='article' />
    </div>
  );
}

export default ArticleImage;
