"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface CountdownContextValue {
  targetDate: Date
}

const CountdownContext = createContext<CountdownContextValue | undefined>(
  undefined
)

interface CountdownProviderProps {
  children: React.ReactNode
  targetDate: Date
}

export const CountdownProvider: React.FC<CountdownProviderProps> = ({
  children,
  targetDate,
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <CountdownContext.Provider value={{ targetDate }}>
      {isClient ? children : null}
    </CountdownContext.Provider>
  )
}

export const useCountdownContext = () => {
  const context = useContext(CountdownContext)
  if (!context) {
    throw new Error(
      "useCountdownContext must be used within a CountdownProvider"
    )
  }
  return context
}
