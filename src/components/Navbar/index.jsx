import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../context'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

function Navbar() {
  const context = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm bg-white font-light'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            onClick={() => context.setSearchByCategory('')}
          >
            Shopi
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => context.setSearchByCategory('')}
          >
            All
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => context.setSearchByCategory('clothes')}
          >
            Clothes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/shoes'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => context.setSearchByCategory('shoes')}
          >
            Shoes
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => context.setSearchByCategory('electronics')}
          >
            Electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/furniture'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => context.setSearchByCategory('furniture')}
          >
            Furniture
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => isActive ? activeStyle : undefined}
            onClick={() => context.setSearchByCategory('others')}
          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          victor.af1104@gmail.com
        </li>

        <li>
          <NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>

        <li>
          <NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>

        <li>
          <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>

        <li className='flex items-center'>
          <button onClick={context.toggleCheckoutDetail}>
            <ShoppingCartIcon className='h-6 w-6 text-black' />
          </button>

          <span>{context.cartProducts.length}</span>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar