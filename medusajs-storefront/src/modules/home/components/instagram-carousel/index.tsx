"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css/bundle"
import { InstagramHeaderType, InstagramProofType } from "types/instagram"

interface Props {
  proofData: Array<InstagramProofType>
  instagramHeaderdata: InstagramHeaderType
}
const InstagramCarousel = ({ proofData, instagramHeaderdata }: Props) => {
  return (
    <>
      <div className="instagram-block md:py-20 py-10">
        <div>
          <div className="heading">
            <div className="heading3 text-center">
              {instagramHeaderdata.title}
            </div>
            <div className="text-center mt-3">
              {instagramHeaderdata.description}
            </div>
          </div>
        </div>
        <div className="list-instagram mt-7">
          <Swiper
            slidesPerView={2}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              576: {
                slidesPerView: 3,
              },
              680: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 5,
              },
              1290: {
                slidesPerView: 6,
              },
            }}
          >
            {proofData.map((slide, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={slide.link}
                  target="_blank"
                  className="item relative block overflow-hidden"
                >
                  <Image
                    src={slide.image}
                    width={300}
                    height={300}
                    alt={index.toString()}
                    className="h-full w-full duration-500 relative"
                  />
                  <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                    <div className="icon-instagram text-2xl text-black"></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default InstagramCarousel
