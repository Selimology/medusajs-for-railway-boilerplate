"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { BannerTopType } from "types/bannertop"
import "swiper/css/bundle"
import "swiper/css/effect-fade"

interface BannerTopProps {
  data: BannerTopType
}

const BannerTop = ({ data }: BannerTopProps) => {
  return (
    <div className="banner-top style-four w-full bg-black py-3">
      <div className="container flex items-center justify-center">
        <div className="sm:w-2/3 w-full h-full">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            modules={[Navigation, Autoplay]}
            className="h-full relative flex items-center justify-center"
            autoplay={{
              delay: 3000,
            }}
          >
            {data.slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="text-button-uppercase px-8 text-center text-white">
                  {slide.bannerText}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default BannerTop
