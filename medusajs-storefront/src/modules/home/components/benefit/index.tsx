import React from "react"
import { BenefitType } from "types/benefit"

interface Props {
  data: Array<BenefitType>
}

const Benefit = ({ data }: Props) => {
  return (
    <>
      <div className="bg-linear w-full p-16">
        <section className="mx-auto px-4 w-full max-w-7xl relative ">
          <div className="grid items-start lg:grid-cols-4 grid-cols-2 gap-7 ">
            {data.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <i
                  className={`${benefit.icon} flex flex-col items-center justify-center lg:text-7xl text-5xl`}
                ></i>

                <div className="text-center mt-5">{benefit.title}</div>
                <div className="text-center mt-3">{benefit.description}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Benefit
