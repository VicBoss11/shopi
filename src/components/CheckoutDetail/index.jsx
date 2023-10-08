import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import OrderCard from '../OrderCard'
import './styles.css'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'

function CheckoutDetail() {
  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id)

    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01/02/23',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside className={`${context.isCheckoutDetailOpen ? 'flex' : 'hidden'} checkout-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <header className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>

        <button onClick={context.closeProductDetail}>
          <XMarkIcon className='h-6 w-6 text-black' onClick={context.closeCheckoutDetail} />
        </button>
      </header>

      <div className='flex flex-col gap-2 px-6 overflow-y-auto flex-1'>
        {
          context.cartProducts.map((product) =>
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images[0]}
              price={product.price}
              handleDelete={handleDelete}
            />
          )
        }
      </div>

      <div className='px-6 mb-6'>
        <p className='flex justify-between items-center mb-2'>
          <span className='font-light'>Total:</span>
          <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
        </p>

        <Link to='my-orders/last'>
          <button
            className='w-full bg-black py-3 text-white rounded-lg'
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutDetail