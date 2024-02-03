import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Socials from '../about/Socials';

type NavigationProps = {
  isOpen: boolean;
  toggleMenu?: Function;
};
function Navigation({ isOpen = false, toggleMenu }: NavigationProps) {
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
        isOpen
          ? 'flex flex-col w-full h-full bg-white z-50 justify-center items-center gap-10 md:gap-8 text-2xl'
          : 'flex w-1/3 justify-start gap-3 md:gap-8 text-lg'
      }
    >
      <Link
        onClick={() => {
          toggleMenu && toggleMenu();
        }}
        className={urlParam === '/' ? 'text-blue-500' : ''}
        href={'/'}
      >
        Home
      </Link>
      <Link
        onClick={() => {
          toggleMenu && toggleMenu();
        }}
        href={'/about'}
        className={urlParam === '/about' ? 'text-blue-500' : ''}
      >
        About
      </Link>
      <Link
        onClick={() => {
          toggleMenu && toggleMenu();
        }}
        className={urlParam === '/publications' ? 'text-blue-500' : ''}
        href={'/publications'}
      >
        Publications
      </Link>
      {isOpen && <Socials />}
    </nav>
  );
}

export default Navigation;
