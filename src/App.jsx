import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec'
import OurVenue from './components/Venue'
import Quote from './components/Quote'
import Menu from './components/Menu'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
    <div className="webpage">
      <Navbar />
      <div className="rect1"></div>
      <Herosec />
      <OurVenue />
      <Quote />
      <Menu />
      <Footer />
    </div>
    </>
  )
}

export default App
