import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

type NavigationProps = {
  isOpen: boolean;
};
function Navigation({ isOpen = true }: NavigationProps) {
  const router = useRouter();
  const [urlParam, setUrlParam] = useState('/');

  useEffect(() => {
    if (router.isReady) {
      setUrlParam(router.route);
    }
  }, [router]);

  return (
    <nav
      className={
        isOpen ? 'flex w-1/3 justify-start gap-3 md:gap-8 text-lg' : 'hidden'
      }
    >
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
  );
}

export default Navigation;
