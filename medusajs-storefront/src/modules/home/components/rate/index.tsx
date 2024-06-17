import React from "react"
import { FaStar } from "react-icons/fa6"

interface RateProps {
  currentRate: number | undefined
  size: number
}

const Rate = ({ currentRate, size }: RateProps) => {
  let arrayOfStar = []

  for (let i = 0; i < 5; i++) {
    if (currentRate) {
      if (i >= currentRate) {
        arrayOfStar.push(<FaStar color="#9FA09C" key={i} size={size} />)
      } else {
        arrayOfStar.push(<FaStar color="#ECB018" size={size} key={i} />)
      }
    }
  }

  return <div className="flex"> {arrayOfStar}</div>
}

export default Rate
