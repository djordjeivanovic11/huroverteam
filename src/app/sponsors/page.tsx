'use client';
import React from 'react';
import SponsorsHero from '@/components/Sponsors/SponsorsHero';
import SponsorsGrid from '@/components/Sponsors/SponsorsGrid';
import SponsorsContact from '@/components/Sponsors/SponsorsContact';

const SponsorsPage: React.FC = () => {
  return (
    <>
      <SponsorsHero />
      <SponsorsGrid />
      <SponsorsContact />
    </>
  );
};

export default SponsorsPage;
