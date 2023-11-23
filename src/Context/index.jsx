import { createContext, useState } from 'react'

const Context = createContext()

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const openDetailMenu = () => {
    setIsDetailOpen(true)
  }
  const closeDetailMenu = () => {
    setIsDetailOpen(false)
  }

  const [productToShow, setProductToShow] = useState({})

  console.log(productToShow);

  return (
    <Context.Provider
      value={{
        count,
        setCount,
        isDetailOpen,
        openDetailMenu,
        closeDetailMenu,
        productToShow, 
        setProductToShow
      }}
    >
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
