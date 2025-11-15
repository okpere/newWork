import Image from 'next/image';

import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className='bg-white'>
      <div className='container mx-auto grid items-center gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:py-24 xl:px-0'>
        <div className='max-w-xl space-y-6'>
          <h1 className='text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl'>
            Where Businesses, Talent, and Global{' '}
            <span className='relative inline-block'>
              <span className='relative z-10'>Opportunities</span>
              <span className='absolute inset-x-0 bottom-1 h-3 rounded-full bg-sky-300/70'></span>
            </span>
            <br className='hidden sm:block' />
            Meet
          </h1>
          <div className='space-y-3 text-lg text-slate-600'>
            <p>Amet nunc diam orci duis ut sit diam arcu, nec.</p>
            <p>Eleifend proin massa tincidunt viverra lectus pulvinar.</p>
            <p>Nunc ipsum est pellentesque turpis ultricies.</p>
          </div>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
            <Button
              size='lg'
              className='rounded-xl bg-pink-600 px-8 text-base font-semibold text-white shadow-sm hover:bg-pink-500'
            >
              Sign Up Now
            </Button>
            <a
              href='/demo'
              className='inline-flex items-center gap-2 text-base font-semibold text-sky-600 transition-colors hover:text-sky-700'
            >
              <svg
                aria-hidden='true'
                className='size-5 text-sky-500'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M4.5 3.5a1 1 0 0 1 1.5-.866l10 5.5a1 1 0 0 1 0 1.732l-10 5.5A1 1 0 0 1 4.5 14.5V3.5Z' />
              </svg>
              View Demo
            </a>
          </div>
        </div>
        <div className='relative h-full'>
          <div className='absolute -inset-x-6 -bottom-6 -top-6 rounded-4xl bg-linear-to-br from-sky-100/60 via-white to-pink-100/60 blur-2xl sm:-inset-x-8 sm:-bottom-8 sm:-top-8 lg:hidden' />
          <Image
            src='https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80'
            alt='Team celebrating in an office environment'
            width={600}
            height={520}
            priority
            className='relative z-10 w-full rounded-4xl border border-slate-200 object-cover shadow-xl'
            sizes='(min-width: 1024px) 520px, 100vw'
          />
        </div>
      </div>
    </section>
  );
}
