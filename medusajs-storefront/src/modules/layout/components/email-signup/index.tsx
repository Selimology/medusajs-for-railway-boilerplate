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
      <form onSubmit={subscribe} className="w-full h-full relative">
        <input
          className="w-full h-full pl-4 pr-14 rounded-xl border"
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
        <button
          type="submit"
          className="bg-[#f4e079] text-black py-4 px-10 rounded-lg outline-none cursor-pointer hover:bg-[#e3c454] absolute top-1 bottom-1 right-1 flex items-center justify-center"
        >
          Subscribe
        </button>
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

      {message?.type === "error" ? (
        <div className="flex justify-center py-4 text-red-500">
          {message.description}
        </div>
      ) : (
        <div className="flex justify-center py-4 text-green-500">
          {message?.description}
        </div>
      )}
    </>
  )
}

export default EmailSignUp
