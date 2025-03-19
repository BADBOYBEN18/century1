/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';

import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import Head from 'next/head';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Card from '@/components/Card';

// imports for the cards
import { IoMdCog } from 'react-icons/io';
import { FaRegClock } from 'react-icons/fa6';
import { MdOutlineChangeCircle } from 'react-icons/md';
import { GiWorld } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa';
import { BriefcaseIcon } from '@heroicons/react/20/solid';

// import vid from '../../public/century1video.mp4';
// import Link from 'next/link';

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="font-main overflow-clip">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Homepage for light olives child care website"
        />
      </Head>
      <Nav />

      <section className=" pb-5 md:pb-9 lg:pb-16  xl:max-w-7xl m-auto ">
        <div className="px-2 md:px-4 mt-3 lg:mt-0">
          <video
            autoPlay
            loop
            muted
            controls
            className=" w-screen h-auto rounded-lg shadow-lg object-cover object-center"
          >
            <source
              src="https://ik.imagekit.io/h6pmd5ivo/century%201/century%201%20video.mp4?updatedAt=1741799154023"
              type="video/mp4"
            />
          </video>
        </div>
      </section>

      <section className=" pb-14 md:pb-20 lg:pb-32">
        <div className="animation  px-7 max-w-7xl m-auto">
          <div className=" flex flex-col gap-x-6 sm:flex-row-reverse">
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/century%201/anotherone.jpg?updatedAt=1741904825508"
              alt="feature 1"
              className="hidden w-1/2 sm:block"
            />
            <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
              <h1 className="pt-3 text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                About{' '}
                <span className="text-[#4dbf88]">
                  Century<span className="text-[#e53344]">1</span>
                </span>{' '}
                Limited <br className="hidden xl:max-xl:block" />{' '}
              </h1>
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/century%201/anotherone.jpg?updatedAt=1741904825508"
                alt="feature image"
                className="pt-[24px] sm:hidden"
              />
              <p className="py-[24px] text-[#36485C] text-[12px] lg:text-[18px] md:text-justify">
                Century1 Limited (PCL) is a premier Oil and Energy service
                company serving the Energy sector since 2011. We specialize in
                Engineering, Procurement, and Construction (EPC) services and a
                wide range of other essential services to support the energy
                industry. Our highly skilled team operates globally, with
                offices and manufacturing facilities in China and the UK. We
                leverage international best practices and innovations, supported
                by strategic partnerships with technical experts worldwide. Our
                subsidiaries, PCL-Power and PCL-Gas, are dedicated to driving
                the energy transition in Africa by providing innovative and
                sustainable energy solutions.
              </p>

              <button className="text-[#4dbf88] rounded-md lg:p-4 font-medium flex items-center gap-2 lg:text-[18px] transition-all lg:duration-300 p-2 duration-30 focus:bg-black/90  active:bg-black/50  lg:hover:bg-black/90 lg:hover:-translate-y-2 lg:hover:p-4">
                Learn More
                <span className="border border-[#e53344] rounded-full w-6 h-6 flex justify-center items-center">
                  <FaArrowRight className="text-[#e53344] " />
                </span>
              </button>
            </div>
          </div>

          {/* <h1 className="text-[#E62074] text-[15px] md:text-[20px] lg:text-[30px] text-center mb-6 ">
            Choose one of our programs for your child
          </h1>

          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap  items-center justify-center gap-4 ">
            <div className="w-[350px] md:w-[350px] md:h-[320px]   xl:w-[450px] lg:h-[400px]  md:flex md:flex-col items-start justify-center   space-y-3 lg:space-y-0 bg-[#FDE81280] rounded-xl p-4  lg:p-5 ">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px]  grid items-center justify-center  p-2 lg:mb-[20px] xl:mb-[32px]  rounded-lg bg-white">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Icons_BabyCrawling.png?updatedAt=1725631701155"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start ">
                <h1 className="font-medium text-[16px] lg:mb-[10px] xl:mb-[20px] lg:text-[20px] xl:text-[24px]">
                  Infant Program (0-18 months)
                </h1>
                <p className="text-txtcolor text-[12px] lg:text-[15px] pb-4  ">
                  Our infant program provides a safe and nurturing environment
                  where babies can explore and grow. With a focus on sensory
                  play, motor skill development, and individualized care, we
                  ensure each child receives the attention they need to thrive.
                </p>
                <button className="bg-white text-black text-[12px] md:text-[10px] lg:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[350px] md:w-[350px] md:h-[320px]  xl:w-[450px] lg:h-[400px]  md:flex md:flex-col items-start justify-center   space-y-3 lg:space-y-0 bg-[#EC6B0080] rounded-xl p-4  lg:p-5">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] grid items-center justify-center p-2 lg:mb-[20px] xl:mb-[32px] rounded-lg bg-white">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Book--Icon.png?updatedAt=1725631701064"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-[16px] lg:mb-[10px] xl:mb-[10px] lg:text-[20px] xl:text-[24px]">
                  Toddler Program (18 months - 2.5 years)
                </h1>
                <p className="text-txtcolor text-[12px] lg:text-[15px] pb-4">
                  In our toddler program, we encourage curiosity and creativity
                  through play-based learning. Our experienced educators help
                  toddlers develop their language, social, and cognitive skills
                  in a fun and interactive setting.
                </p>
                <button className="bg-white text-black text-[12px] md:text-[10px] lg:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] xl: rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[350px] md:w-[350px] md:h-[320px]   xl:w-[450px] lg:h-[400px] md:flex md:flex-col items-start justify-center    space-y-3 lg:space-y-0 bg-[#37A7DF80] rounded-xl p-4  lg:p-5">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] grid items-center justify-center p-2 lg:mb-[20px] xl:mb-[32px] rounded-lg bg-white">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Idea.png?updatedAt=1725631701147"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-[16px] lg:mb-[10px] xl:mb-[20px] lg:text-[20px] xl:text-[24px]">
                  Preschool Program (2.5 - 4 years)
                </h1>
                <p className="text-txtcolor text-[12px] lg:text-[15px] pb-4 ">
                  Our preschool program prepares children for kindergarten by
                  fostering independence, problem-solving skills, and early
                  literacy. Children engage in hands-on activities that promote
                  both learning and self-expression.
                </p>
                <button className="bg-white text-black text-[12px] md:text-[10px] lg:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section className="pb-14 lg:pb-[200px]">
        <div className="  sm:max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap md:items-start justify-left px-4 md:flex-row">
          <div>
            <h1 className="uppercase text-center sm:text-balance text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px] pb-2">
              <span className="text-[#4dbf88]">
                Century<span className="text-[#e53344]">1</span>
              </span>{' '}
              Limited at a glance
            </h1>
            <div className=" border-2 border-[#e53344] mb-5 max-w-10 mx-auto"></div>
          </div>

          <div className="text-center sm:text-pretty grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card
              icon={<FaRegClock className="w-9 h-9" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Established in 2011"
              title=""
              description="Founded to serve the upstream oil and gas sector, Century1 Limited has since expanded to offer diverse energy solutions through specialized subsidiaries. "
            />
            <Card
              icon={<MdOutlineChangeCircle className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Sustainability drive"
              title=""
              description="Century1 Limited is dedicated to promoting greener energy practices, helping to reduce carbon footprints and drive sustainable development globally."
            />
            <Card
              icon={<GiWorld className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Multinational"
              title=""
              description="Our dedicated teams operate in China, Nigeria, and the UK, bringing together expertise and innovation to meet diverse client needs."
            />
            <Card
              icon={<IoMdCog className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Leading-Edge Technology"
              title=""
              description="We utilize advanced technology in our products and services, ensuring efficiency, safety, and reliability in all our energy solutions. "
            />
            <Card
              icon={<FaHandshake className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Our Subsidiaries"
              title=""
              description="Our subsidiaries, PCL Power and PCL Gas, specialize in renewable energy and gas infrastructure, ensuring comprehensive solutions for a sustainable future."
            />
            <Card
              icon={<BriefcaseIcon className="w-10 h-10" />}
              backgroundColorClass="bg-[#4dbf88]"
              iconTitle="Expertise & Experience
"
              title=""
              description="
Driven by a team of industry-leading professionals with extensive experience, our services consistently exceed expectations for quality and reliability."
            />
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-[160px]">
        <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4 md:space-y-8">
          <h1 className="text-[#37A7DF] text-[20px] md:text-[25px] lg:text-[40px]">
            We&apos;ve got your child&apos;s safety &{' '}
            <br className="hidden lg:block" /> well-being covered.
          </h1>
          <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] pb-5">
            To learn more about one of our world class centres serving you in
            your area, <br className="hidden md:block" /> please see our{' '}
            <Link href="/location">
              <span className="text-[#E62074]">locations page</span>
            </Link>{' '}
            or contact us about how we can <br className="hidden md:block" />{' '}
            best care for your child.
          </p>
          <button className="bg-[#3B465C] text-white text-[12px] md:text-[14px] lg:text-[20px] py-[9px] md:py-[12px] px-[24px]  lg:px-[32px] rounded-lg ">
            Enquire Now
          </button>
        </div>
      </section>
      <Footer year={currentYear} />
    </div>
  );
}
