import React from 'react';
import Image from 'next/image';

const GallerySection: React.FC = () => {
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold text-center text-[#A51C30] mb-8'>
          Our Journey in Pictures
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='relative group'>
            <Image
              src='/images/about/about.webp'
              alt='Team at Work'
              width={600}
              height={400}
              className='rounded-lg shadow-lg transition-transform transform group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg'>
              <p className='text-white text-lg font-bold'>The Team at Work</p>
            </div>
          </div>

          <div className='relative group'>
            <Image
              src='/images/about/team_photo1.webp'
              alt='Team Photo 1'
              width={400}
              height={300}
              className='rounded-lg shadow-lg transition-transform transform group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg'>
              <p className='text-white text-lg font-bold'>Our Dedicated Team</p>
            </div>
          </div>

          <div className='relative group'>
            <Image
              src='/images/sponsors/team_photo2.webp'
              alt='Team Photo 2'
              width={400}
              height={300}
              className='rounded-lg shadow-lg transition-transform transform group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg'>
              <p className='text-white text-lg font-bold'>
                Building the Future
              </p>
            </div>
          </div>

          <div className='relative group'>
            <Image
              src='/images/teams/MechTeam.webp'
              alt='Mechanical Team'
              width={400}
              height={300}
              className='rounded-lg shadow-lg transition-transform transform group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg'>
              <p className='text-white text-lg font-bold'>
                Mechanical Excellence
              </p>
            </div>
          </div>

          <div className='relative group'>
            <Image
              src='/images/teams/SoftwareTeam.webp'
              alt='Software Team'
              width={400}
              height={300}
              className='rounded-lg shadow-lg transition-transform transform group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg'>
              <p className='text-white text-lg font-bold'>Code & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
