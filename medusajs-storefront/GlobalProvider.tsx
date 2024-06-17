import { ModalQuickviewProvider } from "@lib/context/modalQuickview-context"
import React from "react"

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <ModalQuickviewProvider>{children}</ModalQuickviewProvider>
}

export default GlobalProvider
