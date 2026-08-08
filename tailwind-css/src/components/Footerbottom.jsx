import React from 'react'
import Clickup from './images/clickup.png'
import Dropbox from './images/dropbox.png'
import Payhcex from './images/paychex.png'
import Elastic from './images/Elastic.png'
import Stripe from './images/stripe.png'


const Footerbottom = () => {
  return (
    <div className='w-4xl h-[60px] mt-[20px] flex justify-between'>
      <div className='w-[160px] h-[60px] border border-[#1B1B1B] rounded-md flex justify-center items-center'>
        <img src={Clickup} alt="Clickup" />
      </div>
      <div className='w-[160px] h-[60px] border border-[#1B1B1B] rounded-md flex justify-center items-center'>
        <img src={Dropbox} alt="Dropbox" />
      </div>
      <div className='w-[160px] h-[60px] border border-[#1B1B1B] rounded-md flex justify-center items-center'>
        <img src={Payhcex} alt="Paychex" />
      </div>
      <div className='w-[160px] h-[60px] border border-[#1B1B1B] rounded-md flex justify-center items-center'>
        <img src={Elastic} alt="Elastic" />
      </div>
      <div className='w-[160px] h-[60px] border border-[#1B1B1B] rounded-md flex justify-center items-center'>
        <img  src={Stripe} alt="Stripe" />
      </div>
    </div>
  )
}

export default Footerbottom