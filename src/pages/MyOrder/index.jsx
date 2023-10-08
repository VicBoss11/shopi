import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../../components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  const pathLastSegment =  currentPath.substring(currentPath.lastIndexOf('/') + 1)
  const index = pathLastSegment === 'last' ? context.order?.length - 1 : pathLastSegment

  return (
    <Layout>
      <div className='flex justify-center items-center relative w-80 mb-6'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer' />
        </Link>

        <h1 className='font-medium text-xl'>My Order</h1>
      </div>

      <div className='flex flex-col gap-2 w-80 px-6 overflow-y-auto flex-1'>
        {
          context.order?.[index]?.products.map((product) =>
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
            />
          )
        }
      </div>
    </Layout>
  )
}

export default MyOrder
