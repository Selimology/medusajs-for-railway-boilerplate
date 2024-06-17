"use client"

import React, { createContext, useContext } from "react"

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
  return (
    <CountdownContext.Provider value={{ targetDate }}>
      {children}
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
