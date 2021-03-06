import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function ModalMenu(props) {
    const [showSubMenu, setShowSubMenu] = useState(false) 

      if (!props.show) {
        return null
    }
    const handleClickNav=()=>{
        document.body.style.overflow = 'unset';
    }
    return (
        <div>
            <div className="modal hidden-on-PC" onClick={() => props.onClose()}>
                <div className="modal-menu-close" onClick={() => props.onClose()}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <div className="modal-menu-container" onClick={e => e.stopPropagation()}>
                    <div className="modal-menu-header">
                        <div className="input-section">
                            <input type="text" placeholder="Tìm kiếm ở đây" />
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="modal-menu-content">
                        <ul className="mobile-navbar-list">
                            <li className="mobile-navbar-item" onClick={handleClickNav}><NavLink to="/home">GIỚI THIỆU</NavLink></li>
                            <li className="mobile-navbar-item" onClick={handleClickNav}><a href="/category/Đồng hồ nam">ĐỒNG HỒ NAM</a></li>
                            <li className="mobile-navbar-item" onClick={handleClickNav}><a href="/category/Đồng hồ nữ">ĐỒNG HỒ NỮ</a></li>
                            <li className="mobile-navbar-item" onClick={handleClickNav}><a href="/category/Đồng hồ đôi">ĐỒNG HỒ ĐÔI</a></li>
                            <li className="mobile-navbar-item" onClick={()=>setShowSubMenu(!showSubMenu)}>
                                <div>PHỤ KIỆN</div>
                                <i className={"fa fa-chevron-down"+(showSubMenu?" active":"")} aria-hidden="true"></i>
                                {
                                    showSubMenu && <ul className="mobile-subnav-list">                                     
                                            <li className="mobile-subnav-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">Dây Da Hirsch</NavLink></li>
                                            <li className="mobile-subnav-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">Dây Da ZRC </NavLink></li>
                                            <li className="mobile-subnav-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">Hộp Đồng Hồ</NavLink></li>
                                            <li className="mobile-subnav-item" onClick={handleClickNav}><NavLink to="">Dịch Vụ In Logo Lên Đồng Hồ</NavLink></li>
                                            <li className="mobile-subnav-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">Khắc Laser Lên Đồng Hồ</NavLink></li>      
                                    </ul>
                                } 
                            </li>
                            <li className="mobile-navbar-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">TIN TỨC</NavLink></li>
                            <li className="mobile-navbar-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">LIÊN HỆ</NavLink></li>
                            <li className="mobile-navbar-item" onClick={handleClickNav}><NavLink to="/category/Phụ kiện">ĐĂNG NHẬP</NavLink></li>
                            <li className="mobile-navbar-item">
                                <Link to="/category" onClick={handleClickNav}><i className="fab fa-facebook" aria-hidden="true"></i></Link>
                                <Link to="/category" onClick={handleClickNav}><i className="fab fa-instagram" aria-hidden="true"></i></Link>
                                <Link to="/category" onClick={handleClickNav}><i className="fab fa-twitter" aria-hidden="true"></i></Link>
                                <Link to="/category" onClick={handleClickNav}><i className="fa fa-envelope" aria-hidden="true"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
