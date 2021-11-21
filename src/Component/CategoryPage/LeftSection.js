import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function LeftSection(props) {
    const [showSubMenu, setShowSubMenu] = useState(false)
    function convert(str) {
        str = str.replace( "&amp;", /&/);
        str = str.replace( "&gt;", ">");
        str = str.replace("&lt;", "<");
        return str;
    }
    const handleClick = (e) => {
        let danhmuc = e.target.type
        let giatri = e.target.innerHTML
        giatri= convert(giatri)
        console.log(giatri);

        const value = {
            danhmuc,
            giatri
        }

        props.filterHandle(value)
    }
    return (

        <div className='filter-product'>
            <div className="danhmuc">
                <h3 className="spacing-bottom">Danh mục sản phẩm</h3>
                <ul className="list">
                    <li className="list-item"><NavLink to="/category/Đồng hồ nam">Đồng hồ nam</NavLink ></li>
                    <li className="list-item"><NavLink to="/category/Đồng hồ nữ">Đồng hồ nữ</NavLink ></li>
                    <li className="list-item"><NavLink to="/category/Đồng hồ đôi">Đồng hồ đôi</NavLink></li>
                    <li className="list-item">
                        <div className="title">
                            Phụ kiện
                            <i className={"fa fa-chevron-down" + (showSubMenu ? " active" : "")} aria-hidden="true" onClick={() => setShowSubMenu(!showSubMenu)}></i>
                        </div>
                        {
                            showSubMenu && <ul className="sublist">
                                <li className="sub-item">Dây Da Hirsch</li>
                                <li className="sub-item">Dây Da ZRC</li>
                                <li className="sub-item">Hộp Đồng Hồ</li>
                                <li className="sub-item">Dịch Vụ In Logo Lên Đồng Hồ</li>
                                <li className="sub-item">Khắc Laser Lên Đồng Hồ</li>
                            </ul>
                        }
                    </li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Thương hiệu</h3>
                <ul className="list">
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>Candino</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>CASIO</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>Citizen</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>Daniel Wellington (DW)</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick} >G-Shock và Baby-G</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>Ogival</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>Skagen</li>
                    <li className="list-item" type="thuonghieu" onClick={handleClick}>Tissot</li>
                </ul>
            </div>


            <div className="danhmuc">
                <h3 className="spacing-bottom">Chất liệu dây</h3>
                <ul className="list">
                    <li className="list-item" type="chatlieuday" onClick={handleClick}>Dây Da</li>
                    <li className="list-item" type="chatlieuday" onClick={handleClick}>Dây Kim Loại</li>
                    <li className="list-item" type="chatlieuday" onClick={handleClick}>Dây Nhựa / Cao Su</li>
                    <li className="list-item" type="chatlieuday" onClick={handleClick}>Dây Titanium</li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Chất liệu mặt kính</h3>
                <ul className="list">
                    <li className="list-item" type="chatlieumatkinh" onClick={handleClick}>Kính Cứng</li>
                    <li className="list-item" type="chatlieumatkinh" onClick={handleClick}>Kính Nhựa</li>
                    <li className="list-item" type="chatlieumatkinh" onClick={handleClick}>Kính Sapphire</li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Bộ máy & năng lượng</h3>
                <ul className="list">
                    <li className="list-item" type="bomay" onClick={handleClick}>Cơ (Automatic)</li>
                    <li className="list-item" type="bomay" onClick={handleClick}>Năng Lượng Ánh Sáng</li>
                    <li className="list-item" type="bomay" onClick={handleClick}>Pin (Quartz)</li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Màu mặt số</h3>
                <ul className="list">
                    <li className="list-item" type="maumatso" onClick={handleClick}>Bạc</li>
                    <li className="list-item" type="maumatso" onClick={handleClick}>Đen</li>
                    <li className="list-item" type="maumatso" onClick={handleClick}>Trắng</li>
                    <li className="list-item" type="maumatso" onClick={handleClick}>Xanh</li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Hình dạng mặt số</h3>
                <ul className="list">
                    <li className="list-item" type="hinhdangmatso" onClick={handleClick}>Chữ Nhật </li>
                    <li className="list-item" type="hinhdangmatso" onClick={handleClick}>Đặc Biệt</li>
                    <li className="list-item" type="hinhdangmatso" onClick={handleClick}>Tròn</li>
                    <li className="list-item" type="hinhdangmatso" onClick={handleClick}>Vuông</li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Kích thước mặt số</h3>
                <ul className="list">
                    <li className="list-item" type="kichthuocmatso" onClick={handleClick}>{'>'} 44 mm</li>
                    <li className="list-item" type="kichthuocmatso" onClick={handleClick}>{'<'} 29 mm</li>
                    <li className="list-item" type="kichthuocmatso" onClick={handleClick}>30 - 34 mm</li>
                    <li className="list-item" type="kichthuocmatso" onClick={handleClick}>35 - 39 mm</li>
                    <li className="list-item" type="kichthuocmatso" onClick={handleClick}>40 – 43 mm    </li>
                </ul>
            </div>

            <div className="danhmuc">
                <h3 className="spacing-bottom">Mức chống nước</h3>
                <ul className="list">
                    <li className="list-item" type="muchongnuoc" onClick={handleClick}>Đi Mưa Nhỏ (3 ATM)</li>
                    <li className="list-item" type="muchongnuoc" onClick={handleClick}>Lặn Biển (20 ATM)</li>

                </ul>
            </div>
        </div>

    )
}
