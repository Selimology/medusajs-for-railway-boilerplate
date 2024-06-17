import { FlashSaleType } from "types/flashsale"
import CountdownTimer from "../countdownTimer"
import Link from "next/link"

interface Prop {
  data: FlashSaleType
}
const FlashSale = ({ data }: Prop) => {
  return (
    <section className="w-full style-six bg-white">
      <div className="mx-auto px-4 w-full max-w-7xl">
        <div className="flex text items-center justify-between max-lg:flex-col max-lg:justify-center max-lg:text-center gap-5 py-10">
          <div>
            <div>{data.title}</div>
            <div className="mt-3">{data.description}</div>
          </div>
          <CountdownTimer />
          <Link
            href={
              "https://res.cloudinary.com/djoki7czl/image/upload/v1717346704/karf3jyynrnqfvdeqkrn.svg"
            }
          ></Link>
        </div>
      </div>
    </section>
  )
}

export default FlashSale
