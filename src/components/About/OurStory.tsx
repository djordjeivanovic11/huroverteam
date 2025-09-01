import React from "react";
import Image from "next/image";

export default function OurStory() {
    return (
        <section className="relative w-full bg-black text-white flex flex-row items-center">
            {/* Left Side - Text Content */}
            <div className="w-1/2 py-12 px-6 md:px-12 lg:px-20 flex flex-col justify-center items-center text-center md:items-start md:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                    Our Story
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-300 leading-relaxed">
                    Our dear leader <span className="text-[#E63946] font-semibold">Jannah El Rayees</span> founded the Rover Team as part of the Harvard Undergraduate Robotics Club, envisioning a transformation into a competitive team with long-term projects that develop practical skills in mechanical, electrical, and software engineering.
                </p>
                <p className="mt-4 text-lg md:text-xl text-neutral-300 leading-relaxed">
                    Within weeks, her vision captivated the Harvard engineering community. We rapidly grew to about 30 members in the first week, many of whom remain full-time members, leaders, and educators. Through strong leadership and unwavering passion, our team has built a foundation of fun and innovation.
                </p>
            </div>

            {/* Right Side - Full Height Image */}
            <div className="w-1/2 h-[300px] md:h-screen relative min-w-[50%]">
                <Image
                    src="/images/about/team_break.webp"
                    alt="Our Story Image"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-90"
                />
            </div>
        </section>
    );
}
