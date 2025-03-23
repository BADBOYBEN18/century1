import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {
  const slides = [
    {
      backgroundImage:
        'https://ik.imagekit.io/h6pmd5ivo/century%201/india-to-double-down-on-oil-gas-exploration-hardeep-singh-puri.webp?updatedAt=1742682197100',
      title: 'Welcome to Century1 Limited',
      description:
        'Your trusted partner in innovative and sustainable energy solutions.',
      buttonText: 'Learn More',
    },
    {
      backgroundImage:
        'https://ik.imagekit.io/h6pmd5ivo/century%201/chris-leboutillier-TUJud0AWAPI-unsplash-min.jpg?updatedAt=1742515937562',
      title: 'Driving the Energy Transition',
      description:
        'We specialize in renewable energy solutions and gas infrastructure.',
      buttonText: 'Explore Services',
    },
    {
      backgroundImage:
        'https://ik.imagekit.io/h6pmd5ivo/century%201/pcl%20gas.png?updatedAt=1742406564716',
      title: 'Innovating for a Sustainable Future',
      description:
        'Our subsidiaries, PCL Power and PCL Gas, ensure comprehensive energy solutions.',
      buttonText: 'Contact Us',
    },
  ];

  return (
    <section className="relative h-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="relative z-10 text-center text-white px-4 space-y-7 lg:space-y-8 flex flex-col items-center justify-center h-full">
                {/* First Slide: Custom "Welcome to Century1 Limited" Content */}
                {index === 0 ? (
                  <>
                    <h1 className="text-4xl md:text-6xl font-bold">
                      Welcome to{' '}
                      <span className="text-[#4dbf88]">
                        Century<span className="text-[#e53344]">1</span>
                      </span>{' '}
                      Limited
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                  </>
                ) : (
                  <>
                    {/* Other Slides: Use Slide-Specific Title and Description */}
                    <h1 className="text-4xl md:text-6xl font-bold">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto">
                      {slide.description}
                    </p>
                  </>
                )}
                <button className="bg-[#4dbf88] text-white px-8 py-3 rounded-md font-medium hover:bg-[#3aa371] lg:hover:-translate-y-3 transition-all duration-300">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Green Arrows (Hidden on Mobile and Tablet) */}
      <div className="swiper-button-prev !hidden lg:!block !text-[#4dbf88]"></div>
      <div className="swiper-button-next !hidden lg:!block !text-[#4dbf88]"></div>

      {/* Custom CSS for Green Arrows */}
      <style jsx global>{`
        /* Forcefully hide arrows on mobile and tablet */
        .swiper-button-prev,
        .swiper-button-next {
          display: none !important;
        }

        /* Show arrows only on desktop */
        @media (min-width: 1024px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: flex !important;
            color: #4dbf88; /* Green color */
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 2rem; /* Adjust arrow size */
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
