import React from 'react';
import {
  FaSmile, // Happy Clients
  FaProjectDiagram, // Projects Done
  FaUsers, // Qualified Employees
  FaBuilding, // Office Branches
} from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      value: '50+',
      label: 'Happy Clients',
      icon: <FaSmile className="text-3xl" />,
    },
    {
      value: '25+',
      label: 'Projects Done',
      icon: <FaProjectDiagram className="text-3xl" />,
    },
    {
      value: '150+',
      label: 'Qualified Employees',
      icon: <FaUsers className="text-3xl" />,
    },
    {
      value: '3',
      label: 'Office Branches',
      icon: <FaBuilding className="text-3xl" />,
    },
  ];

  return (
    <section
      className="relative py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage:
          'url("https://ik.imagekit.io/h6pmd5ivo/century%201/martin-adams-a_PDPUPuNZ8-unsplash.jpg?updatedAt=1742845627632")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="max-w-7xl mx-auto px-4 lg:py-10 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 p-6 rounded-lg shadow-sm text-center transition-all hover:shadow-md flex flex-col items-center cursor-pointer backdrop-blur-sm hover:backdrop-blur-none"
            >
              <div className="bg-[#4dbf88] text-white p-3 rounded-full mb-4">
                {stat.icon}
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-[#4dbf88] mb-2">
                {stat.value}
              </p>
              <p className="text-gray-700 text-sm sm:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
