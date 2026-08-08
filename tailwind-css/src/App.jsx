import React from 'react'
import Nvabar from './components/Nvabar'
import Center from './components/Center'
import Footer from './components/footer'

const App = () => {
  return (
    <div className='w-full min-h-screen bg-[#000000]'>
      <Nvabar />
      <Center />
      <Footer />
    </div>
  )
}

export default App