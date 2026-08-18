import React from 'react'
import { useContext } from 'react'
import { ContextData } from '../context/ThemeContext'

const Button = () => {

    const [logo, setLogo] = useContext(ContextData)

    const btnclick = ()=>{
        if(logo === 'Pakistan'){
            setLogo('Noman')
        } else {
            setLogo('Pakistan')
        }
    }

  return (
    <button onClick={btnclick} className='w-30 h-10 border rounded m-10'>
        Change Logo
    </button>
  )
}

export default Button