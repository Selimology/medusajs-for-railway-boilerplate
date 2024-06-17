import { headers } from "next/headers"
import { listRegions } from "@lib/data"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Fragment, useState, Suspense } from "react"
import { Dialog, Popover, Tab, Transition } from "@headlessui/react"
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import { classNames } from "@lib/util/classnames"
import NavbarMenu from "@modules/layout/components/mobile-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)

  return (
    <header className="bg-white">
      <NavbarMenu />
    </header>
  )
}

{
  /* <div className="bg-white">
<header className="relative h-16 mx-auto border-b duration-200 bg-white border-ui-border-base">
  <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
    <div className="flex-1 basis-0 h-full flex items-center">
      <div className="h-full">
        <SideMenu regions={regions} />
      </div>
    </div>

    <div className="flex items-center h-full">
      <LocalizedClientLink
        href="/"
        className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
      >
        Medusa Store
      </LocalizedClientLink>
    </div>

    <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
      <div className="hidden small:flex items-center gap-x-6 h-full">
        {process.env.FEATURE_SEARCH_ENABLED && (
          <LocalizedClientLink
            className="hover:text-ui-fg-base"
            href="/search"
            scroll={false}
          >
            Search
          </LocalizedClientLink>
        )}
        <LocalizedClientLink
          className="hover:text-ui-fg-base"
          href="/account"
        >
          Account
        </LocalizedClientLink>
      </div>
      <Suspense
        fallback={
          <LocalizedClientLink
            className="hover:text-ui-fg-base flex gap-2"
            href="/cart"
          >
            Cart (0)
          </LocalizedClientLink>
        }
      >
        <CartButton />
      </Suspense>
    </div>
  </nav>
</header>
</div> */
}
