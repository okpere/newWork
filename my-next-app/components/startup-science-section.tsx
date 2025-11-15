import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function StartUpScienceSection() {
  return (
    <section className='bg-white py-20'>
      <div className='container mx-auto px-6'>
        <div className='grid items-center gap-12 lg:grid-cols-2'>
          <div className='order-2 lg:order-1'>
            <Image
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
              alt='Team collaborating at a table'
              width={600}
              height={400}
              className='w-full rounded-3xl object-cover shadow-lg'
            />
          </div>
          <div className='order-1 space-y-6 lg:order-2'>
            <h2 className='text-4xl font-bold leading-tight text-slate-900 sm:text-5xl'>
              Start Up{' '}
              <span className='relative inline-block'>
                <span className='relative z-10'>Science</span>
                <span className='absolute inset-x-0 bottom-1 h-3 rounded-full bg-sky-300/70'></span>
              </span>
            </h2>
            <p className='text-lg text-slate-600'>
              Through our partnership with StandUp Science California, 360iHub
              helps you gain the skills, mindset, and global access you need to
              stand out and get hired.
            </p>
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
                  className='h-5 w-5 text-sky-500'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path d='M4.5 3.5a1 1 0 0 1 1.5-.866l10 5.5a1 1 0 0 1 0 1.732l-10 5.5A1 1 0 0 1 4.5 14.5V3.5Z' />
                </svg>
                View Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
