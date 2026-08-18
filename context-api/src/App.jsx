import React from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import NavBtn from './components/NavBtn'

const App = () => {

  return (
    <div className='w-screen min-h-screen bg-black text-white'>
      <Navbar />
      <NavBtn />
    </div>
  )
}

export default App