import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import logo1 from "./Logo (1).png";
import logo2 from "./Logo (2).png";
import logo3 from "./Logo (3).png";
import logo4 from "./Logo (4).png";
import logo5 from "./Logo (5).png";
import logo6 from "./Logo (6).png";
import "./Slider1.css";

const Slider1 = () => {
    var settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        autoplay:true,
        autoplaySpeed: 2000,
        slidesToScroll: 1,
        arrows: false,
        className: "myCustomCarousel"}
  return (
    <div className="App " style={{ background: "" }}>
      <Slider {...settings}>
        
        <div>
          <img src={logo1} alt="logo1"/>
        </div>
        <div>
          <img src={logo2} alt="logo2"/>
        </div>
        <div>
          <img src={logo3} alt="logo3"/>
        </div>
        <div>
          <img src={logo4} alt="logo4"/>
        </div>
        <div>
          <img src={logo5} alt="logo5"/>
        </div>
        <div>
          <img src={logo6} alt="logo6"/>
        </div>
        
        
      </Slider>
    </div>
  )
}

export default Slider1
