import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import useMediaQuery from '@/hooks/useMediaQuery';
function Header() {
  const router = useRouter();
  const [urlParam, setUrlParam] = useState('/');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      setUrlParam(router.route);
    }
  }, [router]);
  const toggleMenu = () => {
    console.log('tog');
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };
  return (
    <header className='relative w-full flex md:px-28 md:py-3 justify-between'>
      {isMobile ? (
        isOpen ? (
          <div className='h-screen w-screen fixed top-0 left-0 z-50 no-scrollbar'>
            <Navigation toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
        ) : (
          <div className='w-full p-3 flex'>
            <div className='hover:bg-gray-200 rounded-md p-1'>
              <svg
                className='hover:cursor-pointer hover:bg-gray-200 rounded-sm'
                onClick={() => toggleMenu()}
                xmlns='http://www.w3.org/2000/svg'
                height='32'
                viewBox='0 96 960 960'
                width='32'
              >
                <path
                  fill={'#000000'}
                  d='M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z'
                />
              </svg>
            </div>
          </div>
        )
      ) : (
        <Navigation isOpen={isOpen} />
      )}
    </header>
  );
}

export default Header;
