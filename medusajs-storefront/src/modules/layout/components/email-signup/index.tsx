"use client"

import { Dialog, Transition } from "@headlessui/react"
import Spinner from "@modules/common/icons/spinner"
import axios from "axios"
import { useState } from "react"

interface Message {
  type: string
  description: string
}

const EmailSignUp = () => {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<Message | null>(null)

  const subscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) {
      setMessage({
        type: "error",
        description: "Email cannot be empty!",
      })

      return
    }

    setIsLoading(true)

    axios
      .post("http://localhost:9000/mailchimp/subscribe", {
        email,
      })
      .then((e) => {
        setMessage({
          type: "success",
          description: "Subscribed Successfully!",
        })

        setEmail("")
      })
      .catch((e) => {
        console.log(e)
        setMessage({
          type: "error",
          description: "An error occured!",
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <>
      <form onSubmit={subscribe}>
        <div className="items-center mb-3 space-y-4 sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="member_email"
              className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              className="block p-3 pl-10 w-full text-sm text-gray-900  bg-gray-50  border border-gray-300  focus:ring-[#685b50] focus:border-[#685b50]"
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setMessage(null)
              }}
            />
          </div>
          <div className="md:ml-4">
            <button
              type="submit"
              className=" bg-[#685B50] border border-[#685B50] py-3 px-5 w-full text-sm font-medium text-center text-white  cursor-pointer bg-primary-600 border-primary-600 hover:border-primary-700 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 "
            >
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-sm text-left text-gray-400 dark:text-gray-300">
          We care about the protection of your data.{" "}
          <a href="#" className="font-medium text-white hover:underline">
            Read our Privacy Policy
          </a>
          .
        </div>
      </form>
      {isLoading && (
        <Transition show={isLoading}>
          <Dialog
            onClose={() => setIsLoading(false)}
            className="relative z-[100]"
          >
            <Transition.Child
              enter="ease-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
                <Spinner size={24} />
              </div>
            </Transition.Child>
          </Dialog>
        </Transition>
      )}
    </>
  )
}

export default EmailSignUp
