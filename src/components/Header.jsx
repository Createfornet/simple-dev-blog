import { useState, useEffect } from 'react';
import { Squeeze as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';

// import components
import Navbar from './Navbar';
import { useLockBodyScroll } from '@uidotdev/usehooks';
import { ButtonDarkMode } from './ButtonDarkMode';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(
    function () {
      isDarkMode
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
    },
    [isDarkMode]
  );

  function handleToggleMenu() {
    setIsMenuOpen((open) => !open);
  }

  return (
    <>
      <header className='fixed text-2xl top-0 left-0 z-30 bg-white dark:bg-black w-full flex justify-between items-center px-3 shadow-md shadow-lightGray dark:shadow-darkGray'>
        <ButtonDarkMode
          onToggleDarkMode={setIsDarkMode}
          isDarkMode={isDarkMode}
          className='scale-125'
        />

        <Link to='/' className='text-yellow' title='navigate to home'>
          Code Club
        </Link>

        <Hamburger onToggle={handleToggleMenu} duration={0.7} size={30} />
      </header>

      <Navbar setIsMenuOpen={setIsMenuOpen} className={isMenuOpen ? 'translate-y-0' : '-translate-y-full'} />

      {isMenuOpen && <Layback />}
    </>
  );
}

function Layback() {
  useLockBodyScroll();

  return (
    <div className='absolute top-0 left-0 w-full h-screen z-10 bg-layback'></div>
  );
}
