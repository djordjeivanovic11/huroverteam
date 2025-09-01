'use client';
import React from 'react';

const SponsorsContact: React.FC = () => {
  return (
    <section className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold mb-6 text-[#A51C30]'>
          Interested in Sponsoring Us?
        </h2>
        <p className='max-w-3xl mx-auto mb-6 leading-relaxed'>
          Although Harvard University has graciously provided initial funding,
          we still depend on corporate sponsorships to help our team reach its
          full potential. These contributions are essential for covering
          expenses related to training, machining, hardware purchases, and
          competing in the URC.
        </p>
        <p className='max-w-3xl mx-auto leading-relaxed'>
          Contact us at{' '}
          <a
            href='mailto:hurcofficial@gmail.com'
            className='underline text-blue-600'
          >
            hurcofficial@gmail.com
          </a>{' '}
          for any inquiries. We look forward to hearing from you!
        </p>
      </div>
    </section>
  );
};

export default SponsorsContact;
