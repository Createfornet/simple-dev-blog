import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { IconMenu } from './Icon';
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
    <header className='fixed text-2xl top-0 left-0 z-30 bg-light dark:bg-gray w-full flex justify-between items-center py-4 px-3 shadow-lg shadow-light dark:shadow-gray'>
      <ButtonDarkMode
        onToggleDarkMode={setIsDarkMode}
        isDarkMode={isDarkMode}
        className='scale-125'
      />
      <span className='text-yellow'>Code Club</span>

      <button className='p-2' onClick={handleToggleMenu}>
        <IconMenu />
      </button>

      <Navbar
        onToggleMenu={handleToggleMenu}
        className={isMenuOpen ? 'rotate-0' : 'rotate-90'}
      />

      {isMenuOpen && <Layback />}
    </header>
  );
}

function Layback() {
  useLockBodyScroll();

  return (
    <div className='absolute top-0 left-0 w-full h-screen z-10 bg-layback'></div>
  );
}
