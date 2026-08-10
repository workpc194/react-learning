import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increaseBtn = ()=>{
    setNum(num + 1)
  }

  const decreaseBtn = ()=>{
    setNum(num - 1)
  }

  const resetBtn = ()=>{
    setNum(0)
  }

  if(num < 0){ // i try lessthan equal to sige but it shows an error (to many rerender) can you explain please why this error
    setNum(0)
  }

  return (
    <div className='w-screen min-h-screen p-4 bg-black'>
      <div className='w-full h-50 text-center leading-50'>
        <h1 className={`text-7xl ${(num === 0)?'text-red-400':'text-green-400'}`}>{num}</h1>
      </div>
      <div className='w-full h-20 flex items-center justify-evenly'>
        <button onClick={increaseBtn} className='w-30 h-10 bg-green-400 text-center rounded'>Increase</button>
        <button onClick={decreaseBtn} className='w-30 h-10 bg-red-400 text-center rounded'>Decrease</button>
      </div>
      <button onClick={resetBtn} className='w-full h-10 text-center border rounded border-gray-500 text-white mt-3'>Reset</button>
    </div>
  )
}

export default App