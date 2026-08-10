import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState([])



  const formSubmit = (a) => {
    a.preventDefault()
    let newNote = [...notes]
    newNote.push({
      title: title,
      detail: details
    });

    setNotes(newNote);

    setTitle('');
    setDetails('')
  }

  return (
    <div className='w-screen h-screen bg-black'>
      <form onSubmit={(a) => {
        formSubmit(a)
      }} className='w-auto h-87 pt-3.5 flex flex-col items-center'>
        <input type="text" placeholder='Enter Your Notes Title...' className='w-[98%] h-10 border p-3.5 border-gray-500 rounded text-white font-bold' value={title} onChange={(a) => { setTitle(a.target.value) }} />
        <textarea placeholder='Enter Your Notes Here...' className='w-[98%] h-60 resize-none border p-3.5 mt-3.5 border-gray-500 rounded text-white' value={details} onChange={(a) => { setDetails(a.target.value) }}></textarea>
        <button className='w-[98%] h-10 border-2 mt-3.5 border-gray-700 rounded bg-white font-bold'>Save Notes</button>
      </form>
      <div className='w-full h-86 flex items-center overflow-auto [&-::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] text-white'>
        {notes.map(function (elem, idx) {
          return (
            <div key={idx} className='w-35 shrink-0 h-50 m-3.5 border-2 border-gray-700 rounded'>
              <h2 className='font-bold text-1.5 text-center m-3 max-w-35 h-7 overflow-y-hidden [&-::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>{elem.title}</h2>
              <p className='text-1 text-center m-2 max-w-35 h-35 overflow-x-hidden [&-::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>{elem.detail}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App