import { Region } from "@medusajs/medusa"
import { ProductCollectionWithPreviews } from "types/global"

interface BestSellerProductsProps {
  collections: ProductCollectionWithPreviews[]
  region: Region
}

export default async function BestSellerProducts({
  collections,
  region,
}: BestSellerProductsProps) {}
