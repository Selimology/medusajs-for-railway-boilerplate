"use client"

import { Region } from "@medusajs/medusa"
import { ProductCollectionWithPreviews } from "types/global"
import ProductPreview from "@modules/products/components/product-preview"
import { useState } from "react"
import { motion } from "framer-motion"

interface ClientCollectionTabsProps {
  collections: ProductCollectionWithPreviews[]
  region: Region
}

const ClientCollectionTabs = ({
  collections,
  region,
}: ClientCollectionTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(
    collections[0]?.title || ""
  )

  const handleTabClick = (title: string) => {
    setActiveTab(title)
  }

  const getActiveCollection = () => {
    return collections.find((collection) => collection.title === activeTab)
  }

  const activeCollection = getActiveCollection()

  return (
    <>
      <div className="tab-features-block relative md:pt-20 pt-10">
        <div className="container">
          <div className="heading flex flex-col items-center text-center">
            <div className="menu-tab flex items-center gap-2 p-1 bg-surface rounded-2xl">
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className={`tab-item relative text-secondary heading5 py-2 px-5 cursor-pointer duration-500 hover:text-black ${
                    activeTab === collection.title ? "active" : ""
                  }`}
                  onClick={() => handleTabClick(collection.title)}
                >
                  {activeTab === collection.title && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-2xl bg-white"
                    ></motion.div>
                  )}
                  <span className="relative heading5 z-[1]">
                    {collection.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {activeCollection && (
            <div className="list-product hide-product-sold grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
              {activeCollection.products.map((product) => (
                <ProductPreview
                  key={product.id}
                  productPreview={product}
                  region={region}
                  isFeatured
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ClientCollectionTabs
