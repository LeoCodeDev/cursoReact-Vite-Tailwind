import { createContext, useState } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
  //* Shopping Cart
  // ~ Product Quantity
  const [count, setCount] = useState(0)

  // ~ Products to Cart
  const [cartProducts, setCartProducts] = useState([])

  // * Product Details
  // ~ Open/Close
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const openDetailMenu = () => {
    setIsDetailOpen(true)
  }

  const closeDetailMenu = () => {
    setIsDetailOpen(false)
  }

  // ~ Show Product
  const [productToShow, setProductToShow] = useState({})

  return (
    <Context.Provider
      value={{
        count,
        setCount,
        isDetailOpen,
        openDetailMenu,
        closeDetailMenu,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
