import React from 'react'
import Navbar from './Navbar'
const Header = () => {
  return (
   <>
    <div className="banner" id='myhome'>
    <Navbar/>
        <div className="banner__content">
            <div className='container'>
              <div className="banner-text">

                 <h3>Pizza Devlivery</h3>
                  <h1>MEASTRO PIZINNI</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quos sapiente incidunt perferendis magni voluptates praesentium, quod dignissimos!</p>
                  <div className="banner-btn">
                     <a href="" className="btn btn-smart">DELEVER NOW</a>
                  </div>
              </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Header
