'use client';
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/chevron-1.png?updatedAt=1742601108118',
    alt: 'chevron Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/Transcorp_Logo.svg_.png?updatedAt=1742601108097',
    alt: 'transcorp Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/Starsight.png?updatedAt=1742601108001',
    alt: 'starsight Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/Park_Inn_by_Radisson_logo.png?updatedAt=1742601107973',
    alt: 'parkinn Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/Oando_logo.svg_.png?updatedAt=1742601107900',
    alt: 'oando Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/ExxonMobil-Logo.png?updatedAt=1742601107898',
    alt: 'exxon Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/ewLWEAR.png?updatedAt=1742601107782',
    alt: 'realwear Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/Dangote-logo-1.png?updatedAt=1742601107687',
    alt: 'dangote Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/axxela.png?updatedAt=1742601107694',
    alt: 'axxella Logo',
  },
  {
    src: 'https://ik.imagekit.io/h6pmd5ivo/century%201/IOGC.png?updatedAt=1742601107576',
    alt: 'iogc Logo',
  },
];

export const LogoTicker = () => {
  return (
    <div className="py-7 px-4  space-y-[2.5rem] sm:space-y-[3rem] lg:space-y-[4.5rem] xl:space-y-[5rem] sm:max-w-7xl mx-auto ">
      <div>
        <h2 className="text-xl lg:text-[30px] text-center text-black ">
          Trusted by the world&apos;s most innovative companies.
        </h2>
      </div>
      <div className="flex overflow-hidden mt-9 before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-4 after:w-4 lg:before:w-10 lg:after:w-10 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#e2e8f0,rgba(226,232,240,0))] after:bg-[linear-gradient(to_left,#e2e8f0,rgba(226,232,240,0))]">
        <motion.div
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: '-50%' }}
          className="flex overflow-hidden 
   flex-none gap-16 pr-16 "
        >
          {images.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              draggable={false}
              className="flex-none h-12 w-auto prevent-select cursor-pointer"
            />
          ))}
          {images.map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              draggable={false}
              className="flex-none h-12 w-auto prevent-select cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
