import React from 'react';
import {
  FaBolt,
  FaChartLine,
  FaIndustry,
  FaShieldAlt,
  FaGlobeAmericas,
} from 'react-icons/fa';

const NotableProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'PRMS Station Supply to NGML',
      description:
        'Delivered Pressure Regulating & Metering Stations (PRMS) to Nigeria Gas Marketing Limited (NGML).',
      achievement:
        "Ensured seamless integration into NGML's gas infrastructure for enhanced efficiency.",
      icon: <FaBolt className="text-[#4dbf88] text-xl" />,
    },
    {
      id: 2,
      title: 'Consulting for CIMC-Enric',
      description:
        'Provided strategic consulting for CIMC-Enric in the purchase of 10,000 MT spherical tanks.',
      achievement:
        'Facilitated procurement for Falcon Corporation, ensuring high-quality storage solutions.',
      icon: <FaChartLine className="text-[#4dbf88] text-xl" />,
    },
    {
      id: 3,
      title: 'Supply of Gas Generators to PCL',
      description:
        'Successfully supplied high-performance gas generators to PCL, enhancing their energy efficiency.',
      achievement:
        'Supported industrial clients in adopting cost-effective and sustainable power solutions.',
      icon: <FaIndustry className="text-[#4dbf88] text-xl" />,
    },
    {
      id: 4,
      title: 'Health & Safety Equipment Supply',
      description:
        'Delivered essential health and safety equipment to various clients in the gas and energy sectors.',
      achievement:
        'Ensured compliance with industry safety standards to improve workplace security.',
      icon: <FaShieldAlt className="text-[#4dbf88] text-xl" />,
    },
    {
      id: 5,
      title: 'Country Representation for Nirmal Industries',
      description:
        'Appointed as the official country representative for Nirmal Industries, a renowned global energy solutions provider.',
      achievement:
        'Strengthened industry partnerships, bringing innovative gas technology and equipment to Nigeria.',
      icon: <FaGlobeAmericas className="text-[#4dbf88] text-xl" />,
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-[#4dbf88]">Century</span>
            <span className="text-[#d23e3e]">1</span> Limited:{' '}
            <span className="text-[#4dbf88]">Achievements & Milestones</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Successfully executed high-impact projects, establishing ourselves
            as a trusted leader in gas trading, equipment supply, and energy
            solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer duration-300 border-l-4 border-[#4dbf88] hover:-translate-y-1"
            >
              <div className="flex items-start mb-4">
                <div className="bg-[#4dbf88]/10 p-3 rounded-full mr-4">
                  {project.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                <p className="text-gray-700 font-medium">
                  <span className="text-[#4dbf88] font-bold">Achievement:</span>{' '}
                  {project.achievement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotableProjects;
