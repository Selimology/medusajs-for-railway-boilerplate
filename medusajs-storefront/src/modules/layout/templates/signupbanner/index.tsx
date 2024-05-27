import EmailSignUp from "@modules/layout/components/email-signup"

export default async function SignupBanner() {
  return (
    <section
      className="bg-white "
      style={{
        backgroundImage:
          "url('https://znajewelsuk.com/cdn/shop/files/1_1_-min_1.jpg?v=1706698823&width=1600')",
        backgroundSize: "cover",
        backgroundPosition: "50% 20%",
      }}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="gap-16 justify-between items-center p-6 text-white bg-white  lg:flex lg:gap-24 md:p-12">
          <div className="w-full">
            <h2 className="mb-4 text-gray-500 text-3xl tracking-tight font-extrabold sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="font-light text-gray-400 sm:text-xl">
              Receive 20% discount on your first purchase, plus get early access
              to deals and new products
            </p>
          </div>
          <div className="mt-6 w-full lg:mt-0">
            <EmailSignUp />
          </div>
        </div>
      </div>
    </section>
  )
}
