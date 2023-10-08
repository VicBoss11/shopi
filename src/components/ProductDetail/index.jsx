import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../context'
import './styles.css'

function ProductDetail() {
  const context = useContext(ShoppingCartContext)
  const product = context.productToShow;

  return (
    <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>

        <button onClick={context.closeProductDetail}>
          <XMarkIcon className='h-6 w-6 text-black' onClick={context.closeProductDetail}/>
        </button>
      </div>

      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={product.images?.[0]}
          alt={product.title}
        />
      </figure>

      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl'>{product.price}</span>
        <span className='font-medium text-md'>{product.title}</span>
        <span className='font-light text-sm'>{product.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail