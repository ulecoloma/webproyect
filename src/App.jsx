import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { ProductPage } from './components/Products/Products'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetail from './components/ItemDetail/ItemDetail'


function App() {

  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/products' element={<ProductPage />}/>
      <Route path='/products/:productId' element={<ItemDetail />} />
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
   <Footer />
    
    </BrowserRouter>
   

    </>
  )
}

export default App
