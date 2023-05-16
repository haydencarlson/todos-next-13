import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SignInButton, UserButton, SignedIn, SignedOut } from '@clerk/nextjs';
import CreateCardButton from './CreateCardButton';

export default function Navbar() {
  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link href='/' className='flex items-center'>
          <Image
            priority
            src='/todos-logo.png'
            alt='logo'
            width='25'
            height='25'
            className='w-10 h-10 mr-2'
          />
        </Link>
        <div className='flex md:order-2 gap-5 items-center'>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
            <CreateCardButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal' />
          </SignedOut>
        </div>
      </div>
    </nav>
  );
}
