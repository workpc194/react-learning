import React from 'react'
import { Link, Outlet, parsePath } from 'react-router'

const Product = () => {

  return (
    <div>
      <div className='product-link'>
        <Link to={'men'}>Men</Link>
        <Link to={'women'}>WoMen</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Product