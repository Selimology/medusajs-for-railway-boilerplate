"use client"

import React, { useState, useEffect } from "react"
import { countdownTime } from "@lib/util/countdown"
import { useCountdownContext } from "@lib/context/countdown-context"

const CountdownTimer = () => {
  const { targetDate } = useCountdownContext()
  const [timeLeft, setTimeLeft] = useState(countdownTime(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(countdownTime(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex items-center gap-20 max-sm:gap-4">
      {/* Days */}
      <div className="item flex flex-col items-center">
        <div>{timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}</div>
        <div className="font-medium">Days</div>
      </div>
      <span> : </span>
      {/* Hours */}
      <div className="item flex flex-col items-center">
        <div>{timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}</div>
        <div className="font-medium">Hours</div>
      </div>
      <span> : </span>
      {/*Minutes */}
    </div>
  )
}

export default CountdownTimer
