import { FlashSaleType } from "types/flashsale"
import CountdownTimer from "../countdownTimer"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface Prop {
  data: FlashSaleType
}
const FlashSale = ({ data }: Prop) => {
  return (
    <section className="w-full style-six bg-white">
      <div className="mx-auto px-4 w-full max-w-7xl">
        <div className="flex text items-center justify-between max-lg:flex-col max-lg:justify-center max-lg:text-center gap-5 py-14">
          <div>
            <div>{data.title}</div>
            <div className="mt-3">{data.description}</div>
          </div>
          <CountdownTimer />
          <LocalizedClientLink
            href={"/shop/breadcrumb-img"}
            className="text-sm bg-black text-white py-4 px-10 cursor-pointer inline-block "
          >
            {data.buttonText}
          </LocalizedClientLink>
        </div>
      </div>
    </section>
  )
}

export default FlashSale
