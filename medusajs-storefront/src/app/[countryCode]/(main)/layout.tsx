import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import TopBanner from "@modules/layout/components/top-banner"
import footerData from "@lib/data/json/Footer.json"
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <TopBanner slogan="New customers save 10% with the code GET10" />
      <Nav />
      {props.children}
      <Footer {...footerData} />
    </>
  )
}
