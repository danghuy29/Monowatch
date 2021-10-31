import React from 'react'
import Item from '../Item Component/Item'
import Slider from "react-slick";
import './sliderItem.css'
import LeftButton from '../../Button/LeftButton';
import RightButton from '../../Button/RightButton';
export default function SliderItem() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow:<RightButton/>,
        prevArrow:<LeftButton/>,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
        ]
    };
    return (
        <div className="slider-item-section">
            <h2 className="list-item-tittle"
                data-aos="fade-up"
                data-aos-duration="1200" 
                data-aos-offset="120" 
            >SLIDER ITEM</h2>
            <div className="slider-container">
                <div className="grid wide list-item-wrapper">
                    <Slider {...settings} className="row">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </Slider>
                </div>
            </div>
        </div>
    )
}

