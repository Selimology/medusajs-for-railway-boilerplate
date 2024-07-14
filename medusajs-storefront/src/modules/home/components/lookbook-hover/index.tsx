"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"
import { BackgroundImageType, LookBookType } from "types/lookbook"

interface LookBookHoverProps {
  lookbookData: BackgroundImageType
}

const LookBookHover = ({ lookbookData }: LookBookHoverProps) => {
  return (
    <>
      <Image
        src={lookbookData.imageUrl}
        alt={lookbookData.alt}
        className="w-full h-full object-cover"
        width={2000}
        height={1000}
      />
      {lookbookData.products.map((product) => (
        <div
          key={product.id}
          className="dots absolute cursor-pointer"
          style={{ top: product.dotTop, left: product.dotLeft }}
          cursor-pointer
        >
          <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
            <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
          </div>
          <LocalizedClientLink
            className="product-infor bg-white rounded-2xl p-4"
            href={product.url}
          >
            <div className="text-title name">{product.name}</div>
            <div className="price text-center">${product.price}</div>
            <div className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
              View
            </div>
          </LocalizedClientLink>
        </div>
      ))}
    </>
  )
}

export default LookBookHover
