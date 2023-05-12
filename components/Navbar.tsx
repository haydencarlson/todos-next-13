import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut
} from '@clerk/nextjs';
import CreateCardButton from './CreateCardButton';

export default function Navbar() {
  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Image
            src='/todos-logo.png'
            alt='logo'
            width='25'
            height='25'
            className='w-10 h-10 mr-2'
          />
        </Link>
        <div className='flex md:order-2 gap-5 items-center'>
          <SignedIn>
            <UserButton />
            <CreateCardButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal' />
          </SignedOut>

          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
