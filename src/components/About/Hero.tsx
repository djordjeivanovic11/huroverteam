import Link from "next/link";
import Image from "next/image";

const AboutHero: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center bg-black">
      {/* Left Side - Text Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
          Our Story: The Harvard Rover Team
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-neutral-50 max-w-lg md:max-w-md lg:max-w-xl">
          Founded in <span className="text-[#E63946] font-semibold">October 2024</span>,
          we are Harvard’s inaugural team on a mission to compete in the{" "}
          <Link
            href="https://urc.marssociety.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#E63946] hover:text-[#ff6b6b] transition-colors"
          >
            University Rover Challenge (URC)
          </Link>{" "}
          organized by the Mars Society. Our team is dedicated to building cutting-edge
          autonomous rovers for planetary exploration.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6">
          <Link
            href="/team"
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold text-white bg-[#E63946] rounded-lg shadow-lg hover:bg-[#ff4d4d] transition-transform transform hover:scale-105"
          >
            Meet the Team
          </Link>
          <Link
            href="/"
            className="px-6 sm:px-8 py-3 sm:py-4 text-lg font-semibold text-white border border-white rounded-lg shadow-lg hover:bg-white hover:text-black transition-transform transform hover:scale-105"
          >
            Our Mission
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full md:w-1/2 h-64 md:h-full relative">
        <Image
          src="/images/about/about.jpeg"
          alt="The Harvard Rover Team"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
    </section>
  );
}

export default AboutHero;
