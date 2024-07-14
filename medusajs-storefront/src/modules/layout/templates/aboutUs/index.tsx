import React from "react"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import Image from "next/image"
import { Text } from "@medusajs/ui"

const categories = [
  {
    name: "WHAT",
    post: {
      header: "ABOUT US",
      title: "WHAT WE DO",
      description:
        "For over 25 years we've been creating beautiful sterling silver, gold & gemstone jewellery. We aim to make our business as eco-friendly and ethical as possible.",
      img: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
    },
  },
  {
    name: "HOW",
    post: {
      header: "ABOUT US",
      title: "HOW WE WORK",
      description:
        "Our jewellery is handmade in sterling silver, gold and gemstones - either in our own workshop or by the artisans we partner with.",
      img: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    name: "WHERE",
    post: {
      header: "ABOUT US",
      title: "WHERE WE ARE",
      description:
        "We're a family run jewellery brand based by the seaside in South Australia. We have customers around the world.",
      img: "https://images.unsplash.com/photo-1626085664138-9974ba8fb971?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
]

export default function AboutUs() {
  return (
    <div className="flex min-h-screen w-full justify-center pt-24 px-4 bg-white mb-0 md:mb-10 ">
      <div className="w-full max-w-5xl">
        <TabGroup>
          <TabPanels className="mt-3">
            {categories.map(({ name, post }) => (
              <TabPanel
                key={name}
                className="bg-black/5 p-0 flex flex-col md:flex-row"
              >
                <Image
                  src={post.img}
                  alt="necklaces"
                  width={500}
                  height={700}
                  className="w-full md:w-1/2 object-cover"
                />
                <div className="flex flex-col justify-end mb-10 px-2 md:px-3 gap-5  w-full md:w-1/2 mt-5 md:mt-0 max-w-full overflow-hidden">
                  <p className="font-thin">{post.header}</p>
                  <p className="text-2xl md:text-4xl font-thin">{post.title}</p>
                  <p className="text-sm md:text-base">{post.description}</p>
                </div>
              </TabPanel>
            ))}
          </TabPanels>
          <TabList className="flex gap-2 md:gap-4 justify-center mt-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="
                border-2 md:border-4 border-transparent py-1 px-3 text-xs md:text-sm font-semibold text-black focus:outline-none data-[selected]:border-b-black data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black
                "
              >
                {name}
              </Tab>
            ))}
          </TabList>
        </TabGroup>
      </div>
    </div>
  )
}
