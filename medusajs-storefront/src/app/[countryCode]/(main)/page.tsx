import { Product } from "@medusajs/medusa"
import { Metadata } from "next"
import {
  getCollectionByHandle,
  getCollectionsList,
  getProductsList,
  getRegion,
} from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ProductCollectionWithPreviews } from "types/global"
import { cache } from "react"
import SignupBanner from "@modules/home/components/signupbanner"
import InstagramCarousel from "@modules/home/components/instagram-carousel"
import Testimonial from "@modules/home/components/testimonial"
import testimonialData from "@lib/data/json/Testimonial/Testimonial.json"
import testimonialShopLinkData from "@lib/data/json/Testimonial/TestimonialLink.json"
import signupData from "@lib/data/json/Signup.json"
import benefitData from "@lib/data/json/Benefits.json"
import instagramProofData from "@lib/data/json/Instagram/Instagram.json"
import instagramHeaderData from "@lib/data/json/Instagram/InstagramHeader.json"
import lookbookProductData from "@lib/data/json/LookbookProducts.json"
import Benefit from "@modules/home/components/benefit"
import FlashSale from "@modules/home/components/flashsale"
import { CountdownProvider } from "@lib/context/countdown-context"
import flashSaleData from "@lib/data/json/FlashSale.json"
import LookBook from "@modules/home/components/lookbook"
import heroSectionData from "@lib/data/json/Hero.json"
import CollectionProductRail from "@modules/home/components/collection-product-rail/index"
import CollectionCategoryRail from "@modules/home/components/collection-category-rail"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}
const getCollectionsWithProducts = cache(
  async (
    countryCode: string
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    const { collections } = await getCollectionsList(0, 3)

    if (!collections) {
      return null
    }

    const collectionIds = collections.map((collection) => collection.id)

    await Promise.all(
      collectionIds.map((id) =>
        getProductsList({
          queryParams: { collection_id: [id] },
          countryCode,
        })
      )
    ).then((responses) =>
      responses.forEach(({ response, queryParams }) => {
        let collection

        if (collections) {
          collection = collections.find(
            (collection) => collection.id === queryParams?.collection_id?.[0]
          )
        }

        if (!collection) {
          return
        }

        collection.products = response.products as unknown as Product[]
      })
    )

    return collections as unknown as ProductCollectionWithPreviews[]
  }
)

const getCollectionWithHandle = cache(
  async (
    countryCode: string,
    targetHandle: string
  ): Promise<ProductCollectionWithPreviews | null> => {
    const collection = await getCollectionByHandle(targetHandle)

    if (!collection) {
      return null
    }

    const collectionID = collection.id

    const { response } = await getProductsList({
      queryParams: { collection_id: [collectionID] },
      countryCode,
    })

    collection.products = response.products as Product[]

    return collection as unknown as ProductCollectionWithPreviews
  }
)

const getMultipleCollectionsWithHandles = cache(
  async (
    countryCode: string,
    targetHandles: string[]
  ): Promise<ProductCollectionWithPreviews[] | null> => {
    try {
      const collections = await Promise.all(
        targetHandles.map((handle) =>
          getCollectionWithHandle(countryCode, handle)
        )
      )

      const validCollections = collections.filter(
        (collection) => collection !== null
      ) as ProductCollectionWithPreviews[]

      if (validCollections.length === 0) {
        return null
      }

      return validCollections
    } catch (error) {
      console.error("Error fetching multiple collections:", error)
      return null
    }
  }
)

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  const numberCollection = await getCollectionWithHandle(countryCode, "number")

  const groupedCollection = await getMultipleCollectionsWithHandles(
    countryCode,
    ["number", "best-seller", "name"]
  )

  console.log("groupedCollection", groupedCollection)
  if (!collections || !region) {
    return null
  }

  const targetDate = new Date("2024-07-28")

  return (
    <>
      <Hero heroSlides={heroSectionData} />

      {/* <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div> */}
      {/* <CollectionCategoryRail collections={groupedCollection} region={region} /> */}
      <CollectionProductRail collection={numberCollection} region={region} />
      <LookBook products={lookbookProductData} />
      <CountdownProvider targetDate={targetDate}>
        <FlashSale data={flashSaleData} />
      </CountdownProvider>
      <Testimonial
        limit={6}
        data={testimonialData}
        shopLinkdata={testimonialShopLinkData}
      />
      <SignupBanner data={signupData} />
      <Benefit data={benefitData} />
      <InstagramCarousel
        proofData={instagramProofData}
        instagramHeaderdata={instagramHeaderData}
      />
      {/* <ModalNewsletter /> */}
    </>
  )
}
