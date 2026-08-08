import React from 'react'
import Behance from './images/Behance.png'
import LinkedIn from './images/LinkedIn.png'
import Twitter from './images/Twitter.png'

const Navicons = () => {
    return (
        <div className='w-[9%] h-[18px] flex justify-between items-center text-[#9C9C9C] text-[14px]'>
            <img src={LinkedIn} alt="LinkedIn" />
            <img src={Behance} alt="Behance" />
            <img src={Twitter} alt="Twitter" />
        </div>
    )
}

export default Navicons