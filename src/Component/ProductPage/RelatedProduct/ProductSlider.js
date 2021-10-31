import React from 'react'
import ItemSlider from './ItemSlider/ItemSlider'
import Slider from "react-slick";
import './ItemSlider/itemslider.css'
import RightButton from '../../Button/RightButton';
import LeftButton from '../../Button/LeftButton';
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

export default function ProductSlider(props) {
    let item = props.data.watch.filter((item)=>{
        return(item.danhmuc===props.item.danhmuc&&item.id!==props.item.id)
    })
    return (
        <div className="slider-container">
            <Slider {...settings} className="row">
                {
                    item.map((item,index)=><ItemSlider key = {index} item = {item}/>)
                }
            </Slider>

        </div>
    )
}
