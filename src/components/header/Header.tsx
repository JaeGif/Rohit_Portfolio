import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navigation from './Navigation';
import MobileNav from './MobileNav';
import useMediaQuery from '@/hooks/useMediaQuery';
function Header() {
  const router = useRouter();
  const [urlParam, setUrlParam] = useState('/');
  const isMobile = useMediaQuery('max-width: 768px');
  useEffect(() => {
    if (router.isReady) {
      setUrlParam(router.route);
    }
  }, [router]);
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className='w-full flex px-28 py-3 justify-between'>
      {isMobile ? (
        <div className='bg-black'>
          <svg
            className='hover:cursor-pointer'
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
      ) : (
        <Navigation isOpen={isOpen} />
      )}
    </header>
  );
}

export default Header;
