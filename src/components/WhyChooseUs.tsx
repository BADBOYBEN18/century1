import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose{' '}
            <span className="text-[#4dbf88]">
              Century<span className="text-[#e53344]">1</span>{' '}
            </span>
            Limited ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Century1 Limited, we don&apos;t just deliver gas solutions, we
            redefine them.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Innovation */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#4dbf88]/10 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-[#4dbf88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Innovation-Driven
            </h3>
            <p className="text-gray-600">
              We don’t just follow industry trends we set them. By integrating
              cutting-edge technology with proven gas solutions, we ensure
              maximum efficiency, safety, and performance for our clients.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#4dbf88]/10  p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-[#4dbf88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Unmatched Quality & Reliability
            </h3>
            <p className="text-gray-600">
              From sourcing premium equipment to executing seamless gas
              distribution, we uphold the highest standards—so you never have to
              compromise.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#4dbf88]/10 p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-[#4dbf88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Sustainability at Our Core
            </h3>
            <p className="text-gray-600">
              We believe in powering today without sacrificing tomorrow. Our
              eco-friendly practices reduce environmental impact while
              delivering the energy solutions of the future.
            </p>
          </div>

          {/* Customer-Centric */}
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-[#4dbf88]/10  p-4 rounded-full">
                <svg
                  className="w-8 h-8 text-[#4dbf88]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Your Success, Our Priority
            </h3>
            <p className="text-gray-600">
              Every client is unique, and so are our solutions. We provide
              customized support and flexible energy strategies designed to
              drive growth, streamline operations, and future-proof your
              business.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
      </div>
    </section>
  );
};

export default WhyChooseUs;
