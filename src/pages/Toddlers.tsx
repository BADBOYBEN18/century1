/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Layout from '@/components/Layout';
import React from 'react';
import Head from 'next/head';

const Toddler = () => {
  return (
    <Layout>
      <Head>
        <title>Toddlers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="font-main">
        <section className="pt-10 px-4 lg:px-6 lg:pt-32">
          <h1 className="font-medium text-[#37A7DF] text-[28px] md:text-[34px] lg:text-[42px] text-center pb-9 lg:pb-12">
            Toddlers
          </h1>
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 xl:items-center m-auto ">
            <div className="md:flex-1 mb-4">
              <img
                src="https://media.istockphoto.com/id/1785118497/photo/joyful-asian-toddler-boy-playing-toy-train-at-indoor-playground.webp?a=1&b=1&s=612x612&w=0&k=20&c=omfGhpTEXfvrFerVI6qR3uGiARocoLmfcWLWvavzcow="
                className=" md:max-lg:h-[100%]  object-cover object-center md:max-lg:rounded-xl "
                alt=""
              />
            </div>
            <div className="md:flex-1 space-y-3 md:max-xl:space-y-5 mb-8 ">
              <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-medium">
                Toddler (18 months - 2.5 years)
              </h1>
              <p className="text-[12px] lg:max-w-xl md:text-[14px] xl:text-[16px] xl:pb-4 text-txtcolor">
                In our toddler program, we encourage curiosity and creativity
                through play-based learning. Our experienced educators help
                toddlers develop their language, social, and cognitive skills in
                a fun and interactive setting.
              </p>

              <div className="flex justify-center md:justify-normal pt-2 md:pt-0">
                <Link href="/contact">
                  <button className="bg-[#E62074] hover:bg-opacity-90 transition-all text-white text-[12px] sm:text-[16px] py-[8px] px-[20px] lg:py-4 lg:px-6 rounded-lg">
                    Stay in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="border-[0.25px] max-w-[17rem] relative  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#bbb2b280] sm:mx-0 md:hidden"></div>

        {/* <section className=" px-4 pt-9 pb-10 md:py-10 lg:px-6  lg:py-20">
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 md:items-center  m-auto ">
            <div className="md:flex-1 space-y-3 mb-8 ">
              <p className="text-[12px] max-w-lg lg:max-w-xl md:text-[14px] lg:text-[16px] lg:pb-4 text-txtcolor">
                Their fun and vibrant room is divided into exciting play centres
                where they have choices to develop skills that will prepare them
                for subjects like reading and math. Your child has the
                opportunity to help choose self-guided activities each week that
                will promote, enable, and equip them to learn in fostering
                environments.
              </p>
              <p className="text-[12px] max-w-lg lg:max-w-xl md:text-[14px] lg:text-[16px] lg:pb-4 text-txtcolor">
                Preschoolers will have the opportunity to engage in dramatic
                play, sensory, science, creative and art, building and blocks,
                literacy, math, outdoor play, and so much more! 
              </p>
            </div>
            <div className="lg:flex-1">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child%20(5).png?updatedAt=1725894779739"
                className=" md:max-lg:h-[300px] md:max-lg:w-[300px] object-cover object-center md:max-lg:rounded-md "
                alt=""
              />
            </div>
          </div>
        </section> */}
        {/* 
        <section className="bg-[#101319] px-4  lg:mt-14 py-[60px] md:py-7 lg:py-[90px] text-white">
          <div className="max-w-[30rem] md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 xl:items-center m-auto ">
            <div className="md:flex-1 mb-4">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child%20(6).png?updatedAt=1725894779155"
                className=" md:max-xl:h-[100%] object-cover object-center md:max-xl:rounded-md "
                alt=""
              />
            </div>
            <div className="md:flex-1 space-y-3 md:max-xl:space-y-5 mb-8 ">
              <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-medium">
                Kindergarten
              </h1>
              <p className="text-[12px] hidden md:max-lg:block">
                Children at the kindergarten age are eager to achieve new
                milestones like reading and beyond! With our program, they’ll
                eagerly be able to participate in play-based learning in areas
                of literacy and math. You might find them wanting to explain how
                things work to you from building things to watching bugs evolve.
              </p>

              <p className="text-[12px] md:hidden">
                Your preschooler is learning new words, ideas, and actions every
                day. Nothing is impossible in their eyes, and we promote and
                encourage their exploration. Our preschool program is designed
                for 2.5 – 3.5-year-olds to provide an environment to explore
                thinking in new ways through purposeful play. 
              </p>

              <p className="hidden lg:block lg:max-w-xl  lg:text-[16px] xl:pb-4">
                Children at the kindergarten age are eager to achieve new
                milestones like reading and beyond! With our program, they’ll
                eagerly be able to participate in play-based learning in areas
                of literacy and math. You might find them wanting to explain how
                things work to you from building things to watching bugs evolve.
              </p>
              <div className="flex justify-center md:justify-normal pt-2 md:pt-0">
                <Link href="/contact">
                  <button className="bg-[#E62074] hover:bg-opacity-90 transition-all text-white text-[12px] lg:text-[16px] py-[10px] px-[20px] lg:py-4 lg:px-6 rounded-lg">
                    Stay in Touch
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 md:items-center m-auto pt-[20px] md:pt-[50px] lg:pt-[80px]">
            <div className="md:flex-1 space-y-3 mb-8 ">
              <p className="text-[12px] lg:max-w-xl  lg:text-[16px] lg:pb-4">
                Our program for 4 – 5-year-olds is designed to help create
                well-rounded children ready to take on the world. They have the
                option to come before and after school or be a part of our full
                day program that’s complimentary to our neighbouring schools.
                They’ll be able to enrich their reading, math, science, and
                writing skills with our highly trained and educated teachers.
              </p>
              <p className="text-[12px] lg:max-w-xl  lg:text-[16px] lg:pb-4">
                Your child will enjoy a bright learning environment where
                they’ll be able to further develop their cognitive and social
                skills as well. They’ll playfully engage in activities like
                games, dancing, music, and fun! Our learning environment takes
                place both indoors and outdoors where your child can explore
                many diverse aspects of their world.
              </p>
            </div>
            <div className="md:flex-1">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child%20(7).png?updatedAt=1725894779965"
                className=" md:max-lg:h-[330px] lg:max-xl:h-[500px] object-cover object-center md:max-xl:rounded-md "
                alt=""
              />
            </div>
          </div>
        </section> */}
        <section className="pb-14 pt-14 md:py-12 lg:py-[160px]">
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4 md:space-y-8">
            <h1 className="text-[#35A76C] text-[20px] md:text-[25px] lg:text-[40px]">
              Play, <span className="text-[#E62074]">Discover</span>,{' '}
              <span className="text-[#37A7DF]">Grow </span>
            </h1>
            <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] pb-5">
              To learn more about one of our world class centres serving you in
              your area, <br className="hidden md:block" /> please see our{' '}
              <Link href="/location">
                <span className="text-[#EC6B00]">locations page</span>
              </Link>{' '}
              or contact us about how we can <br className="hidden md:block" />{' '}
              best care for your child.
            </p>
            <button className="bg-[#3B465C] text-white text-[12px] md:text-[14px] lg:text-[20px] py-[9px] md:py-[12px] px-[24px]  lg:px-[32px] rounded-lg ">
              Enquire Now
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Toddler;
