import { Region } from "@medusajs/medusa"
import { ProductCollectionWithPreviews } from "types/global"
import ProductRail from "../featured-products/product-rail"

interface CollectionProductRailProps {
  collection: ProductCollectionWithPreviews | null
  region: Region
}

export default async function CollectionProductRail({
  collection,
  region,
}: CollectionProductRailProps) {
  if (!collection) {
    return null
  }

  return (
    <li key={collection.id}>
      <ProductRail collection={collection} region={region} />
    </li>
  )
}
