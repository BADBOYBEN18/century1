/* eslint-disable @next/next/no-img-element */
'use client';
import Head from 'next/head';
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/Contactus';
import { IoMdShare } from 'react-icons/io';
import Link from 'next/link';

const Contact = () => {
  return (
    <Layout>
      <div className="font-main">
        <Head>
          <title>Contact us - century1 limited</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="contct us page for light olives child care website"
          />
        </Head>
        <header className="pb-4 md:pb-8 lg:pb-10">
          <div className="relative h-[40vh] flex items-center justify-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://ik.imagekit.io/h6pmd5ivo/century%201/istockphoto-1334186403-1024x1024.jpg?updatedAt=1743459516328')`,
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/60"></div>
            </div>
            {/* Centered Content */}
            <div className="relative z-10 text-center text-white px-4 space-y-7 lg:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6">
                Contact us
              </h1>
            </div>
          </div>
        </header>

        <section className="pb-4 md:pb-8 lg:pb-10">
          <ContactSection />
        </section>

        <section className="pb-4 md:pb-8 lg:pb-10">
          <div className="pb-6">
            <div className="w-full py-[12px] px-4 lg:px-4  bg-[#4D6A79] flex justify-between items-center">
              <div>
                <p className="text-white">Century1 headquaters</p>
              </div>
              <Link
                href="https://maps.app.goo.gl/bBM83Ju13tcG7Tq46"
                target="_blank"
              >
                <IoMdShare />
              </Link>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6287538989127!2d3.4690947735036155!3d6.441695224111682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44da46c81a9%3A0xf422e3e7cf79fa18!2s15A%20Olanrewaju%20Ninalowo%20Cres%2C%20Lekki%20Phase%201%2C%20Lagos%20100200%2C%20Lagos!5e0!3m2!1sen!2sng!4v1745438822237!5m2!1sen!2sng"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[60vh] shadow-lg shadow-emerald-400/20"
              allowFullScreen={true}
            ></iframe>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
