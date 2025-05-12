/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import { LogoTicker } from '@/components/LogoTicker';
import { FaArrowRight } from 'react-icons/fa';
import Card from '@/components/Card';
import ServiceCard from '@/components/ServiceCard';

// Icons for the cards
import { IoMdCog } from 'react-icons/io';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';
import { BriefcaseIcon } from '@heroicons/react/20/solid';
import HeroSection from '@/components/HeroSlider';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/Testimonials';
import NotableProjects from '@/components/NotableProjects';
import Link from 'next/link';

const currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <div className="font-main">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Homepage for Century1 Limited, an  Oil, gas and Energy service company."
        />
      </Head>

      <Nav />

      {/* Hero Section */}
      <section className="pb-5 md:pb-9 lg:pb-16 ">
        <HeroSection />
      </section>

      {/* About Section */}
      <section className="pb-14 md:pb-20 lg:pb-32">
        <div className="animation px-7 max-w-7xl mx-auto">
          <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/century%201/anotherone.jpg?updatedAt=1741904825508"
              alt="Century1 Limited"
              className="hidden w-1/2 sm:block"
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
                src="https://ik.imagekit.io/h6pmd5ivo/century%201/anotherone.jpg?updatedAt=1742405455263"
                alt="Century1 Limited"
                className="pt-[24px] sm:hidden"
                loading="lazy"
              />

              <p className="py-[24px] text-[#36485C] text-[12px] lg:text-[18px] md:text-justify">
                Century1 Limited is a premier Oil and Energy service company
                serving the Energy sector since 2019. At Century1 Limited, we
                are committed to transforming the energy sector by offering
                top-quality CNG/LPG sales, distribution, equipment, and
                machinery—alongside cutting-edge technology solutions tailored
                for the gas industry. Our mission is to provide sustainable,
                efficient, and innovative energy solutions that power businesses
                and communities while ensuring safety, cost-effectiveness, and
                environmental responsibility.
              </p>

              <Link href={'/about'}>
                <button className="text-[#4dbf88] rounded-md lg:p-4 font-medium flex items-center gap-2 lg:text-[18px] transition-all lg:duration-300 p-2 duration-30 focus:bg-black/90 active:bg-black/50 lg:hover:bg-black/90 lg:hover:-translate-y-2 lg:hover:p-4">
                  Learn More
                  <span className="border border-[#e53344] rounded-full w-6 h-6 flex justify-center items-center">
                    <FaArrowRight className="text-[#e53344]" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* At a Glance Section */}
      <section className="pb-14 lg:pb-[100px]">
        <div className="sm:max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 flex-wrap px-4 md:flex-row">
          <div>
            <h1 className="uppercase text-center sm:text-balance text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] pb-2">
              <span className="text-[#4dbf88]">
                Century<span className="text-[#e53344]">1</span>
              </span>{' '}
              Limited at a glance
            </h1>
            <div className="border-2 border-[#e53344] mb-5 max-w-10 mx-auto"></div>
          </div>

          <div className="text-center sm:text-pretty grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              icon={<FaRegClock className="w-9 h-9" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Established in 2019"
              description="Founded to serve the upstream oil and gas sector, Century1 Limited has since expanded to offer diverse energy solutions through specialized subsidiaries."
              title={''}
            />
            <Card
              icon={<MdOutlineChangeCircle className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Sustainability drive"
              description="Century1 Limited is dedicated to promoting greener energy practices, helping to reduce carbon footprints and drive sustainable development globally."
              title={''}
            />
            <Card
              icon={<GiWorld className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Multinational"
              description="Our dedicated teams across Nigeris and our partner across Africa operate, bringing together expertise and innovation to meet diverse client needs."
              title={''}
            />
            <Card
              icon={<IoMdCog className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Leading-Edge Technology"
              description="We utilize advanced technology in our products and services, ensuring efficiency, safety, and reliability in all our energy solutions."
              title={''}
            />
            <Card
              icon={<FaHandshake className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Our Subsidiaries"
              description="Our subsidiaries, PCL Power and PCL Gas, specialize in renewable energy and gas infrastructure, ensuring comprehensive solutions for a sustainable future."
              title={''}
            />
            <Card
              icon={<BriefcaseIcon className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Expertise & Experience"
              description="Driven by a team of industry-leading professionals with extensive experience, our services consistently exceed expectations for quality and reliability."
              title={''}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="pb-14 sm:pb-20 lg:pb-[160px]">
        <div className="sm:max-w-7xl mx-auto flex flex-col items-center justify-center gap-9 flex-wrap px-4 lg:px-7">
          <div className="sm:space-y-[2rem] lg:space-y-[2.5rem]">
            <h1 className="text-center border-2 max-w-[30rem] mx-auto border-black/90 p-3 shadow-md rounded-md uppercase sm:text-balance text-[24px] font-medium text-[#172026] lg:leading-[58px] mb-4">
              OUR COMPANY SERVICES
            </h1>
            <p className="text-[12px] sm:text-sm lg:text-lg text-center">
              Century1 Limited specializes in delivering comprehensive energy
              solutions across the oil and gas value chain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ServiceCard
              imageUrl="https://ik.imagekit.io/h6pmd5ivo/century%201/rsz_bigstock-131155118.jpg?updatedAt=1741904280048"
              title="CNG/LPG/LNG Gas Trading & Sourcing  "
              description="Century1 Limited is a leader in the local and international trading, sourcing, and distribution of compressed natural gas (CNG), liquefied petroleum gas (LPG), and liquefied natural gas (LNG). We serve industries, commercial enterprises, and households by providing reliable, cost-effective energy solutions.  "
              buttonText="LEARN MORE"
            />
            <ServiceCard
              imageUrl="https://ik.imagekit.io/h6pmd5ivo/century%201/adigun-ampa-9U0vAXekzgU-unsplash.jpg?updatedAt=1742757586627"
              title="Auto Gas Conversion Solutions  "
              description="Century1 Limited is at the forefront of Nigeria’s transition to eco-friendly gas-powered transportation, helping businesses and individuals convert their vehicles to CNG and LPG fuels.
              - CNG & LPG Auto Gas Conversion Kits and Fleet Management & Optimization"
              buttonText="LEARN MORE"
            />
            <ServiceCard
              imageUrl="https://ik.imagekit.io/h6pmd5ivo/century%201/pcl%20gas.png?updatedAt=1742406564716"
              title="Gas Equipment Supply"
              description="We provide high-quality gas equipment to support CNG, LPG, and LNG operations, ensuring efficiency, safety, and reliability across different industries. 
              - Supply of LNG, LPG & CNG Equipment, Installation & Maintenance Services, Safety & Compliance Systems and Customized Industrial Solutions
              "
              buttonText="LEARN MORE"
            />
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section className="pb-20 lg:pb-[160px]">
        <TestimonialsSection />
      </section>

      {/* Notable Projects Section */}
      <section className="pb-20 lg:pb-[100px]">
        <NotableProjects />
      </section>

      <section className="pb-20 lg:pb-[160px]">
        <StatsSection />
      </section>

      {/* Logo Ticker Section */}
      <section className="pb-20 lg:pb-[160px]">
        <LogoTicker />
      </section>

      <section className="pb-20 lg:pb-[160px]">
        <div className="max-w-[30rem] md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4">
          <h1 className="text-[25px] md:text-[25px] lg:text-[40px] text-[#2E8B57] font-bold">
            Energy without limits powering today,
            <span className="text-[#006400]"> tomorrow sustainably. </span>
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
          <Link href={'/contact'}>
            <button className="bg-[#2E8B57] hover:bg-[#006400] text-white text-[14px] lg:text-[18px] py-[10px] md:py-[14px] px-[28px] lg:px-[36px] rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg">
              Get in touch
            </button>
          </Link>
        </div>
      </section>
      {/* Footer Section */}
      <Footer year={currentYear} />
    </div>
  );
}
