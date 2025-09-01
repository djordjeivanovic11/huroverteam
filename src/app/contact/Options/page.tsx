import React from 'react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <section className='relative w-full h-screen flex items-center justify-center bg-black overflow-hidden'>
      <video
        autoPlay
        loop
        muted
        playsInline
        className='absolute inset-0 w-full h-full object-cover z-0'
      >
        <source src='/videos/bg_video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <div className='relative z-10 bg-rose-950 bg-opacity-60 p-10 rounded-2xl shadow-2xl w-11/12 max-w-md text-center'>
        <h2 className='text-4xl font-extrabold text-white mb-6'>
          I AM A POTENTIAL...
        </h2>

        <div className='flex flex-col gap-4'>
          <Link href='/contact/Sponsor' passHref>
            <button className='w-full bg-red-900 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-950 transition duration-200'>
              Sponsor
            </button>
          </Link>
          <Link
            href='https://forms.gle/PZfqdjwReBTcqG1B6'
            target='_blank'
            rel='noopener noreferrer'
            passHref
          >
            <button className='w-full bg-red-900 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-red-950 transition duration-200'>
              Team Member
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
