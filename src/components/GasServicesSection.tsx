/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import {
  FiZap,
  FiFilter,
  FiBarChart2,
  FiShield,
  FiLayers,
  FiTrendingUp,
  FiSettings,
  FiChevronDown,
  FiChevronUp,
} from 'react-icons/fi';
import { FaNetworkWired } from 'react-icons/fa';
const GasServicesSection = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <section className="py-8 md:py-12">
      <section className="space-y-4 md:space-y-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* PRMS Card */}
          <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiZap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Pressure Reduction & Metering Stations (PRMS)
                </h3>
              </div>
              <p className="text-gray-600 mb-6">
                Our PRMS solutions regulate and reduce high pipeline pressure to
                meet specific equipment requirements with accurate metering for
                billing and cost analysis.
              </p>

              <h4 className="font-medium text-gray-800 mb-3">Key Features:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FiZap className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-700">
                    Gas Regulators & Slam-Shut Valves
                  </span>
                </li>
                <li className="flex items-start">
                  <FiFilter className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-700">
                    Gas Filters & Isolation Valves
                  </span>
                </li>
                <li className="flex items-start">
                  <FiBarChart2 className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-700">
                    Gas Meters & Volume Correctors
                  </span>
                </li>
                <li className="flex items-start">
                  <FiShield className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5" />
                  <span className="ml-2 text-gray-700">
                    Safety Relief Valves & Monitoring Systems
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-auto rounded-xl overflow-hidden shadow-md relative">
            <img
              className="w-full h-full object-cover"
              src="https://ik.imagekit.io/h6pmd5ivo/century%201/prms%20image2.jpg?updatedAt=1747903285804"
              alt="PRMS Station"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6"></div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Gas Reticulation Card */}
            <div className="w-full lg:w-1/2 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <FaNetworkWired className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    Gas Pipeline Reticulation
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Comprehensive design, installation, and maintenance of gas
                  distribution networks from source to end-users with advanced
                  monitoring and safety systems.
                </p>

                <div
                  className={`space-y-4 ${showFullContent ? '' : 'max-h-64 overflow-hidden'}`}
                >
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                      <FiLayers className="mr-2" />
                      Key Components:
                    </h4>
                    <ul className="space-y-2 pl-7 list-disc text-gray-700">
                      <li>Custom network design and analysis</li>
                      <li>Integrated safety features and leak detection</li>
                      <li>Real-time monitoring technology</li>
                      <li>Pressure regulators and shut-off valves</li>
                      <li>System expansion planning</li>
                    </ul>
                  </div>

                  {showFullContent && (
                    <>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                          <FiTrendingUp className="mr-2" />
                          Benefits:
                        </h4>
                        <ul className="space-y-2 pl-7 list-disc text-gray-700">
                          <li>Reliable performance and consistent supply</li>
                          <li>Operational efficiency and cost reduction</li>
                          <li>Scalable infrastructure for future needs</li>
                          <li>Reduced environmental impact</li>
                          <li>Improved safety standards</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                          <FiSettings className="mr-2" />
                          Our Solutions:
                        </h4>
                        <ul className="space-y-2 pl-7 list-disc text-gray-700">
                          <li>Hydrate and corrosion prevention</li>
                          <li>Advanced pressure management</li>
                          <li>Blockage detection and maintenance</li>
                          <li>Residual life evaluation</li>
                          <li>Automated control systems</li>
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                <button
                  onClick={toggleContent}
                  className="mt-4 text-green-600 hover:text-green-800 font-medium flex items-center"
                >
                  {showFullContent ? (
                    <>
                      <span>Show Less</span>
                      <FiChevronUp className="w-4 h-4 ml-1" />
                    </>
                  ) : (
                    <>
                      <span>See More</span>
                      <FiChevronDown className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-auto rounded-xl overflow-hidden shadow-md relative">
              <img
                className="w-full h-full object-cover"
                src="https://ik.imagekit.io/h6pmd5ivo/century%201/pipeline2.jpg?updatedAt=1748032731266"
                alt="Gas Pipeline Network"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6"></div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default GasServicesSection;
