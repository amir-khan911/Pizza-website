import React from 'react'

const Manu = () => {
  return (
    <>
     <div className="manu" id='mymanu'>
     <div className="container">
           <div className="row">
              
              <div className="col-6">
                 <div className="about-img">
                    <img src="/img/pizza.jpg" alt="" />
                 </div>
              </div>
              <div className="col-6 p-25" >
              <h3>The pizza Menu</h3>
            <h1>CHICAGO <br /> THIN CRUST</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore aperiam aliquid soluta provident repudiandae omnis labore fugit rerum harum?</p>
            <div className="about-btn">
                <a className='btn btn-smart' href="">Vist MORE</a>
            </div>
              </div>
           </div>
        </div>
     </div>
    </>
  )
}

export default Manu
