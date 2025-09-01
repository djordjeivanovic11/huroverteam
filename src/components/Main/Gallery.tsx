import React from "react";
import Image from "next/image";

const GallerySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#A51C30] mb-8">
          Our Journey in Pictures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative group">
            <Image
              src="/images/FullRover.jpeg"
              alt="CAD Rendering of the Rover"
              width={600}
              height={400}
              className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-bold">The Rover in Action</p>
            </div>
          </div>

          <div className="relative group">
            <Image
              src="/images/team_photo1.jpeg"
              alt="Team Photo 1"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-bold">Our Dedicated Team</p>
            </div>
          </div>

          <div className="relative group">
            <Image
              src="/images/team_photo2.jpg"
              alt="Team Photo 2"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-bold">Building the Future</p>
            </div>
          </div>

          <div className="relative group">
            <Image
              src="/images/rover_testing.jpg"
              alt="Rover Testing"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-bold">Testing in the Field</p>
            </div>
          </div>

          <div className="relative group">
            <Image
              src="/images/team_meeting.jpg"
              alt="Team Meeting"
              width={400}
              height={300}
              className="rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-lg">
              <p className="text-white text-lg font-bold">Strategy & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
