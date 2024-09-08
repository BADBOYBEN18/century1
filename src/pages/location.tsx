/* eslint-disable @next/next/no-img-element */
import { IoMdShare } from 'react-icons/io';
import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';

const Location = () => {
  return (
    <Layout>
      <div className="font-main overflow-clip">
        <section className="pt-10 md:pt-16 lg:pt-28 pb-10 lg:pb-16">
          <div className="sm:max-w-[30rem] md:max-w-4xl px-4 m-auto md:text-center pb-5 lg:pb-8">
            <h1 className="font-medium text-[28px] md:text-[34px] lg:text-[42px] pb-2">
              Our Centres
            </h1>
            <p className="text-[12px] sm:text-[14px] lg:text-[16px]">
              Browse the map below for the location of a centre that is most
              convenient for you. After selecting a centre, you can then click{' '}
              <Link
                href="https://maps.app.goo.gl/47yRAsXc82VS8yG89"
                target="_blank"
              >
                <span className="font-bold text-[#E62074]">
                  View in Google Maps
                </span>{' '}
              </Link>
              to calculate directions or the distance from you house.
            </p>
          </div>
          <div className="pb-6">
            <div className="w-full py-[12px] px-4 lg:px-4  bg-[#4D6A79] flex justify-between items-center">
              <div>
                <p className="text-white">L.O.C.C Centers</p>
              </div>
              <Link
                href="https://maps.app.goo.gl/47yRAsXc82VS8yG89"
                target="_blank"
              >
                <IoMdShare />
              </Link>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.120382931518!2d-79.71754061552342!3d43.437201691906004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5da159ddc11b%3A0x63dae6ca0ef8674a!2s1075%20North%20Service%20Rd%20W%20Suite%23100%2C%20Oakville%2C%20ON%20L6M%202G2%2C%20Canada!5e0!3m2!1sen!2sng!4v1725725101287!5m2!1sen!2sng"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[50vh]"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>

        <section className="pb-14 lg:pb-[200px]">
          <div className=" max-w-[23rem] md:max-w-7xl m-auto flex flex-col items-center gap-2 md:items-start justify-center px-4 md:flex-row">
            <div className="flex-1   md:ml-2 lg:ml-5 md:pt-5 lg:pt-9 md:px-2">
              <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] mb-4">
                As a new mom, I was looking for a daycare centre with a warm,
                caring and friendly staff, and a fun and exciting environment
                for my son to learn and grow.
              </p>
              <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] mb-4">
                I believe I have found just that at EduKids. The teachers in his
                room always have wonderful stories to tell me and seem to know
                my son very well.
              </p>
              <span className="text-[12px] md:text-[14px] lg:text-[18px] text-[#9C2525]">
                Susan Javier - Ajax, Ont
              </span>
            </div>
            <div className="flex-1 mt-4 md:mt-0">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/child3.png?updatedAt=1725726029463"
                alt=""
              />
            </div>
            <div className="flex-1 hidden lg:block">
              <img
                src="https://ik.imagekit.io/h6pmd5ivo/L.O.C.C%20images/child4.png?updatedAt=1725726029509"
                className="hidden lg:block"
                alt=""
              />
            </div>
          </div>
        </section>

        <section className="pb-14 lg:pb-[160px]">
          <div className="max-w-[30rem]  md:max-w-4xl lg:max-w-7xl m-auto px-4 text-center space-y-4 md:space-y-8">
            <h1 className="text-[20px] md:text-[25px] lg:text-[40px]">
              Close to Home, Close to Heart
            </h1>
            <p className="text-txtcolor text-[12px] md:text-[14px] lg:text-[16px] pb-5">
              To learn more about one of our world class centres serving you in
              your area, <br className="hidden md:block" /> please see our{' '}
              <span className="text-[#E62074]">locations page</span> or contact
              us about how we can <br className="hidden md:block" /> best care
              for your child.
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

export default Location;
