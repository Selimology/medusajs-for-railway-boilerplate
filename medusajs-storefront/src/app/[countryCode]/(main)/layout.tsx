import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import footerData from "@lib/data/json/Footer.json"
import topBannerdata from "@lib/data/json/TopBanner.json"
import BannerTop from "@modules/layout/components/banner-top"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <BannerTop data={topBannerdata} />
        <Nav />
        <main className="flex-1">{props.children}</main>
        <Footer {...footerData} />
      </div>

    </>
  )
}
