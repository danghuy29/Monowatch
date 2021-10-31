import React from 'react'
import './footer.css'
export default function Footer() {
    return (
        <div id="footer">
            <div className="footer-content">
                <div className="row">
                    <div className="link-to col l-3 m-3 c-12">
                        <h3>ĐIỀU HƯỚNG</h3>
                    </div>
                    <div className="main-content col l-6 m-6 c-12">
                        <div className="logo-section">
                            <img src="./assets/picture/logo-mona-watches-white.png" alt="" />
                        </div>
                        <p className="content-text ">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet ....
                        </p>
                        <div className="email-section">
                            <input type="email" placeholder="Email.." />
                            <div className="submit-btn">
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="shop-info col l-3 m-3 c-12">
                        <h3>THÔNG TIN LIÊN HỆ</h3>
                        <div className="info-container">
                            <p>386/22/3 Quang Trung phường 10, Quận Gò Vấp, Tp.HCM</p>
                        </div>
                        <p>079 352 0985</p>
                        <a href="https://www.google.com.vn/">nhathuy500851@gmail.com</a>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <p>© All rights reserved.
                    Thiết kế website </p>
                <span>
                    <img src="https://mona.solutions/logo.png" alt="" />
                </span>
                <a href="/home">Mona Media</a>
            </div>
        </div>
    )
}
