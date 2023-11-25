import { XMarkIcon } from '@heroicons/react/24/outline'
import { Context } from '../../Context'
import { useContext } from 'react'
import { OrderCard } from '../OrderCard'

const CheckoutSideMenu = () => {
  const context = useContext(Context)
  const handleCloseMenu = () => {
    context.closeMenu()
    context.setProductToShow({})
  }

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    )

    context.setCartProducts(filteredProducts)
  }

  return (
    <aside className="flex flex-col fixed right-0 border border-black bg-gray-200 rounded-lg w-[360px] h-[calc(100vh-80px)]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={handleCloseMenu}
        />
      </div>
      <div>
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.image}
            id={product.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </aside>
  )
}

export { CheckoutSideMenu }
