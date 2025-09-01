'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TeamSection {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  fullDescription?: string; // expanded content
}

const teamSections: TeamSection[] = [
  {
    id: 1,
    title: 'Mechanical Team',
    subtitle: 'Built for Mars',
    description:
      'From terrain-crushing suspension to precision robotic arms, our mechanical team builds the bones and muscles of the rover for real Martian conditions.',
    fullDescription:
      'The Mechanical Team is responsible for designing and building the physical structure and motion systems that allow the rover to navigate rugged terrain and interact with its environment. The rover must travel up to 1 km from the base station in the harsh desert terrain of Utah while remaining within strict weight, size, and environmental protection limits. To achieve this, we’ve engineered a lightweight, welded aluminum chassis paired with a rocker-bogie suspension system for stability on uneven ground. The suspension includes shocks for added damping and a lightweight differential bar that balances movement between the two sides of the rover. Six high-torque motors with planetary gearboxes independently drive each wheel, enabling speeds exceeding 1 km/h across challenging terrain. Our current robotic arm features 5 degrees of freedom, constructed from aluminum and carbon fiber to ensure both strength and low weight. It can carry loads up to 5kg and uses harmonic drive gearboxes at the shoulder and elbow joints—providing zero backlash, high torque transmission, and a compact form factor. We are currently redesigning the arm to offer 6 degrees of freedom and further reduce its weight, while transitioning from stepper motors to brushless DC (BLDC) motors with FOC control for smoother and more powerful actuation. To protect sensitive internal systems and science experiments, we are designing UV-resistant shielding for chassis panels to defend against solar exposure and dust. The mechanical team is also exploring a potential shift to a 4-wheel configuration to simplify mechanical complexity while retaining terrain adaptability. Every component—from drivetrain to manipulator—is carefully prototyped and refined to ensure performance, durability, and compliance with competition constraints.',
    imageSrc: '/images/teams/MechTeam.webp',
    imageAlt: 'Mechanical Team',
  },
  {
    id: 2,
    title: 'Electrical Team',
    subtitle: 'Powering Possibilities',
    description:
      "From custom PCBs to centimeter-accurate GPS and FOC motor control, here's how our electrical team is powering the future of planetary exploration.",
    fullDescription:
      'The electrical subteam plays a critical role in developing the core systems that bring the rover to life for the University Rover Challenge. Our work spans power distribution, motor control, embedded systems, RF communication, and system-wide integration through ROS. Our drivetrain is powered by a 24V battery system supplying six 260W brushless DC motors, each controlled by Flipsky Mini FESC6.7 ESCs with sinusoidal FOC for smooth, low-speed precision. The 5-DOF arm and end-effector are currently driven by stepper motors, though we are working on a redesign using brushless motors with FOC for greater control and accuracy. At the heart of the system is an NVIDIA Jetson Orin Nano, which runs the entire ROS stack and provides a centralized interface to all electrical subsystems. We’ve configured it for VPN-enabled SSH access, allowing for streamlined collaboration across subteams. For localization, we’re using dual GNSS modules with RTK for centimeter-level accuracy, and for wireless telemetry, we operate over the 900 MHz band—offering long range while enabling future upgrades like frequency switching for higher data rates at short range. Looking ahead, we’re migrating from off-the-shelf electronics to custom PCBs to reduce wiring complexity, improve reliability, and enable a more modular and maintainable architecture.',
    imageSrc: '/images/teams/ElectricalTeam.webp',
    imageAlt: 'Electrical Team',
  },
  {
    id: 3,
    title: 'Software Team',
    subtitle: 'Code & Creativity',
    description:
      'From real-time vision to plug-and-play upgrades, our software system runs everywhere—from the lab to the desert—without skipping a beat.',
    fullDescription:
      'The Software Team builds the core intelligence that powers every aspect of the rover—from low-level control to high-level autonomy. Every system, from our field rover to our simulator and indoor test rigs, runs the same ROS 2 stack on an NVIDIA Jetson, ensuring that code behaves identically in the lab and in Mars-like terrain. For navigation, we blend centimeter-accurate RTK GPS with visual and inertial odometry to achieve precise localization, while GPU-accelerated vision models detect hazards and science targets in under 10 milliseconds. Our infrastructure is built for robustness: automatic thermal and power monitors feed into behavior trees that implement fallback routines if a sensor fails or a motor overheats. Thanks to wireless DDS networking and containerized nodes, we can hot-swap sensors, replay missions in simulation, or push software updates—all without disassembling the rover. Looking forward, the system is built to support next-generation AI models, including terrain classification and wheel-slip prediction, via modular drop-in ports. Our live mission-control dashboard gives real-time feedback on battery levels, map location, camera feeds, and alerts, keeping both engineers and judges informed during missions.',
    imageSrc: '/images/teams/SoftwareTeam.webp',
    imageAlt: 'Software Team',
  },
  {
    id: 4,
    title: 'Science Team',
    subtitle: 'Research & Innovation',
    description:
      'From spectrometry to subsurface drilling, our science team designs experiments to uncover signs of life—right from the Martian soil.',
    fullDescription:
      'The Science Team is responsible for designing and executing the rover’s environmental and geological experiments during the URC science mission. These experiments return critical data to scientists, including stratigraphic profiles, subsurface humidity and temperature, magnetic field readings, and atmospheric composition. A core focus is our proof-of-life testing, which centers around detecting protein concentrations in the soil. To do this, we collect subsurface samples up to 16cm deep using an auger drill and analyze them using two protein-sensitive chemical tests for redundancy. A custom-built light spectrometer measures chemical absorbance to quantify protein presence. Since standard lab spectrophotometers are too large and heavy, we are collaborating with the Electrical Team and Harvard faculty to miniaturize our design for on-board use—eliminating the need for bulky equipment like a centrifuge. Additional sensors mounted on the rover collect real-time data on temperature, light levels, atmospheric makeup, and magnetic field orientation. All data is processed onboard and transmitted to the control team. We are also developing simulated Martian soil in collaboration with faculty to prototype and validate our systems in realistic conditions. The science mission presents unique engineering challenges, requiring rapid prototyping and careful trade-offs between experimental performance and constraints like weight, cost, time, and space.',
    imageSrc: '/images/teams/ScienceTeam.webp',
    imageAlt: 'Science Team',
  },
];

const TeamPage: React.FC = () => {
  const [expandedTeamId, setExpandedTeamId] = useState<number | null>(null);
  const expandedTeam = teamSections.find(
    (section) => section.id === expandedTeamId
  );

  useEffect(() => {
    document.body.style.overflow = expandedTeamId !== null ? 'hidden' : '';
  }, [expandedTeamId]);

  return (
    <div className='bg-black text-white py-16 relative min-h-screen'>
      {/* Page Title */}
      <div className='container mx-auto px-4 text-center mb-12'>
        <h1 className='text-4xl sm:text-5xl font-bold mb-4 tracking-wide'>
          Meet Our Team
        </h1>
        <p className='text-lg sm:text-xl text-gray-400'>
          Dedicated to Innovation, Excellence, and Teamwork
        </p>
      </div>

      {/* Team Cards Grid */}
      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12'>
        {teamSections.map((section) => (
          <div
            key={section.id}
            className='bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer'
            onClick={() => setExpandedTeamId(section.id)}
          >
            <div className='relative h-64 w-full'>
              <Image
                src={section.imageSrc}
                alt={section.imageAlt}
                fill
                className='rounded-t-lg object-cover'
                priority
              />
            </div>
            <div className='p-6'>
              <h2 className='text-2xl font-semibold mb-1 text-[#E63946]'>
                {section.title}
              </h2>
              <h3 className='text-lg font-medium mb-3 text-gray-300'>
                {section.subtitle}
              </h3>
              <p className='text-gray-400'>{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expanded Modal */}
      {expandedTeam && (
        <div
          className='fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center px-4'
          role='dialog'
          aria-modal='true'
          aria-labelledby='modal-title'
          onClick={() => setExpandedTeamId(null)} // Clicking overlay closes modal
        >
          <div
            className='relative bg-[#111] text-white rounded-xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col'
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing modal when clicking inside content
          >
            {/* Close Button */}
            <button
              onClick={() => setExpandedTeamId(null)}
              className='absolute top-4 right-4 text-3xl text-gray-400 hover:text-[#E63946] transition'
              aria-label='Close'
            >
              ×
            </button>

            {/* Content */}
            <div className='relative w-full h-64 md:h-80'>
              <Image
                src={expandedTeam.imageSrc}
                alt={expandedTeam.imageAlt}
                fill
                className='rounded-t-xl object-cover'
                priority
              />
            </div>
            <div className='p-8 overflow-y-auto no-scrollbar flex-1'>
              <h2
                id='modal-title'
                className='text-3xl font-bold mb-2 text-[#E63946]'
              >
                {expandedTeam.title}
              </h2>
              <h3 className='text-xl mb-4 text-gray-300'>
                {expandedTeam.subtitle}
              </h3>
              <p className='text-gray-400 text-lg leading-relaxed mb-4'>
                {expandedTeam.description}
              </p>
              <p className='text-gray-300 text-base leading-relaxed whitespace-pre-line'>
                {expandedTeam.fullDescription}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Modal Animation */}
      <style jsx global>{`
        @keyframes fadeInAndScale {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeInAndScale {
          animation: fadeInAndScale 0.3s ease-out forwards;
        }

        /* Hide scrollbar but allow scroll */
        .no-scrollbar {
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Edge */
        }
      `}</style>
    </div>
  );
};

export default TeamPage;
