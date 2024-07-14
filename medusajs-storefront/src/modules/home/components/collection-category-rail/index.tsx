"use client"

import { Region } from "@medusajs/medusa"
import { ProductCollectionWithPreviews } from "types/global"
import ClientCollectionTabs from "../client-collection-tabs"

interface CollectionCategoryRailProps {
  collections: ProductCollectionWithPreviews[] | null
  region: Region
}

const CollectionCategoryRail = ({
  collections,
  region,
}: CollectionCategoryRailProps) => {
  if (!collections) {
    return null
  }

  return <ClientCollectionTabs collections={collections} region={region} />
}

export default CollectionCategoryRail
