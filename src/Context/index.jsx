import { createContext, useState } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
  //* Shopping Cart
  // ~ Product Quantity
  const [count, setCount] = useState(0)

  // ~ Products to Cart
  const [cartProducts, setCartProducts] = useState([])

  // * Product Details
  // ~ Show Product
  const [productToShow, setProductToShow] = useState({})

  // * Open/Close Menus

  const [isOpen, setIsOpen] = useState({
    details: false,
    checkout: false,
  })

  const openMenu = (menu) => {
    const updateState = {}

    for (const key in isOpen) {
      updateState[key] = false
    }

    updateState[menu] = true
    setIsOpen(updateState)
  }

  const closeMenu = () => {
    const updateState = {}
    for (const key in isOpen) {
      updateState[key] = false
    }
    setIsOpen(updateState)
  }

  return (
    <Context.Provider
      value={{
        count,
        setCount,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isOpen,
        openMenu,
        closeMenu
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
