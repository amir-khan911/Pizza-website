import React from 'react'
import './index.css'
import './App.css'
import { useRef } from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Shop from './Components/Shop'
import Manu from './Components/Manu'
import Clients from './Components/Clients'
import Prices from './Components/Prices'
import Contact from './Components/Contact'
const App = () => {
  const topSectionRef = useRef(null);
  const bottomSectionRef = useRef(null);

  const scrollToBottom = () => {
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
   <>
     
    <Header/>
    <About/>
    <Shop/>
    <Manu/>
    <Clients/>
    <Prices/>
    <Contact/>
    
    {/* ================[BUTTONS FUNCTIONALLITY]========================== */}
   
   </>
  )
}

export default App
