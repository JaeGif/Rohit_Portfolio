import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  const [urlParam, setUrlParam] = useState('/');
  useEffect(() => {
    if (router.isReady) {
      setUrlParam(router.route);
    }
  }, [router]);

  return (
    <header className='invisible sm:visible sm:w-full sm:flex sm:px-28 sm:py-3 sm:justify-between'>
      <nav className='hidden sm:flex w-1/3 justify-start sm:gap-3 md:gap-8 text-lg'>
        <Link className={urlParam === '/' ? 'text-blue-500' : ''} href={'/'}>
          Home
        </Link>
        <Link
          href={'/about'}
          className={urlParam === '/about' ? 'text-blue-500' : ''}
        >
          About
        </Link>
        <Link
          className={urlParam === '/publications' ? 'text-blue-500' : ''}
          href={'/publications'}
        >
          Publications
        </Link>
      </nav>
    </header>
  );
}

export default Header;
