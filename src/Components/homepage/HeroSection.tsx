'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';

const slides = [
  {
    title: 'Luxury Travel Redefined',
    subtitle: 'Experience the epitome of sophisticated travel with our premium services.',
    cta1: 'View Destinations',
    cta2: 'Request Consultation',
    bg: '/travel1.jpeg',
  },
  {
    title: 'Curated Journeys',
    subtitle: 'Meticulously planned itineraries for the discerning traveler.',
    cta1: 'Explore More',
    cta2: 'Start Planning',
    bg: '/travel2.jpg',
  },
  {
    title: 'Luxury Travel Redefined',
    subtitle: 'Experience the epitome of sophisticated travel with our premium services.',
    cta1: 'View Destinations',
    cta2: 'Request Consultation',
    bg: '/travel3.jpeg',
  },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: -30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-[100vh] max-h-[600px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              {/* Full Slider Background Blur */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

              <div className="px-4 sm:px-10 md:px-20 max-w-7xl w-full relative z-10">
                {activeIndex === index && (
                  <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    className="text-white space-y-6 w-full sm:w-[80%] md:w-[60%]"
                  >
                    <motion.h1
                      className="text-3xl sm:text-5xl font-bold"
                      custom={0}
                      variants={fadeInUp}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="text-base sm:text-lg md:text-xl"
                      custom={1}
                      variants={fadeInUp}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.div
                      className="flex flex-col sm:flex-row gap-4"
                      custom={2}
                      variants={fadeInUp}
                    >
                      <button className="border-2 rounded-lg py-2 px-6 border-white hover:bg-white hover:text-black transition text-sm sm:text-base">
                        {slide.cta1}
                      </button>
                      <button className="border-2 rounded-lg py-2 px-6 border-white hover:bg-white hover:text-black transition text-sm sm:text-base">
                        {slide.cta2}
                      </button>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
