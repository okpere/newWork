export default function Footer() {
  return (
    <footer className='bg-slate-900 py-16 text-white'>
      <div className='container mx-auto px-6'>
        <div className='grid gap-12 md:grid-cols-4'>
          {/* Logo and description */}
          <div className='space-y-4'>
            <div className='flex items-center gap-1'>
              <span className='text-2xl font-bold'>
                <span className='text-pink-500'>360</span>
                <span className='text-yellow-400'>i</span>
                <span className='text-white'>Hub</span>
              </span>
            </div>
            <p className='text-sm text-slate-400'>
              Connecting businesses, talent, and global opportunities.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className='mb-4 font-semibold'>Navigation</h3>
            <ul className='space-y-3 text-sm text-slate-400'>
              <li>
                <a href='/' className='hover:text-white transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a
                  href='/programs'
                  className='hover:text-white transition-colors'
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href='/special-offers'
                  className='hover:text-white transition-colors'
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href='/contacts'
                  className='hover:text-white transition-colors'
                >
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className='mb-4 font-semibold'>Resources</h3>
            <ul className='space-y-3 text-sm text-slate-400'>
              <li>
                <a href='/about' className='hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='/blog' className='hover:text-white transition-colors'>
                  Blog
                </a>
              </li>
              <li>
                <a href='/faq' className='hover:text-white transition-colors'>
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href='/support'
                  className='hover:text-white transition-colors'
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='mb-4 font-semibold'>Get in Touch</h3>
            <ul className='space-y-3 text-sm text-slate-400'>
              <li>
                <a
                  href='mailto:hello@360ihub.com'
                  className='hover:text-white transition-colors'
                >
                  hello@360ihub.com
                </a>
              </li>
              <li>
                <a
                  href='tel:+1234567890'
                  className='hover:text-white transition-colors'
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400'>
          <p>&copy; {new Date().getFullYear()} 360iHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
