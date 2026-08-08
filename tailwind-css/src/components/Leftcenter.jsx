import React from 'react'
import Lefttext from './Lefttext'
import Leftbtn from './Leftbtn'

const Leftcenter = () => {
  return (
    <div className='w-lg h-[247px] flex flex-col justify-between items-start'>
        <Lefttext />
        <Leftbtn  />
    </div>
  )
}

export default Leftcenter