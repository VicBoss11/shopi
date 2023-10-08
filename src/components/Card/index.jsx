import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'


function Card({ item }) {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.closeCheckoutDetail()
    context.openProductDetail()
    context.setProductToShow(productDetail)
  }

  const addProductToCard = (event, product) => {
    event.stopPropagation()

    context.setCartProducts([...context.cartProducts, product])
    context.closeProductDetail()
    context.openCheckoutDetail()
  }

  const deleteProductFromCart = (event, item) => {
    event.stopPropagation()

    const filteredProducts = context.cartProducts.filter(product => product.id !== item.id)

    context.setCartProducts(filteredProducts)
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some((product) => product.id === id)

    if (isInCart) {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => deleteProductFromCart(event, item)}
        >
          <CheckIcon className='h-6 w-6 text-white' />
        </button>
      )
    } else {
      return (
        <button
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => addProductToCard(event, item)}
        >
          <PlusIcon className='h-6 w-6 text-black' />
        </button>
      )
    }

  }

  return (
    <div
      className='bg-white cursor-pointer w-56 h-60 rounded-lg'
      onClick={() => showProduct(item)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{item.category.name}</span>

        <img
          className='w-full h-full object-cover rounded-lg'
          src={item.images[0]}
          alt={item.title}
        />

        {renderIcon(item.id)}
      </figure>

      <p className='flex justify-between'>
        <span className='text-sm font-light'>{item.title}</span>
        <span className='text-lg font-medium'>${item.price}</span>
      </p>
    </div>
  )
}

export default Card