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
        ' At Century1 Limited, we are redefining energy solutions with innovation, sustainability, and efficiency at our core. We provide cutting-edge CNG, LPG, and LNG solutions, ensuring businesses and communities access cleaner, smarter, and safer energy. With technology-driven expertise.',

      icon: <FaHandshake className="text-3xl" />,
    },
    {
      title: 'OUR VISION',
      label:
        'To lead Africa’s energy transformation with groundbreaking clean fuel solutions, shaping a future where sustainability meets high performance. We envision a world where industries thrive on safe, cost-effective, and eco-friendly energy—driving prosperity, innovation, and lasting change.',
      icon: <FaLightbulb className="text-3xl" />,
    },
    {
      title: 'OUR VALUES',
      label:
        'We drive innovation in energy solutions with integrity, blending technology with transparency. Sustainable practices and excellence in quality/safety define our mission to deliver impactful, future-ready energy services.',
      icon: <FaStar className="text-3xl" />,
    },
    {
      title: 'OUR COMMITMENT',
      label:
        'Century1 Limited isn’t just an energy provider we’re your partner in sustainable transformation. From expert-driven gas infrastructure to top-tier equipment and automation solutions, we ensure your energy needs are met with reliability, safety, and innovation. Our promise? To fuel businesses, homes, and industries with smarter, cleaner, and future-ready energy solutions.',
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
