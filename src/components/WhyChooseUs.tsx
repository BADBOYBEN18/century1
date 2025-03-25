import React from 'react';
import { FaLeaf, FaUserTie, FaShieldAlt, FaChartLine } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Sustainable Solutions',
      description:
        'We integrate renewable energy technologies with smart grid systems for eco-friendly power solutions.',
      icon: <FaLeaf className="w-8 h-8 text-green-500" />,
    },
    {
      title: 'Certified Experts',
      description:
        'Our energy specialists hold industry-leading certifications with 10+ years average field experience.',
      icon: <FaUserTie className="w-8 h-8 text-blue-500" />,
    },
    {
      title: 'Premium Components',
      description:
        'We source only Tier-1 equipment with extended warranties for maximum reliability.',
      icon: <FaShieldAlt className="w-8 h-8 text-amber-500" />,
    },
    {
      title: '24/7 Monitoring',
      description:
        'Our smart energy systems include round-the-clock performance tracking and rapid response.',
      icon: <FaChartLine className="w-8 h-8 text-purple-500" />,
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            WHY CHOOSE CENTURY1 LIMITED?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Century1 Limited, we combine innovation with sustainability to
            deliver energy solutions that power progress while protecting our
            planet.
          </p>
          <a
            href="/services"
            className="mt-8 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
          >
            VIEW ALL SERVICES
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-4 bg-gray-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
