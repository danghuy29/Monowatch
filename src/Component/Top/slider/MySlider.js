import React from 'react'
import Slider from "react-slick";
export default function MySlider() {
    var settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    };
    return (

        <div className="slider-section">
            <Slider {...settings} >
            <div className="img">
                <img src="./assets/picture/slide1.jpg" alt = ""></img>
            </div>
            <div className="img">
                <img src="./assets/picture/slide2.jpg" alt = ""></img>
            </div>
            <div className="img">
                <img src="./assets/picture/slide3.jpg" alt = ""></img>
            </div>
            </Slider>
        </div>
    )
}


