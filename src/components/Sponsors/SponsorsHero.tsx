"use client";
import React from "react";
import Image from "next/image";

const SponsorsHero: React.FC = () => {
  return (
    <section className="relative w-full h-[300px] flex items-center justify-center overflow-hidden">
      {/* Two side-by-side background images using your current file names */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 h-full relative">
          <Image
            src="/images/sponsors/sponsors_page.jpeg"
            alt="Sponsors Background Left"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="w-1/2 h-full relative">
          <Image
            src="/images/sponsors/team_photo2.jpg"
            alt="Sponsors Background Right"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Dark overlay to darken the images */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Overlay Text */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Thank You, Sponsors!
        </h1>
      </div>
    </section>
  );
};

export default SponsorsHero;
