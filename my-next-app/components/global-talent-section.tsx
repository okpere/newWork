import { Button } from '@/components/ui/button';

export default function GlobalTalentSection() {
  return (
    <section className='relative overflow-hidden bg-sky-200 py-20'>
      <div className='container relative z-10 mx-auto px-6 text-center'>
        <div className='mx-auto max-w-3xl space-y-8'>
          <h2 className='text-4xl font-bold leading-tight text-slate-900 sm:text-5xl'>
            Learn How to Securely
            <br />
            Hire Global Talent
          </h2>
          <div className='space-y-4 text-lg text-slate-700'>
            <p>
              Hosted by{' '}
              <a
                href='https://remoting.work'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold underline hover:text-slate-900'
              >
                remoting.work
              </a>
              , trusted by growing businesses worldwide.
            </p>
            <p>
              Learn how to hire securely, pay seamlessly, and grow globally.
            </p>
            <p className='text-base'>
              Join remoting.work's webinar to discover how modern businesses
              build teams that cross borders — safely and smartly.
            </p>
          </div>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='rounded-xl bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-pink-500'
            >
              Sign Up Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative avatars and icons */}
      <div className='pointer-events-none absolute inset-0'>
        {/* Top left avatars */}
        <div className='absolute left-8 top-12 h-12 w-12 overflow-hidden rounded-full bg-pink-300'></div>
        <div className='absolute left-24 top-32 h-16 w-16 overflow-hidden rounded-full bg-slate-800'></div>

        {/* Top right avatars */}
        <div className='absolute right-12 top-20 h-14 w-14 overflow-hidden rounded-full bg-orange-400'></div>
        <div className='absolute right-32 top-40 h-12 w-12 overflow-hidden rounded-full bg-blue-600'></div>

        {/* Bottom left avatars */}
        <div className='absolute bottom-32 left-12 h-20 w-20 overflow-hidden rounded-full bg-slate-700'></div>
        <div className='absolute bottom-12 left-40 h-14 w-14 overflow-hidden rounded-full bg-yellow-300'></div>

        {/* Bottom right avatars */}
        <div className='absolute bottom-20 right-24 h-12 w-12 overflow-hidden rounded-full bg-slate-600'></div>
        <div className='absolute bottom-40 right-12 h-16 w-16 overflow-hidden rounded-full bg-slate-800'></div>

        {/* Icons scattered around */}
        <div className='absolute left-20 top-1/2 text-slate-400'>
          <svg
            className='h-8 w-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
            />
          </svg>
        </div>
        <div className='absolute right-28 top-1/3 text-slate-400'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
            />
          </svg>
        </div>
        <div className='absolute bottom-1/3 right-20 text-slate-400'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        </div>
        <div className='absolute bottom-1/4 left-32 text-slate-400'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
        </div>
        <div className='absolute left-1/4 top-20 text-slate-400'>
          <svg
            className='h-8 w-8'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
            />
          </svg>
        </div>
        <div className='absolute right-1/4 top-24 text-slate-400'>
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z'
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
