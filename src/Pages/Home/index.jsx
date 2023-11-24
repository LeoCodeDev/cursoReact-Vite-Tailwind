import { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { Context } from '../../Context'
import { ProductDetail } from '../../Components/ProductDetails'
import { Layout } from '../../Components/Layout'
import { Card } from '../../Components/Card'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'

function Home() {
  const context = useContext(Context)
  const [products, setProducts] = useState([])

  const fetchData = async () => {
    const { data } = await axios('/products')

    if (!data) return 'No products founds'
    if (data) setProducts(data)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }

    // fetch('https://fakestoreapi.com/products')
    // .then(response => response.json())
    // .then(data => setProducts(data))
  }, [])

  return (
    <Layout>
      Home
      {context.isOpen.details && <ProductDetail />}
      {context.isOpen.checkout && <CheckoutSideMenu />}
      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-lg">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </Layout>
  )
}

export { Home }
