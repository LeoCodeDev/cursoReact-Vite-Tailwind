import {XMarkIcon} from '@heroicons/react/24/outline'
import { Context } from '../../Context'
import { useContext } from 'react'

const CheckoutSideMenu = () => {
  const context = useContext(Context)
  const handleCloseMenu = () => {
    context.closeMenu()
    context.setProductToShow({})
  }
  return (
    <aside 
        className="flex flex-col fixed right-0 border border-black bg-gray-200 rounded-lg w-[360px] h-[calc(100vh-80px)]"
    >
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <XMarkIcon 
            className='h-6 w-6 cursor-pointer'
            onClick={handleCloseMenu}
            />
        </div>
    </aside>
  )
}

export { CheckoutSideMenu }