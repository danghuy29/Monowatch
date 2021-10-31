import React from 'react'
import { useState } from 'react'
export default function ModalFilter(props) {
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (
        <div className="modal-filter hidden-on-PC hidden-on-large-tablet" onClick={props.onClose}>
             <div className="modal-filter-close" onClick={props.onClose}>
                    <i className="fa fa-times" aria-hidden="true"></i>
            </div>
            <div className="modal-filter-content" onClick = {e=>e.stopPropagation()}>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Danh mục sản phẩm</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Đồng hồ nam</a></li>
                        <li className="list-item"><a href="/category">Đồng hồ nữ</a></li>
                        <li className="list-item"><a href="/category">Đồng hồ đôi</a></li>
                        <li className="list-item">
                            <div className="title">
                                <a href="/category">Phụ kiện</a>
                                <i className={"fa fa-chevron-down" + (showSubMenu ? " active" : "")} aria-hidden="true" onClick={() => setShowSubMenu(!showSubMenu)}></i>
                            </div>
                            {
                                showSubMenu && <ul className="sublist">
                                    <li className="sub-item"><a href="/category">Dây Da Hirsch</a></li>
                                    <li className="sub-item"><a href="/category">Dây Da ZRC</a></li>
                                    <li className="sub-item"><a href="/category">Hộp Đồng Hồ</a></li>
                                    <li className="sub-item"><a href="/category">Dịch Vụ In Logo Lên Đồng Hồ</a></li>
                                    <li className="sub-item"><a href="/category">Khắc Laser Lên Đồng Hồ</a></li>
                                </ul>
                            }
                        </li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Thương hiệu</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Candino</a></li>
                        <li className="list-item"><a href="/category">Casio</a></li>
                        <li className="list-item"><a href="/category">Citizen</a></li>
                        <li className="list-item"><a href="/category">Daniel Wellington (DW)</a></li>
                        <li className="list-item"><a href="/category">G-Shock & Baby-G</a></li>
                        <li className="list-item"><a href="/category">Ogival</a></li>
                        <li className="list-item"><a href="/category">Skagen</a></li>
                        <li className="list-item"><a href="/category">Tissot</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Chất liệu dây</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Dây Da</a></li>
                        <li className="list-item"><a href="/category">Dây Kim Loại</a></li>
                        <li className="list-item"><a href="/category">Dây Nhựa / Cao Su</a></li>
                        <li className="list-item"><a href="/category">Dây Titanium</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Chất liệu mặt kính</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Kính Cứng</a></li>
                        <li className="list-item"><a href="/category">Kính Nhựa</a></li>
                        <li className="list-item"><a href="/category">Kính Sapphire</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Bộ máy & năng lượng</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Cơ (Automatic)</a></li>
                        <li className="list-item"><a href="/category">Năng Lượng Ánh Sáng</a></li>
                        <li className="list-item"><a href="/category">Pin (Quartz)</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Màu mặt số</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Bạc</a></li>
                        <li className="list-item"><a href="/category">Đen</a></li>
                        <li className="list-item"><a href="/category">Trắng</a></li>
                        <li className="list-item"><a href="/category">Xanh</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Hình dạng mặt số</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Chữ Nhật </a></li>
                        <li className="list-item"><a href="/category">Đặc Biệt</a></li>
                        <li className="list-item"><a href="/category">Tròn</a></li>
                        <li className="list-item"><a href="/category">Vuông</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Kích thước mặt số</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">{'>'} 44 mm</a></li>
                        <li className="list-item"><a href="/category">{'<'} 29 mm</a></li>
                        <li className="list-item"><a href="/category">30 - 34 mm</a></li>
                        <li className="list-item"><a href="/category">35 - 39mm</a></li>
                    </ul>
                </div>
                <div className="danhmuc">
                    <h3 className="spacing-bottom">Mức chống nước</h3>
                    <ul className="list">
                        <li className="list-item"><a href="/category">Đi Mưa Nhỏ (3 ATM)</a></li>
                        <li className="list-item"><a href="/category">Lặn Biển (20 ATM)</a></li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
