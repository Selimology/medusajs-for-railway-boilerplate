import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { LookBookType } from "types/lookbook"
import LookBookHover from "../lookbook-hover"

interface LookBookProps {
  products: LookBookType
}

const LookBook = ({ products }: LookBookProps) => {
  const { mainContent, images } = products
  return (
    <>
      <div className="look-book-block lg:py-20 md:py-14 py-10 bg-linear">
        <div className="mx-auto px-4 w-full max-w-7xl">
          <div className="main-content relative flex max-lg:flex-wrap gap-y-2 items-center lg:justify-end justify-center">
            <div className="heading bg-white xl:py-20 py-10 xl:px-10 px-8 rounded-2xl lg:w-[30%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 z-[1] max-lg:text-center">
              <div>{mainContent.titleText}</div>
              <LocalizedClientLink
                href={products.mainContent.buttonLink}
                className="button-main bg-green lg:w-full text-center lg:mt-8 mt-5 text-black"
              >
                {mainContent.buttonText}
              </LocalizedClientLink>
            </div>
            <div className="list popular-product w-3/4 grid sm:grid-cols-2 gap-4 max-lg:w-full">
              {images.map((image) => (
                <div
                  key={image.imageUrl}
                  className="item relative rounded-xl overflow-hidden"
                >
                  <LookBookHover lookbookData={image} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LookBook
