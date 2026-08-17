import React from 'react'
import { Route, Routes, useNavigate } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Navlinks from './components/Navlinks';
import Pagenot from './pages/Pagenot';
import Men from './components/Men';
import Women from './components/Women';
import Kid from './components/Kid';

const App = () => {

  const navigate = useNavigate()
  const backBtnClick = ()=>{
    navigate(-1)
  }

  const nextBtnClick = ()=>{
    navigate(+1)
  }

  const homeBtnClick = ()=>{
    navigate('/')
  }

  return (
    <div>
      <div className="nav">
        <h2>Logo</h2>
        <Navlinks />
      </div>
      <button className='back-btn' onClick={backBtnClick}>Go Back</button>
      <button className='back-btn' onClick={nextBtnClick}>Go Next</button>
      <button className='back-btn' onClick={homeBtnClick}>Go Home</button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />} >
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path=':id' element={<Kid />} />
        </Route>
        <Route path='*' element={<Pagenot />} />
      </Routes>
    </div>
  )
}

export default App