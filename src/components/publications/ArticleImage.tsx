import React from 'react';
import Image from 'next/image';

type ArticleImageProps = {
  src: string;
};
function ArticleImage({ src }: ArticleImageProps) {
  return (
    <div className='h-fit w-fit border-2 border-blue-300 rounded-md overflow-hidden'>
      <Image src={src} height={200} width={100} alt='article' />
    </div>
  );
}

export default ArticleImage;
