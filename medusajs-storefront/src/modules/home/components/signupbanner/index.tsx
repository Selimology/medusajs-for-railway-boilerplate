import EmailSignUp from "@modules/layout/components/email-signup"
import { SignUpType } from "types/signup"

interface Props {
  data: SignUpType
}

export default async function SignupBanner({ data }: Props) {
  return (
    <section className="mx-auto px-4 w-full max-w-7xl">
      <div className="newsletter-block md:py-20 sm:py-14 py-10 sm:px-6 px-6 rounded-[32px] sm:rounded-3xl flex flex-col items-center bg-black md:mt-20 mt-10">
        <div className="text-white text-center">{data.title}</div>
        <div className="text-white text-center mt-3">{data.description}</div>
        <div className="input-block lg:w-1/2 sm:w-3/5 w-full h-[52px] sm:mt-10 mt-7">
          <EmailSignUp />
        </div>
      </div>
    </section>
  )
}
