"use client"

// ModalQuickviewContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react"
import { ProductCollectionWithPreviews } from "types/global"

interface ModalQuickviewContextProps {
  children: ReactNode
}

interface ModalQuickviewContextValue {
  selectedProduct: ProductCollectionWithPreviews | null
  openQuickview: (product: ProductCollectionWithPreviews) => void
  closeQuickview: () => void
}

const ModalQuickviewContext = createContext<
  ModalQuickviewContextValue | undefined
>(undefined)

export const ModalQuickviewProvider: React.FC<ModalQuickviewContextProps> = ({
  children,
}) => {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductCollectionWithPreviews | null>(null)

  const openQuickview = (product: ProductCollectionWithPreviews) => {
    setSelectedProduct(product)
  }

  const closeQuickview = () => {
    setSelectedProduct(null)
  }

  return (
    <ModalQuickviewContext.Provider
      value={{ selectedProduct, openQuickview, closeQuickview }}
    >
      {children}
    </ModalQuickviewContext.Provider>
  )
}

export const useModalQuickviewContext = () => {
  const context = useContext(ModalQuickviewContext)
  if (!context) {
    throw new Error(
      "useModalQuickviewContext must be used within a ModalQuickviewProvider"
    )
  }
  return context
}
