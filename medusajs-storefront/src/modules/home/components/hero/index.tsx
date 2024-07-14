"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Image from "next/image"
import "swiper/css/bundle"
import { HeroSectionType } from "types/hero"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface HeroProp {
  heroSlides: HeroSectionType[]
}
const Hero = ({ heroSlides }: HeroProp) => {
  return (
    <div className="slider-block style-one bg-[#F5EEE7] xl:h-[860px] lg:h-[800px] md:h-[580px] sm:h-[500px] h-[350px] max-[420px]:h-[320px] w-full">
      <div className="slider-main h-full w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="h-full relative"
          autoplay={{ delay: 4000 }}
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slider-item h-full w-full relative overflow-hidden">
                <div className="container w-full h-full flex items-center relative">
                  <div className="text-content basis-1/2">
                    <div className="text-sub-display">
                      {slide.subDisplayText}
                    </div>
                    <div className="text-display md:mt-5 mt-2">
                      {slide.displayText}
                    </div>
                    <LocalizedClientLink
                      href={slide.linkHref}
                      className="button-main md:mt-8 mt-3"
                    >
                      Shop Now
                    </LocalizedClientLink>
                  </div>
                  <div className={`sub-img absolute ${slide.imageClasses}`}>
                    <Image
                      src={slide.imageSrc}
                      width={slide.imageWidth}
                      height={slide.imageHeight}
                      alt={slide.imageAlt}
                      priority={true}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Hero
