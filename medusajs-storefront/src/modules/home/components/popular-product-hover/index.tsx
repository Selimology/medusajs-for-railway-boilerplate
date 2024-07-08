// "use client"

// import LocalizedClientLink from "@modules/common/components/localized-client-link"
// import Image from "next/image"
// import { LookBookType } from "types/lookbook"

// interface PopularProductHoverProps {
//   productData: LookBookType
// }

// const LookBookHover = ({ productData }: PopularProductHoverProps) => {
//   return (
//     <>
//       <Image
//         src={productData.image.imageUrl}
//         width={1000}
//         height={1000}
//         alt={productData.image.alt}
//         priority={true}
//         className="lg:hw-full h-full object-cover"
//       />
//       {productData.products.map((product) => (
//         <div
//           key={product.id}
//           className="dots absolute cursor-pointer"
//           style={{ top: product.dotTop, left: product.dotLeft }}
//           cursor-pointer
//         >
//           <div className="top-dot w-8 h-8 rounded-full bg-outline flex items-center justify-center">
//             <span className="bg-white w-3 h-3 rounded-full duration-300"></span>
//           </div>
//           <LocalizedClientLink
//             className="product-infor bg-white rounded-2xl p-4"
//             href={product.url}
//           >
//             <div className="text-title name">{product.name}</div>
//             <div className="price text-center">${product.price}</div>
//             <div className="text-center underline mt-1 text-button-uppercase duration-300 text-secondary2 hover:text-black">
//               View
//             </div>
//           </LocalizedClientLink>
//         </div>
//       ))}
//     </>
//   )
// }

// export default LookBookHover
