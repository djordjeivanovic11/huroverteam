import React from "react";
import Image from "next/image";

interface TeamSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  learnMoreLink?: string;
}

const teamSections: TeamSection[] = [
  {
    id: 1,
    title: "Mechanical Team",
    subtitle: "Precision & Innovation",
    description:
        "Our Mechanical Team specializes in designing innovative mechanical systems, ensuring every project runs with top-notch efficiency and functionality. Their cutting-edge designs set our projects apart.",
    imageSrc: "/images/MechTeam.jpg",
    imageAlt: "Mechanical Team",
    learnMoreLink: "#",
  },
  {
    id: 2,
    title: "Electrical Team",
    subtitle: "Powering Possibilities",
    description:
        "Our Electrical Team is dedicated to developing reliable electrical systems that power our designs with precision and safety, ensuring optimal performance at every stage.",
    imageSrc: "/images/ElectricalTeam.jpg",
    imageAlt: "Electrical Team",
    learnMoreLink: "#",
  },
  {
    id: 3,
    title: "Software Team",
    subtitle: "Code & Creativity",
    description:
        "Our Software Team creates cutting-edge software solutions that integrate seamlessly with our hardware, driving success with high-performance algorithms and scalable solutions.",
    imageSrc: "/images/SoftwareTeam.jpg",
    imageAlt: "Software Team",
    learnMoreLink: "#",
  },
  {
    id: 4,
    title: "Science Team",
    subtitle: "Research & Innovation",
    description:
        "Our Science Team applies advanced research and analytical methods to bridge the gap between theory and practical application, enriching every project with scientific insight.",
    imageSrc: "/images/ScienceTeam.jpg",
    imageAlt: "Science Team",
    learnMoreLink: "#",
  },
];

const TeamPage: React.FC = () => {
  return (
      <div className="bg-black text-white py-16">
        {/* Page Title */}
        <div className="container mx-auto px-4 text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 tracking-wide">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            Dedicated to Innovation, Excellence, and Teamwork
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamSections.map((section) => (
              <div
                  key={section.id}
                  className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-64">
                  <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-1 text-[#E63946]">
                    {section.title}
                  </h2>
                  <h3 className="text-lg font-medium mb-3 text-gray-300">
                    {section.subtitle}
                  </h3>
                  <p className="text-gray-400 mb-4">{section.description}</p>
                  {section.learnMoreLink && (
                      <a
                          href={section.learnMoreLink}
                          className="inline-block bg-[#E63946] hover:bg-[#D0202D] text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                      >
                        Learn More
                      </a>
                  )}
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default TeamPage;
