/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Layout from '@/components/Layout';
// import Link from 'next/link';
import Head from 'next/head';
// import { FaArrowRight } from 'react-icons/fa';
import MissionSection from '@/components/MissionVission';
import { LogoTicker } from '@/components/LogoTicker';
import WhyChooseUs from '@/components/WhyChooseUs';

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
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                About us
              </h1>
            </div>
          </div>
        </section>

        <section className="pb-14 md:pb-20 lg:pb-28">
          <div className=" px-7 max-w-7xl mx-auto">
            <div className="flex flex-col gap-x-6 sm:flex-row-reverse lg:items-start">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/century%201/another.webp?updatedAt=1741904541352"
                alt="Century1 Limited"
                className="hidden w-1/2 sm:block lg:h-[30rem]"
                loading="lazy"
              />
              <div className="sm:w-1/2 lg:py-[26px] lg:pr-[26px]">
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

                <p className="py-[24px] text-[#36485C] text-[14px] lg:text-[16px] md:text-justify">
                  At Century1 Limited, we are committed to transforming the
                  energy sector by offering top-quality CNG/LPG sales,
                  distribution, equipment, and machinery—alongside cutting-edge
                  technology solutions tailored for the gas industry. Our
                  mission is to provide sustainable, efficient, and innovative
                  energy solutions that power businesses and communities while
                  ensuring safety, cost-effectiveness, and environmental
                  responsibility. <br />
                  <br />
                  With a deep understanding of clean energy alternatives,
                  Century1 Limited stands at the intersection of gas technology
                  and innovation. We are not just a leading provider of CNG and
                  LPG infrastructure—we also deliver advanced digital solutions,
                  automation systems, and smart analytics to optimize the gas
                  sector.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 lg:pb-24">
          <MissionSection />
        </section>

        <section className="pb-20 lg:pb-24">
          <WhyChooseUs />
        </section>

        {/* Logo Ticker Section */}
        <section className="pb-20 lg:pb-[160px]">
          <LogoTicker />
        </section>

        <section className="pb-20 lg:pb-[160px] container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[30rem] md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4">
            <h1 className="text-[25px] md:text-[25px] lg:text-[40px] text-[#2E8B57] font-bold">
              Leading Energy <span className="text-[#006400]">into a era</span>
            </h1>
            <p className="text-gray-700 text-[12px] font-medium md:text-[14px] lg:text-[16px] pb-5 leading-relaxed max-w-3xl mx-auto">
              The energy landscape is evolving, and Century1 Limited is powering
              the shift. As pioneers in gas innovation, digital transformation,
              and clean fuel distribution, we equip industries with
              high-performance technology and smart solutions.
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
