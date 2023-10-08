import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export function ShoppingCartProvider({ children }) {
  const [count, setCount] = useState(0)

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  const [isCheckoutDetailOpen, setIsCheckoutDetailOpen] = useState(false)
  const openCheckoutDetail = () => setIsCheckoutDetailOpen(true)
  const closeCheckoutDetail = () => setIsCheckoutDetailOpen(false)
  const toggleCheckoutDetail = () => setIsCheckoutDetailOpen(!isCheckoutDetailOpen)

  const [productToShow, setProductToShow] = useState({})
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState()
  const [searchByTitle, setSearchByTitle] = useState('')
  const [searchByCategory, setSearchByCategory] = useState('')

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filterItemsByTitle = (items, title) =>
    items?.filter((item) => item.title.toLowerCase().includes(title.toLowerCase()))

  const filterItemsByCategory = (items, category) =>
    items?.filter((item) => item.category.name.toLowerCase().includes(category.toLowerCase()))

  useEffect(() => {
    if (searchByTitle && searchByCategory) {
      setFilteredItems(
        filterItemsByTitle(filterItemsByCategory(items, searchByCategory), searchByTitle)
      )
    } else if (searchByCategory) {
      setFilteredItems(filterItemsByCategory(items, searchByCategory))
    } else if (searchByTitle) {
      setFilteredItems(filterItemsByTitle(items, searchByTitle))
    } else {
      setFilteredItems(items)
    }
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      openProductDetail,
      closeProductDetail,
      isCheckoutDetailOpen,
      openCheckoutDetail,
      closeCheckoutDetail,
      toggleCheckoutDetail,
      productToShow,
      setProductToShow,
      cartProducts,
      setCartProducts,
      order,
      setOrder,
      items,
      setItems,
      filteredItems,
      searchByTitle,
      setSearchByTitle,
      searchByCategory,
      setSearchByCategory,
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}