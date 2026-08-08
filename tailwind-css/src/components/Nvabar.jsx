import React from 'react'
import Navmenu from './Navmenu'
import Navicons from './Navicons'

const Nvabar = () => {
  return (
    <div className='w-5xl h-[70px] mx-[17%] rounded-b-[8px] bg-[#1B1B1B] flex justify-evenly items-center'>
        <Navmenu />
        <Navicons />
    </div>
  )
}

export default Nvabar