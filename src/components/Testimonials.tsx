/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        'As a discerning consumer who values quality and innovation, I am thoroughly impressed with Century1 Limited. This enterprise has consistently demonstrated a commitment to excellence that is both inspiring and commendable.',
      author: 'Chetna Basak',
      role: 'Customer',
    },
    {
      id: 2,
      quote:
        "The energy solutions provided by Century1 have transformed our operations. Their team's expertise and professionalism are unmatched in the industry.",
      author: 'Rajesh Kumar',
      role: 'Business Owner',
    },
    {
      id: 3,
      quote:
        'Working with Century1 has been a game-changer for our sustainability goals. Their innovative approach to renewable energy is truly remarkable.',
      author: 'Priya Sharma',
      role: 'Operations Manager',
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            TESTIMONIALS
          </h2>
          <p className="text-lg text-[#4dbf88]">Appreciated by our clients</p>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 35, // Increased space between cards on tablet
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
                <div className="mb-6 flex justify-center">
                  <img
                    src="https://ik.imagekit.io/h6pmd5ivo/century%201/WhatsApp%20Image%202025-03-11%20at%2020.53.56_8d58b923.jpg?updatedAt=1741799126613"
                    width={16}
                    height={16}
                    className="rounded-full w-16 h-16"
                    alt="Client"
                  />
                </div>
                <p className="text-gray-600 mb-6 italic flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style jsx global>{`
        /* The 'global' keyword is crucial here for Swiper classes */
        .testimonial-swiper .swiper-pagination {
          position: relative !important;
          margin-top: 2.5rem !important;
        }

        .testimonial-swiper .swiper-pagination-bullet {
          background: #d1d5db !important;
          opacity: 1 !important;
          width: 10px !important;
          height: 10px !important;
        }

        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #4dbf88 !important;
          width: 24px !important;
          border-radius: 6px !important;
        }

        /* Equal height slides */
        .testimonial-swiper .swiper-slide {
          height: auto !important;
          display: flex !important;
        }

        .testimonial-swiper .swiper-slide > div {
          height: 100% !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
