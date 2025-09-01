'use client';
import React from 'react';
import Image from 'next/image';

const sponsors = [
  {
    name: 'IRLock',
    logo: '/images/sponsors/K08rwqVRISqAL0TwDs7Y_oppositeColors_02png.png',
  },
  { name: 'Bolt Depot', logo: '/images/sponsors/BD-logo.webp' },
  { name: 'Maxon', logo: '/images/sponsors/maxon_logo.webp' },
  { name: 'Rock West Composites', logo: '/images/sponsors/RWC_logo.webp' },
  { name: 'Harmonic Drive', logo: '/images/sponsors/HD_logo.webp' },
  { name: 'GoBuilda', logo: '/images/sponsors/GB_logo.webp' },
  { name: 'OnlineMetals', logo: '/images/sponsors/OM_logo.webp' },
];

const SponsorsGrid: React.FC = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        {/* Exactly 3 columns, 2 rows (since there are 6 sponsors) */}
        <div className='grid grid-cols-3 gap-8 place-items-center'>
          {sponsors.map((sponsor, idx) => (
            <div key={idx} className='relative w-full h-32'>
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                fill
                className='object-contain object-center'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsGrid;
