import React from 'react'
import Cart from './Cart'
import Navbarmobile from './Navbarmobile'
import { useState, useEffect, useCallback} from 'react'
import { NavLink} from 'react-router-dom'

export default function Header() {
    const [showHeader, setShowHeader] = useState(false)
    const handleScroll=useCallback(()=>{
        var position = window.pageYOffset;
        let headerScrollY = 150;
        if (position >= headerScrollY) {
            setShowHeader(true)
        }
        else {
            setShowHeader(false)
        }
},[])
    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    }, [handleScroll])


    return (
        <div className={"header" + (showHeader ? " stuck" : "")}>
            {/* thêm class stuck để header nhỏ lại */}
            <div className="grid wide">
                <div className="container">
                    <Navbarmobile />
                    <a href="/" className="logo-section">
                        <img src="./assets/picture/logo-mona-watches-white.png" alt="" />
                    </a>

                    <div className="navbar-section  hidden-on-mobile-tablet hidden-on-large-tablet">
                        <ul className="nav-list">
                            <li className="nav-item separate"><a href="/">GIỚI THIỆU</a></li>
                            <li className="nav-item separate"><NavLink to = "/category/Đồng hồ nam">ĐỒNG HỒ NAM</NavLink></li>
                            <li className="nav-item separate"><NavLink to = "/category/Đồng hồ nữ">ĐỒNG HỒ NỮ</NavLink></li>
                            <li className="nav-item separate"><NavLink to = "/category/Đồng hồ đôi">ĐỒNG HỒ ĐÔI</NavLink></li>
                            <li className="nav-item separate"><NavLink to = "/category/Phụ kiện">PHỤ KIỆN</NavLink>
                                <ul className="subnav-list">
                                    <li className="subnav-item"><NavLink to = "/category/Phụ kiện.Dây Da Hirsch">Dây Da Hirsch</NavLink></li>
                                    <li className="subnav-item"><NavLink to = "/category/Phụ kiện.Dây Da ZRC">Dây Da ZRC</NavLink></li>
                                    <li className="subnav-item"><NavLink to = "/category/Phụ kiện.Hộp Đồng Hồ">Hộp Đồng Hồ</NavLink></li>
                                    <li className="subnav-item"><NavLink to = "/category/Phụ kiện.Dịch Vụ In Logo Lên Đồng Hồ">Dịch Vụ In Logo Lên Đồng Hồ</NavLink></li>
                                    <li className="subnav-item"><NavLink to = "/category/Phụ kiện.Khắc Laser Lên Đồng Hồ">Khắc Laser Lên Đồng Hồ</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item separate"><a href="/">TIN TỨC</a></li>
                            <li className="nav-item"><a href="/">LIÊN HỆ</a></li>
                        </ul>
                    </div>
                    {/* Navbar end */}

                    <div className="customer-section">
                        <div className="search-section hidden-on-mobile-tablet hidden-on-large-tablet customer-section-item">
                            <i className="fa fa-search separate" aria-hidden="true" />
                            <div className="searchBx">
                                <div className="input-section ">
                                    <input type="text" placeholder="Nhập sản phẩm bạn cần tìm..." />
                                    <i className="fa fa-search" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                        <div className="login-section hidden-on-mobile-tablet hidden-on-large-tablet customer-section-item"><i className="fa fa-user separate" aria-hidden="true" /></div>
                        <Cart />
                    </div>
                    {/* custormer end */}
                </div>
            </div>
        </div>
    )
}
