import React from 'react'
import './relatednews.css'
import New from './New'
import Slider from "react-slick";
import LeftButton from '../../Button/LeftButton';
import RightButton from '../../Button/RightButton';
export default function RelatedNews() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow:<RightButton/>,
        prevArrow:<LeftButton/>,
        responsive: [
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    return (
        <div className="related-news-section">
            <h2 className="list-item-tittle"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-offset="120"
            >Related News</h2>
            <div className="news-container">
                <div className="grid wide">
                    <Slider {...settings}className="row no-gutters container">
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                        <New/>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
