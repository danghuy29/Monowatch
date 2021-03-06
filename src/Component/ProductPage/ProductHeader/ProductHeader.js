import React from 'react'
import Cart from '../../Top/Cart'
import Navbarmobile from '../../Top/Navbarmobile'
import "./productheader.css"
import { useState, useEffect, useCallback } from 'react'
import { Link,NavLink } from 'react-router-dom'
import Search from '../../Search/Search'
export default function ProductHeader() {
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
            <div className="grid wide">
                <div className="container">
                    <Navbarmobile />
                    <Link to='/home' className="logo-section">
                        <img src="../assets/picture/logo-mona-watches-white.png" alt="" />
                    </Link>

                    <div className="navbar-section  hidden-on-mobile-tablet hidden-on-large-tablet">
                        <ul className="nav-list">
                            <li className="nav-item separate"><NavLink to='/home'>GIỚI THIỆU</NavLink></li>
                            <li className="nav-item separate"><NavLink to='/category/Đồng hồ nam'>ĐỒNG HỒ NAM</NavLink></li>
                            <li className="nav-item separate"><NavLink to='/category/Đồng hồ nữ'>ĐỒNG HỒ NỮ</NavLink></li>
                            <li className="nav-item separate"><NavLink to='/category/Đồng hồ đôi'>ĐỒNG HỒ ĐÔI</NavLink></li>
                            <li className="nav-item separate"><NavLink to='/category/Phụ kiện'>PHỤ KIỆN</NavLink>
                                <ul className="subnav-list">
                                    <li className="subnav-item"><NavLink to='/category/Phụ kiện'>Dây Da Hirsch</NavLink></li>
                                    <li className="subnav-item"><NavLink to='/category/Phụ kiện'>Dây Da ZRC</NavLink></li>
                                    <li className="subnav-item"><NavLink to='/category/Phụ kiện'>Hộp Đồng Hồ</NavLink></li>
                                    <li className="subnav-item"><NavLink to='/category/Phụ kiện'>Dịch Vụ In Logo Lên Đồng Hồ</NavLink></li>
                                    <li className="subnav-item"><NavLink to='/category/Phụ kiện'>Khắc Laser Lên Đồng Hồ</NavLink></li>
                                </ul>
                            </li>
                            <li className="nav-item separate"><NavLink to='/home'>TIN TỨC</NavLink></li>
                            <li className="nav-item"><NavLink to='/home'>LIÊN HỆ</NavLink></li>
                        </ul>
                    </div>
                    {/* Navbar end */}

                    <div className="customer-section">
                        <Search/>
                        <div className="login-section hidden-on-mobile-tablet hidden-on-large-tablet customer-section-item"><i className="fa fa-user separate" aria-hidden="true" /></div>
                        <Cart />
                    </div>
                    {/* custormer end */}
                </div>
            </div>
        </div>
    )
}


