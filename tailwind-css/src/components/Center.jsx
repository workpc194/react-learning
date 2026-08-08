import React from 'react'
import Leftcenter from './Leftcenter'
import Rightcenter from './Rightcenter'

const Center = () => {
  return (
    <div className='w-4xl h-[350px] mx-[22%] mt-[76px] mb-[57px] flex justify-between items-center'>
        <Leftcenter />
        <Rightcenter />
    </div>
  )
}

export default Center