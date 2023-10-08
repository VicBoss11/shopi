import { useContext } from 'react'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import ProductDetail from '../../components/ProductDetail'
import { ShoppingCartContext } from '../../context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    const itemsToRender = context.searchByTitle.length > 0 || context.searchByCategory.length > 0 ?
      context.filteredItems : context.items

    if (itemsToRender?.length > 0) {
      return (
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            itemsToRender?.map((item) => (
              <Card key={item.id} item={item} />
            ))
          }
        </div>
      )
    } else {
      return (
        <p className='w-80 text-center text-xl mt-6'>
          No matches found! 😞
        </p>
      )
    }
  }

  return (
    <Layout>
      <div className='flex justify-center items-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>

      <input
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        type='text'
        placeholder='Search a product'
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />

      {renderView()}

      <ProductDetail />
    </Layout>
  )
}

export default Home
