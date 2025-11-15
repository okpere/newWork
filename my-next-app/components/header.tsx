'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full bg-[#f5f5f5]'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
        {/* LOGO */}
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='My App Logo'
            width={120}
            height={40}
            className='object-contain'
          />
        </Link>

        {/* NAV LINKS */}
        <nav className='hidden md:flex space-x-10 text-[17px] font-medium'>
          <Link href='/' className='hover:text-gray-700 transition'>
            Home
          </Link>
          <Link href='/offers' className='hover:text-gray-700 transition'>
            Special Offers
          </Link>
          <Link href='/contacts' className='hover:text-gray-700 transition'>
            Contacts
          </Link>
        </nav>

        {/* BUTTON */}
        <Link href='/waitlist'>
          <button className='px-6 py-2 rounded-xl border border-gray-900 text-gray-900 font-semibold hover:bg-gray-100 transition'>
            Join Our Waitlist
          </button>
        </Link>
      </div>
    </header>
  );
}
