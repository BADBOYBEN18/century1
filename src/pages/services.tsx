/* eslint-disable @next/next/no-img-element */
// import { IoMdShare } from 'react-icons/io';
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import { LogoTicker } from '@/components/LogoTicker';
import GasServicesSection from '@/components/GasServicesSection';
import { FaGasPump } from 'react-icons/fa';

const Services = () => {
  return (
    <Layout>
      <Head>
        <title>Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Services page for century1 limited Energy service company."
        />
      </Head>
      <div className="font-main overflow-clip">
        <header className="pb-4 md:pb-8 lg:pb-10">
          <div className="relative h-[40vh] flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://ik.imagekit.io/h6pmd5ivo/century%201/istockphoto-1129775014-1024x1024.jpg?updatedAt=1743459517286')`,
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Centered Content */}
            <div className="relative z-10 text-center text-white px-4 space-y-7 lg:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
            </div>
          </div>
        </header>

        <section className="py-14 lg:pb-[160px] ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Our Energy Solutions
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive gas and renewable energy services for industries,
                businesses, and households
              </p>
            </div>

            <GasServicesSection />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* <!-- Service Card 1: Gas Trading --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <FaGasPump className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      CNG/LPG/LNG Gas Trading & Sourcing
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Leader in local and international trading, sourcing, and
                    distribution of compressed natural gas (CNG), liquefied
                    petroleum gas (LPG), and liquefied natural gas (LNG).
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Local & International Gas Procurement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Wholesale & Retail Distribution
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Safe Storage & Logistics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Regulatory Compliance & Safety Standards
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Service Card 2: Gas Equipment --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      Gas Equipment Supply
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    High-quality gas equipment to support CNG, LPG, and LNG
                    operations, ensuring efficiency, safety, and reliability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Supply of LNG, LPG & CNG Equipment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Installation & Maintenance Services
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Safety & Compliance Systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Customized Industrial Solutions
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Service Card 3: Auto Gas Conversion --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      Auto Gas Conversion Solutions
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Leading Nigeria&apos;s transition to eco-friendly
                    gas-powered transportation with CNG and LPG vehicle
                    conversions.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        CNG & LPG Auto Gas Conversion Kits
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Fleet Management & Optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Technical Support & Training
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 `0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Carbon Emission Reduction
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Service Card 4: Gas-to-Power --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      Gas-to-Power Solutions
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Transforming Nigeria&apos;s energy landscape with efficient,
                    cleaner alternatives for industrial and commercial power
                    needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Natural Gas Power Generation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Hybrid Energy Systems
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Infrastructure Design & Implementation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Energy Cost Optimization
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Service Card 5: Renewable Energy --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-teal-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      Renewable Energy Solutions
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Supporting businesses and industries in adopting clean
                    energy alternatives to ensure environmental sustainability.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Sustainable Energy Consulting
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Energy Efficiency Optimization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Carbon Emission Reduction Initiatives
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- Service Card 6: Bulk CNG Sales --> */}
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-cyan-100 p-3 rounded-full">
                      <svg
                        className="w-6 h-6 text-cyan-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 ml-4">
                      Bulk CNG Sales
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Cost-effective compressed natural gas solutions for
                    large-scale industrial and commercial energy needs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Industrial-Grade CNG Supply
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Customized Delivery Schedules
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        High-Capacity Storage Solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="ml-2 text-gray-700">
                        Volume-Based Pricing Models
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center bg-gradient-to-r from-[#4dbf88] to-[#2d9b6c] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Driving Energy Innovation Forward
              </h3>
              <p className="mb-6 max-w-2xl mx-auto">
                Century1 Limited continues to pioneer excellence through
                strategic collaborations and sustainable energy solutions.
              </p>
              <Link href="/contact">
                <button className="bg-white text-[#2d9b6c] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:scale-105">
                  Contact us now!
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="pb-14 lg:pb-[160px]">
          <LogoTicker />
        </section>
      </div>
    </Layout>
  );
};

export default Services;
