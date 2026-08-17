import React from 'react'
import { Link } from 'react-router'

const Navlinks = () => {
  return (
    <div className='links'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/product'}>Product</Link>
    </div>
  )
}

export default Navlinks