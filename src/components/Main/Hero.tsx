import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/videos/bg_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-wide leading-tight drop-shadow-lg">
          Harvard Rover Team
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-neutral-50 max-w-2xl mx-auto leading-relaxed">
          Innovating the next generation of planetary exploration. Competing in the{" "}
          <Link
            href="https://urc.marssociety.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-[#E63946] hover:text-[#ff6b6b] transition-colors"
          >
            University Rover Challenge
          </Link>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/contact/Options"
            className="px-8 py-4 text-lg font-semibold text-white bg-[#E63946] rounded-lg shadow-lg hover:bg-[#ff4d4d] transition-transform transform hover:scale-105"
          >
            Join the Mission
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 text-lg font-semibold text-white border border-white rounded-lg shadow-lg hover:bg-white hover:text-black transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
