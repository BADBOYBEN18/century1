/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';

import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
// import Link from 'next/link';

export default function Home() {
  return (
    <div className="font-main overflow-clip">
      <Nav />
      <section className="pb-5 md:pb-20">
        <div className="max-w-[30rem]  md:max-w-7xl m-auto px-4 py-9 md:py-0 flex flex-col gap-8 md:flex-row md:justify-evenly md:items-center xl:px-0">
          <div className="space-y-4 md:space-y-6 md:flex-1 lg:flex-auto ">
            <h1 className="font-bold text-[30px] md:text-[40px] lg:text-[55px] xl:text-[70px] text-balance leading-tight">
              Leading the Way <br className="hidden lg:block" /> in{' '}
              <span className="text-[#E62074]">Child {''}</span>
              Development <br className="hidden lg:block" /> & Education
              <span className="text-[#E62074]">.</span>
            </h1>
            <p className="text-txtcolor text-balance text-sm lg:text-[18px]">
              We promote active minds and happy moments with our learning and
              care approach while keeping your child’s safety and well-being our
              number one priority.
            </p>
            <button className="bg-[#3B465C] text-white text-[12px] md:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] rounded-lg ">
              Enquire Now
            </button>
          </div>
          <div className="md:flex-1 lg:flex-auto ">
            <img
              src={
                'https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Rectangle%206.png?updatedAt=1725631706690'
              }
              className="xl:h-[600px] object-cover object-center xl:w-[700px]"
              alt="heroimg"
            />
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-40">
        <div className="px-3 max-w-7xl m-auto">
          <h1 className="text-txtcolor text-[15px] md:text-[20px] lg:text-[30px] text-center mb-6 ">
            Choose one of our programs for your child
          </h1>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap  items-center justify-center gap-4 ">
            <div className="w-[350px] md:w-[350px] md:h-[320px]   xl:w-[450px] lg:h-[380px]  md:flex md:flex-col items-start justify-center   space-y-3 lg:space-y-0 bg-[#FDE81280] rounded-xl p-4  lg:p-5 ">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] grid items-center justify-center  p-2 lg:mb-[20px] xl:mb-[32px]  rounded-lg bg-white">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Icons_BabyCrawling.png?updatedAt=1725631701155"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start ">
                <h1 className="font-medium text-[16px] lg:mb-[10px] xl:mb-[20px] lg:text-[24px]">
                  Infants & Toddlers
                </h1>
                <p className="text-txtcolor text-[12px] lg:text-[15px] pb-4  ">
                  Infants and toddlers learn through exploring senses and
                  activity. Our environment is the perfect setup to keep your
                  child engaged and growing by leaps and bounds. Click below to
                  learn more about what we can do for your infant or toddler!
                </p>
                <button className="bg-white text-black text-[12px] md:text-[10px] lg:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[350px] md:w-[350px] md:h-[320px]  xl:w-[450px] lg:h-[380px]  md:flex md:flex-col items-start justify-center   space-y-3 lg:space-y-0 bg-[#EC6B0080] rounded-xl p-4  lg:p-5">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] grid items-center justify-center p-2 lg:mb-[20px] xl:mb-[32px] rounded-lg bg-white">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Book--Icon.png?updatedAt=1725631701064"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-[16px] lg:mb-[10px] xl:mb-[10px] lg:text-[24px]">
                  Preschool & Kindergarten
                </h1>
                <p className="text-txtcolor text-[12px] lg:text-[15px] pb-4">
                  Preschool and kindergarten are a fun age for extending your
                  child’s thinking through purposeful play and exploration to
                  develop new skills. Click below to learn more about how we can
                  create meaningful and engaging experiences for your
                  preschooler or kindergartener.
                </p>
                <button className="bg-white text-black text-[12px] md:text-[10px] lg:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] xl: rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>

            <div className="w-[350px] md:w-[350px] md:h-[320px]   xl:w-[450px] lg:h-[380px] md:flex md:flex-col items-start justify-center    space-y-3 lg:space-y-0 bg-[#37A7DF80] rounded-xl p-4  lg:p-5">
              <div className="w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] grid items-center justify-center p-2 lg:mb-[20px] xl:mb-[32px] rounded-lg bg-white">
                <img
                  src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Idea.png?updatedAt=1725631701147"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center items-start">
                <h1 className="font-medium text-[16px] lg:mb-[10px] xl:mb-[20px] lg:text-[24px]">
                  School Aged Kids
                </h1>
                <p className="text-txtcolor text-[12px] lg:text-[15px] pb-4 ">
                  Your 6 – 12 school aged child can relax, do homework, and make
                  new friends in our nurturing belg:mb-[10px] xlre and after
                  school care program. On top of this program, we offer fun
                  experiences for PA days and an exciting summer camp.
                </p>
                <button className="bg-white text-black text-[12px] md:text-[10px] lg:text-[14px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] rounded-lg ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-[200px]">
        <div className=" max-w-[23rem] md:max-w-7xl m-auto flex flex-col-reverse items-center gap-2 md:items-start justify-center px-4 md:flex-row">
          <div className="flex-1 mt-4 md:mt-0">
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Rectangle%2016.png?updatedAt=1725631706230"
              alt=""
            />
          </div>
          <div className="flex-1 hidden lg:block">
            <img
              src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Rectangle%2012.png?updatedAt=1725631705859"
              className="hidden lg:block"
              alt=""
            />
          </div>
          <div className="flex-1 md:ml-2 lg:ml-5">
            <h1 className="font-medium text-[25px] lg:text-[40px] mb-4">
              Who are we?
            </h1>
            <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] mb-4">
              With over 21 Light Olives locations across the Greater Toronto
              Area and over 30 years of providing outstanding childcare, we’re
              proud to provide full and part-time care for enhanced and enriched
              learning for children ages newborn to 12 years old.
            </p>
            <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] mb-4">
              We nurture curiosity, confidence, and creativity to empower your
              child through some of the biggest learning moments!
            </p>
            <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] mb-7">
              Your child’s safety and well-being are our top priorities at Light
              Olives. We go above and beyond to create the right environment to
              keep everyone safe.
            </p>
            <button className="bg-[#3B465C]  text-white text-[12px] md:text-[14px] lg:text-[16px] py-[9px] md:py-[12px] px-[24px] lg:px-[32px] rounded-lg ">
              Read More
            </button>
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-[160px]">
        <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4 md:space-y-8">
          <h1 className="text-[20px] md:text-[25px] lg:text-[40px]">
            We&apos;ve got your child&apos;s safety &{' '}
            <br className="hidden lg:block" /> well-being covered.
          </h1>
          <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] pb-5">
            To learn more about one of our world class centres serving you in
            your area, <br className="hidden md:block" /> please see our{' '}
            <span className="text-[#E62074]">locations page</span> or contact us
            about how we can <br className="hidden md:block" /> best care for
            your child.
          </p>
          <button className="bg-[#3B465C] text-white text-[12px] md:text-[14px] lg:text-[20px] py-[9px] md:py-[12px] px-[24px]  lg:px-[32px] rounded-lg ">
            Enquire Now
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
