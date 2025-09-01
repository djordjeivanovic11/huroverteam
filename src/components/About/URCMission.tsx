import React from "react";
import Image from "next/image";
import Link from "next/link";


function URCMission() {
  return (
    <section className="relative w-full bg-black text-white flex flex-col md:flex-row items-center">
      {/* Left Side - Full Height Image */}
      <div className="w-full md:w-1/2 h-[300px] md:h-screen relative">
        <Image
          src="/images/about/urc.webp"
          alt="URC Competition in Utah"
          layout="fill"
          objectFit="cover"
          className="opacity-90"
        />
      </div>
      
      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 py-12 px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          What is the University Rover Challenge?
        </h1>

        <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
          The <span className="text-[#E63946] font-semibold">University Rover Challenge (URC)</span> is the world&apos;s premier robotics 
          competition for university students, organized by the{" "}
          <Link
            href="https://urc.marssociety.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#E63946] hover:text-[#ff6b6b] transition-colors"
          >
            Mars Society
          </Link>.
        </p>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
          Held annually in southern Utah, the challenge brings together 100+ participants from over a dozen 
          countries. Teams compete to build the next generation of Mars rovers, designed to assist astronauts 
          in future missions to the Red Planet.
        </p>
        <p className="mt-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
          The competition pushes boundaries in autonomous navigation, scientific discovery, and robotic dexterity, 
          creating real-world space exploration scenarios. Students apply engineering, AI, and human-robot interaction 
          to drive innovation.
        </p>

        {/* Mission Details Button */}
        <div className="mt-8">
          <Link href="/docs/urc_mission_details.pdf" passHref
              download
              className="px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold text-white bg-[#E63946] rounded-lg shadow-lg hover:bg-[#ff4d4d] transition-transform transform hover:scale-105"
            >
              Download Mission Details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default URCMission;
