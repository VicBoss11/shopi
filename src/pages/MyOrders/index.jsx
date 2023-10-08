import { useContext } from 'react'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      <div className='flex justify-center items-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>My Orders</h1>
      </div>

      {
        context.order.map((order, index) => (
          <Link to={`/my-orders/${index}`} key={index}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>

        ))
      }

    </Layout>
  )
}

export default MyOrders
