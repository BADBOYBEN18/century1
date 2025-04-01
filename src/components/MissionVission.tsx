import React from 'react';
import {
  FaHandshake,
  FaHeart, // Office Branches
  FaLightbulb,
  FaStar,
} from 'react-icons/fa';

const MissionSection = () => {
  const stats = [
    {
      title: 'OUR MISSION',
      label:
        ' Our mission is to empower businesses and residences with durable, innovative energy infrastructure, driving the adoption of greener energy alternatives, and making advanced energy technologies accessible to all who need them',
      icon: <FaHandshake className="text-3xl" />,
    },
    {
      title: 'OUR VISSION',
      label:
        'To be a frontrunner in Nigeria’s clean energy drive, revolutionizing access to sustainable and cost-efficient energy solutions for businesses and homes.',
      icon: <FaLightbulb className="text-3xl" />,
    },
    {
      title: 'OUR VALUES',
      label:
        'We are driven by a steadfast commitment to innovation, quality, and customer satisfaction. Our core values emphasize integrity.',
      icon: <FaStar className="text-3xl" />,
    },
    {
      title: 'OUR COMMITMENT',
      label:
        'Century1 Limited drives innovation and sustainability in energy through end-to-end services-design, installation, and maintenance delivering safe, efficient, and eco-friendly solutions that exceed client expectations.',
      icon: <FaHeart className="text-3xl" />,
    },
  ];

  return (
    <section
      className="relative py-12  "
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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/90 p-6 rounded-lg  shadow-sm text-center hover:shadow-md flex flex-col items-center cursor-pointer hover:scale-95 transition-all"
            >
              <div className="bg-[#4dbf88] h-14 w-14 lg:h-16 lg:w-16 flex items-center justify-center logo text-white p-3 rounded-full mb-4">
                {stat.icon}
              </div>
              <p className="text-xl sm:text-2xl font-bold text-[#4dbf88] mb-2">
                {stat.title}
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

export default MissionSection;
