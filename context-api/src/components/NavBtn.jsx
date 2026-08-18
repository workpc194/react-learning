import React, { useContext } from 'react'
import { ContextData } from '../context/ThemeContext'

const NavBtn = () => {

    const {theme, setTheme} = useContext(ContextData)

    const changeTheme = ()=>{
        if(theme === 'light'){
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

  return (
    <button onClick={changeTheme} className='w-30 h-10 border rounded m-10'>
        Change Theme
    </button>
  )
}

export default NavBtn