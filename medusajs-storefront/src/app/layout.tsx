import { Metadata } from "next"
import "styles/styles.scss"
import GlobalProvider from "../../GlobalProvider"
import React from "react"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <html lang="en" data-mode="light">
        <body>
          <main className="relative">{props.children}</main>
        </body>
      </html>
    </GlobalProvider>
  )
}
