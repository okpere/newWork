'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full bg-slate-900'>
      <div className='container mx-auto flex items-center justify-between px-6 py-4'>
        {/* LOGO */}
        <Link href='/'>
          <div className='flex items-center gap-1'>
            <span className='text-2xl font-bold'>
              <span className='text-pink-500'>360</span>
              <span className='text-yellow-400'>i</span>
              <span className='text-white'>Hub</span>
            </span>
          </div>
        </Link>

        {/* NAV LINKS */}
        <nav className='hidden md:flex space-x-10 text-base font-medium text-white'>
          <Link href='/' className='hover:text-slate-300 transition'>
            Home
          </Link>
          <Link href='/programs' className='hover:text-slate-300 transition'>
            Programs
          </Link>
          <Link
            href='/special-offers'
            className='hover:text-slate-300 transition'
          >
            Special Offers
          </Link>
          <Link href='/contacts' className='hover:text-slate-300 transition'>
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
}
