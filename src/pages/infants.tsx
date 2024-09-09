/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

const Infants = () => {
  return (
    <Layout>
      <div className="font-main">
        <section className="pt-10 px-4 lg:px-6 lg:pt-32">
          <h1 className="font-medium text-[28px] md:text-[34px] lg:text-[42px] text-center pb-9 lg:pb-12">
            Infants & Toddlers
          </h1>
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 xl:items-center m-auto ">
            <div className="md:flex-1 mb-4">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child.png?updatedAt=1725894777372"
                className=" md:max-lg:h-[100%] object-cover object-center md:max-lg:rounded-md "
                alt=""
              />
            </div>
            <div className="md:flex-1 space-y-3 mb-8 ">
              <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-medium">
                Infants
              </h1>
              <p className="text-[12px] lg:max-w-xl md:text-[14px] xl:text-[16px] xl:pb-4 text-txtcolor">
                Infant’s experience learning through their senses before they
                even know how to crawl. Our infant program provides
                opportunities for your child to learn through exploring their
                senses in a nurturing and safe environment. We pride ourselves
                in having a wide variety of fun and exciting options to promote
                their learning in many areas of study such as art and crafts,
                outdoor play, walks in the community with our large stroller
                sets, and lots of sensory play!
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

        <section className=" px-4 pt-9 pb-10 md:py-10 lg:px-6  lg:py-20">
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 md:items-center m-auto ">
            <div className="md:flex-1 space-y-3 mb-8 ">
              <p className="text-[12px] lg:max-w-xl md:text-[14px] lg:text-[16px] lg:pb-4 text-txtcolor">
                The program is designed for children ages 0 – 18 months and
                supports the biggest moments in their early developmental
                journey. We ensure all of you and your child’s needs are met
                through a schedule and routine based day that includes healthy
                infant snack and lunch options customised to them. You’ll even
                receive a daily report to see your child’s achievements each
                day!
              </p>
              <p className="text-[12px] lg:max-w-xl md:text-[14px] lg:text-[16px] lg:pb-4 text-txtcolor">
                When you choose EduKids, your infant starts creating a solid
                foundation for optimal development. Our highly experienced and
                nurturing staff makes it their mission to go above and beyond in
                supporting your child’s every need. We understand how important
                this age is for accomplishing developmental milestones. This is
                why we create uniquely specialised individual program plans for
                your child to help them achieve these milestones.
              </p>
            </div>
            <div className="md:flex-1">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child%20(1).png?updatedAt=1725894780096"
                className=" md:max-lg:h-[405px] object-cover object-center md:max-lg:rounded-md "
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="bg-[#101319] px-4  lg:mt-14 py-[60px] md:py-7 lg:py-[90px] text-white">
          <div className="max-w-[30rem] md:max-w-4xl lg:max-w-7xl flex flex-col md:flex-row md:gap-x-9 xl:items-center m-auto ">
            <div className="md:flex-1 mb-4">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child%20(2).png?updatedAt=1725894779342"
                className=" md:max-xl:h-[100%] object-cover object-center md:max-xl:rounded-md "
                alt=""
              />
            </div>
            <div className="md:flex-1 space-y-3 md:max-xl:space-y-5 mb-8 ">
              <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-medium">
                Toddler
              </h1>
              <p className="text-[12px] lg:max-w-xl  lg:text-[16px] xl:pb-4">
                Toddlers are constantly on the move exploring and learning with
                everything they do! We provide a fun, colourful, and vibrant
                environment that promotes action-packed learning for children
                ages 18 months – 2.5 years old. This enables them to explore all
                aspects of the world around them to develop cognitive,
                emotional, physical, and social skills. Our program is designed
                to be fun and entertaining to keep your child engaged for the
                right experiences at the right time.
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
                The program is designed for children ages 0 – 18 months and
                supports the biggest moments in their early developmental
                journey. We ensure all of you and your child’s needs are met
                through a schedule and routine based day that includes healthy
                infant snack and lunch options customised to them. You’ll even
                receive a daily report to see your child’s achievements each
                day!
              </p>
              <p className="text-[12px] lg:max-w-xl  lg:text-[16px] lg:pb-4">
                When you choose EduKids, your infant starts creating a solid
                foundation for optimal development. Our highly experienced and
                nurturing staff makes it their mission to go above and beyond in
                supporting your child’s every need. We understand how important
                this age is for accomplishing developmental milestones. This is
                why we create uniquely specialised individual program plans for
                your child to help them achieve these milestones.
              </p>
            </div>
            <div className="md:flex-1">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/Child%20(3).png?updatedAt=1725894778827"
                className=" md:max-lg:h-[330px] lg:max-xl:h-[500px] object-cover object-center md:max-xl:rounded-md "
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pb-14 pt-14 md:py-12 lg:py-[160px]">
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4 md:space-y-8">
            <h1 className="text-[20px] md:text-[25px] lg:text-[40px]">
              Play, Discover, Grow{' '}
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
      </div>
    </Layout>
  );
};

export default Infants;
