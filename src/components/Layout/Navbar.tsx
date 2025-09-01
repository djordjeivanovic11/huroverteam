'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Team', href: '/team' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact/Options' },
  { name: 'Sponsors', href: '/sponsors' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='sticky top-0 left-0 w-full z-50 bg-[#1a1a1a] shadow-md transition-colors duration-300'>
      <nav className='container mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <Link href='/' onClick={closeMenu} className='flex items-center gap-3'>
          <Image
            src='/images/urc_logo.png'
            alt='Harvard Rover Team Logo'
            width={60}
            height={60}
            className='object-contain'
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center space-x-6'>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='font-medium text-[#A51C30] hover:text-[#D0202D] transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-2xl text-[#A51C30] focus:outline-none'
          aria-label='Toggle Menu'
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`
            fixed inset-0 bg-black bg-opacity-40 z-40
            transition-transform duration-300
            ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <div
            className='absolute inset-0'
            onClick={closeMenu}
            aria-hidden='true'
          />
          {/* Slide-out Panel */}
          <div
            className={`
              absolute right-0 top-0 w-3/4 max-w-sm h-full bg-[#1a1a1a] p-6
              transform transition-transform duration-300
              ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <button
              onClick={closeMenu}
              className='text-2xl text-[#A51C30] mb-6 focus:outline-none'
              aria-label='Close Menu'
            >
              <FaTimes />
            </button>

            <nav className='flex flex-col space-y-4'>
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className='text-lg font-medium text-[#A51C30] hover:text-[#D0202D] transition-colors'
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
