import React from 'react'

const About = () => {
  return (
   <>
    <div className="about" id='myabout'>
        <div className="container">
           <div className="row">
              <div className="col-6 p-25" >
              <h3>About Us</h3>
            <h1>WELLCOME TO MAESTRO PIZZINI</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolore aperiam aliquid soluta provident repudiandae omnis labore fugit rerum harum?</p>
            <div className="about-btn">
                <a className='btn btn-smart' href="">READ MORE</a>
            </div>
              </div>
              <div className="col-6">
                 <div className="about-img">
                    <img src="/img/pizza.jpg" alt="" />
                 </div>
              </div>
           </div>
        </div>
    </div>
   </>
  )
}

export default About
