import React from 'react'
import { ChevronRight } from 'lucide-react';

const Leftbtn = () => {
  return (
    <div>
        <button className='w-xs h-[63px] bg-[#3F8E00] rounded-sm text-[#FFFFFF] font-bold text-[16px] flex justify-center items-center'>Let's Get Started {<ChevronRight />}</button>
    </div>
  )
}

export default Leftbtn