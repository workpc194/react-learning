import React, { useContext, useRef } from 'react'
import NavLogo from './NavLogo'
import NavMenu from './NavMenu'
import { ContextData } from '../context/ThemeContext'

const Navbar = () => {

  const {theme} = useContext(ContextData)

  const navTheme = useRef(null)



  if (theme === 'dark') {
    if (navTheme.current) {
      if(navTheme.current.classList.contains('bg-blue-500')){
        navTheme.current.classList.remove('bg-blue-500');
      }
      navTheme.current.classList.add('bg-blue-100');
    }
  } else {
    if (navTheme.current) {
      if(navTheme.current.classList.contains('bg-blue-100')){
        navTheme.current.classList.remove('bg-blue-100');
      }
      navTheme.current.classList.add('bg-blue-500');
    }
  }

  return (
    <div ref={navTheme} id={theme} className='w-full h-15 flex items-center justify-between px-4 bg-blue-500'>
      <NavLogo />
      <NavMenu />
    </div>
  )
}

export default Navbar