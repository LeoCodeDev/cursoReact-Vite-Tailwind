import { useContext } from "react"
import { Context } from "../../Context"

const Card = (props) => {
  const {product} = props
  const context = useContext(Context)

  return (
    <div className='bg-white w-56 h-60 cursor-pointer rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bg-white/60 rounded-lg px-3 bottom-0 left-0 m-2 text-sm'>{product.category}</span>
          <img className='w-full h-full object-cover rounded-lg' src={product.image} alt={product.title} />
          <div 
            className='absolute top-0 right-0 flex justify-center items-center bg-white/60 w-6 h-6 rounded-full text-md m-2'
            onClick={()=> context.setCount(context.count + 1)}
          >
            +
          </div>
        </figure>
        <p className="flex justify-between items-center">
          <span className='text-sm font-light'>{product.title}</span>
          <span className='text-md font-medium'>{`$${product.price}`}</span>
        </p>
    </div>
  )
}

export {Card}
