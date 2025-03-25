/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layout';
// import Link from 'next/link';
import Head from 'next/head';
// import { FaArrowRight } from 'react-icons/fa';
import MissionSection from '@/components/MissionVission';
import { LogoTicker } from '@/components/LogoTicker';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About us</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="About page for century1 limited" />
      </Head>
      <div className="font-main overflow-clip">
        <section className="pb-14 md:pb-20 lg:pb-25">
          <div className="relative h-[40vh] flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://ik.imagekit.io/h6pmd5ivo/century%201/about-us2.png?updatedAt=1742926287644')`,
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Centered Content */}
            <div className="relative z-10 text-center text-white px-4 space-y-7 lg:space-y-8">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                About us
              </h1>
            </div>
          </div>
        </section>

        <section className="pb-14 md:pb-20 lg:pb-28">
          <div className=" px-7 max-w-7xl mx-auto">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse lg:items-center">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/century%201/another.webp?updatedAt=1741904541352"
                alt="Century1 Limited"
                className="hidden w-1/2 sm:block lg:h-[30rem]"
                loading="lazy"
              />
              <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  About{' '}
                  <span className="text-[#4dbf88]">
                    Century<span className="text-[#e53344]">1</span>
                  </span>{' '}
                  Limited <br className="hidden xl:max-xl:block" />
                </h1>
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/century%201/another.webp?updatedAt=1741904541352"
                  alt="Century1 Limited"
                  className="pt-5 sm:hidden"
                  loading="lazy"
                />

                <p className="py-[24px] text-[#36485C] text-[12px] lg:text-[16px] md:text-justify">
                  Paradigm Creations Limited, established in 2012, is a
                  pioneering energy solutions company dedicated to advancing the
                  oil and gas industry. Initially focused on serving the
                  upstream sector, we have since expanded our expertise to offer
                  a wide range of energy solutions through our specialized
                  subsidiaries: PCL Power and PCL Gas. Our success is driven by
                  a skilled workforce and strategic international partnerships.
                  Our team, located in China, Nigeria, and the UK, brings
                  together a wealth of expertise and experience, ensuring
                  excellence in every project. The China team focuses on
                  precision manufacturing and quality control, leveraging
                  advanced technologies to produce durable and reliable
                  products. In Nigeria, our team addresses local market needs
                  and maintains close relationships with clients, providing
                  tailored solutions and exceptional customer service. Our UK
                  team is dedicated to strategic planning, global business
                  development, and maintaining our high standards of innovation
                  and quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-[160px]">
          <MissionSection />
        </section>

        {/* Logo Ticker Section */}
        <section className="pb-20 lg:pb-[160px]">
          <LogoTicker />
        </section>

        <section className="pb-20 lg:pb-[160px]">
          <div className="max-w-[30rem] md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4">
            <h1 className="text-[25px] md:text-[25px] lg:text-[40px] text-[#2E8B57] font-bold">
              Energy Solutions,{' '}
              <span className="text-[#006400]">Built to Last</span>
            </h1>
            <p className="text-gray-700 text-[12px] font-medium md:text-[14px] lg:text-[16px] pb-5 leading-relaxed">
              Here at century1 limited we strive to provide sustainable energy
              solutions and deliver reliable oil and gas solutions
              <br className="hidden lg:block" />
              while prioritizing environmental stewardship. Explore our{' '}
              <span className="text-[#2E8B57] font-medium">
                innovative operations
              </span>{' '}
              and learn how we&apos;re
              <br className="hidden lg:block" />
              powering communities while reducing our environmental footprint.
            </p>
            <button className="bg-[#2E8B57] hover:bg-[#006400] text-white text-[14px] lg:text-[18px] py-[10px] md:py-[14px] px-[28px] lg:px-[36px] rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Get in touch
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
