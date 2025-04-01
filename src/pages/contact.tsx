/* eslint-disable @next/next/no-img-element */
'use client';
import Head from 'next/head';
import React from 'react';
import Layout from '@/components/Layout';
import ContactSection from '@/components/Contactus';

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
        <header className="pb-14 md:pb-20 lg:pb-25">
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
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                Contact us
              </h1>
            </div>
          </div>
        </header>

        <section>
          <ContactSection />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
