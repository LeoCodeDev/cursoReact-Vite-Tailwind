import { useContext } from 'react'
import { Layout } from '../../Components/Layout'
import { OrderCard } from '../../Components/OrderCard'
import { Context } from '../../Context'

function MyOrder() {
  const context = useContext(Context)
  console.log(context.order);
  return (
    <Layout>
      My Order
      <div className="overflow-y-auto scrollbar-hide">
        {context.order?.at(-1).products.map((product) => (
          <OrderCard
            key={product.id}
            title={product.title}
            price={product.price}
            img={product.image}
            id={product.id}
          />
        ))}
      </div>
    </Layout>
  )
}

export {MyOrder}