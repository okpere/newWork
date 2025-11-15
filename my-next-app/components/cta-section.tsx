import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className='py-20'>
      <div className='container mx-auto px-6 text-center'>
        <div className='mx-auto max-w-2xl space-y-8'>
          <div className='mx-auto w-full max-w-xl overflow-hidden rounded-3xl'>
            <Image
              src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
              alt='Team working together in a modern office'
              width={800}
              height={500}
              className='h-auto w-full object-cover'
            />
          </div>
          <div className='space-y-4'>
            <h2 className='text-4xl font-bold leading-tight text-slate-900 sm:text-5xl'>
              Jump into Our Great Programs
            </h2>
            <p className='text-xl text-slate-700'>
              And Unlock New Opportunities Today!
            </p>
          </div>
          <div className='flex justify-center'>
            <Button
              size='lg'
              className='rounded-xl bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-sm hover:bg-pink-500'
            >
              Join the Academy →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
