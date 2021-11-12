import React, { useEffect,useState } from 'react'
import Slider from "react-slick";
import './sliderItem.css'
import LeftButton from '../../Button/LeftButton';
import RightButton from '../../Button/RightButton';
import axios from 'axios';
import Item from '../Item Component/Item';
export default function SliderItem() {
    const settings = {
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
    const [data,setData] = useState([])
    const url ='https://public-json-server.herokuapp.com/watch?danhmuc=Đồng hồ đôi'
    useEffect(() => {
        async function callAPi(){
            try{
                   const response = await axios.get(url)
                   setData(response.data)
            }catch(error){
                console.log(error);
            }
        }
        callAPi()
    }, [])
    return (
        <div className="slider-item-section">
            <h2 className="list-item-tittle"
                data-aos="fade-up"
                data-aos-duration="1200" 
                data-aos-offset="120" 
            >ĐỒNG HỒ ĐÔI</h2>
            <div className="slidercontainer">
                <div className="grid wide list-item-wrapper">  
                          <Slider {...settings} className="row">
                                {data.map((item,key)=><Item key = {key} item={item}/>)}
                          </Slider>
                       
                </div>
            </div>
        </div>
    )
}

