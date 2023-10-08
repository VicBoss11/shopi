import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard({ id, title, imageUrl, price, handleDelete }) {
  let renderXMarkIcon;

  if (handleDelete) {
    renderXMarkIcon = (
      <button onClick={() => handleDelete(id)}>
        <XMarkIcon className='h-6 w-6 text-black' />
      </button>
    )
  }

  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>

        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <span className='text-lg font-medium'>${price}</span>

        {renderXMarkIcon}
      </div>
    </div>
  )
}

export default OrderCard