import React from 'react'

const Navbar = () => {
  return (
    <>
     <div className="navbar">
        <div className="navbar-text">
            <div className="logo"><img src="/img/logo.png" alt="" /></div>
           <ul>
            <li><a className='f-btn' href='#myhome'>Home</a></li>
            <li><a className='f-btn' href='#myabout' >About
    
              </a></li>
            <li><a className='f-btn'href='#myshop' >Shop</a></li>
            <li><a className='f-btn'href='#mymanu' >Manu</a></li>
            <li><a className='f-btn' href='#myprice'>Prices</a></li>
           </ul>
        </div>
     </div>
    </>
  )
}

export default Navbar
