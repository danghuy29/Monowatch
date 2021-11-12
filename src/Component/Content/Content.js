import React from 'react'
import './content.css'
import ListItem from './ListItem';
import 'aos/dist/aos.css'
import RelatedNews from './Related News/RelatedNews';
import SliderItem from './Slider Item/SliderItem';
export default function Content() {
    return (
        <div id="content">
            <ListItem danhmuc="ĐỒNG HỒ NAM" />
            <div className="banner1">
                <div className="grid wide">
                    <div className="banner1-container ">
                        <div className="bn-content" 
                            data-aos="fade-left"
                            data-aos-duration="1400"
                            data-aos-offset="120">
                            <div className="bn-content-icon">
                                <i className="fa fa-truck" aria-hidden="true"></i>
                            </div>
                            <div className="bn-content-text">
                                <div>
                                    <h3>Miễn Phí Giao Hàng</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>

                        <div className="bn-content"
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            data-aos-offset="120">
                            <div className="bn-content-icon">
                                <i className="fas fa-gift    "></i>
                            </div>
                            <div className="bn-content-text">
                                <div>
                                    <h3>Quà Tặng Đặc Biệt</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>

                        <div className="bn-content"
                            data-aos="fade-left"
                            data-aos-duration="1600"
                            data-aos-offset="120">
                            <div className="bn-content-icon">
                               <i className="fas fa-piggy-bank"></i>
                            </div>
                            <div className="bn-content-text">
                                <div>
                                    <h3>Tiết Kiệm Khi Mua Ở Mona</h3>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur</p>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
            <ListItem danhmuc="ĐỒNG HỒ NỮ" />
            <div className="banner2">
                <div className="banner-container"
                    data-aos="fade-right"
                    data-aos-duration="1400"
                    data-aos-offset="120"
                >
                    <div className="banner-img-section left">
                    </div>
                    <div className="banner-text-section">
                        <strong>
                            Romance
                            <br />
                            in the air
                        </strong>

                        <h4>
                            WEAR YOUR STYLE
                            <br />
                            WITH VERVE & ATTITUDE
                        </h4>
                        <a href="/" className="detail-btn">DETAIL</a>

                    </div>
                </div>

                <div className="banner-container"
                    data-aos="fade-right"
                    data-aos-duration="1400"
                    data-aos-offset="120"
                >
                    <div className="banner-img-section right">
                    </div>
                    <div className="banner-text-section">
                        <strong>
                            Analog &
                            <br />
                            Digital
                        </strong>

                        <h4>
                            SWATCH WATCHES
                            <br />
                            LATEST FASHION STATEMENT
                        </h4>
                        <a href="/" className="detail-btn">DETAIL</a>
                    </div>
                </div>
            </div>
           <SliderItem/>
            <RelatedNews />
        </div>
    )
}
