import React from 'react'
import Banner from './Banner'
function Carousel() {
    return (
        <div>
        <div
        className="carousel slide carousel-fade"
        data-ride="carousel"
        id="slides"
      >
        <ul className="carousel-indicators">
          <li data-target="#slides" data-slide-to="0" className="active"></li>
          <li data-target="#slides" data-slide-to="1"></li>
          <li data-target="#slides" data-slide-to="2"></li>
          
         
        </ul>
    
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="70">
            <Banner />
          </div>
    
          <div className="carousel-item" data-interval="70">
            <Banner />
          </div>
    
          
        </div>
      </div>
        </div>
    )
}

export default Carousel
