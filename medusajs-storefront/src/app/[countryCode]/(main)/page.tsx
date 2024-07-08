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
import testimonialData from "@lib/data/json/Testimonial.json"
import signupData from "@lib/data/json/Signup.json"
import benefitData from "@lib/data/json/Benefits.json"
import instagramProofData from "@lib/data/json/Instagram/Instagram.json"
import instagramHeaderData from "@lib/data/json/Instagram/InstagramHeader.json"
import lookbookProductData from "@lib/data/json/LookbookProducts.json"
import Benefit from "@modules/home/components/benefit"
import FlashSale from "@modules/home/components/flashsale"
import { CountdownProvider } from "@lib/context/countdown-context"
import flashSaleData from "@lib/data/json/FlashSale.json"
import { useCollection } from "medusa-react"
import LookBook from "@modules/home/components/lookbook"

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

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  const targetDate = new Date("2024-07-28")

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>

      <LookBook products={lookbookProductData} />
      <CountdownProvider targetDate={targetDate}>
        <FlashSale data={flashSaleData} />
      </CountdownProvider>
      <Testimonial limit={6} data={testimonialData} />
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
