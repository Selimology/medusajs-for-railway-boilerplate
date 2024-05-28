import { Metadata } from "next"

import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import AboutUs from "@modules/layout/templates/aboutUs"
import SignupBanner from "@modules/layout/templates/signupbanner"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {props.children}
      <AboutUs />
      <SignupBanner />
      <Footer />
    </>
  )
}
