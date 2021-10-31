import React from 'react'

export default function LeftSection() {
    return (
        <div className="left-section">
            <table className="table">
                <thead>
                    <tr>
                            <th className="product-info" colSpan="3">Sản phẩm</th>
                            <th className="product-price hidden-on-mobile">Giá</th>
                            <th className="product-quantity">Số lượng</th>
                            <th className="total-price hidden-on-mobile">Tổng cộng</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="delete-product">
                                <i className="far fa-times-circle"></i>
                        </td>
                        <td  className="imgBx">
                             <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-ogival-og385-032lw-t-nu-pin-day-inox-600x600.jpg" alt="" />
                        </td>
                        <td className="product-name">
                            <a href="/">ĐỒNG HỒ OGIVAL OG385-032LW-T NỮ PIN DÂY INOX</a>
                            <div className="price-on-mobile hidden">
                                1 x <span>99,737,000 ₫</span>
                            </div>
                        </td>
                        <td className="product-price hidden-on-mobile">
                            99,737,000 ₫
                        </td>
                        <td className="product-quantity">
                            <button className="decrease">-</button>
                            <input type="number" defaultValue="1" />
                            <button className="increase">+</button>
                        </td>
                        <td className="total-price hidden-on-mobile">
                            991,737,000 ₫
                        </td>
                    </tr>
                   
                    <tr>
                        <td className="delete-product">
                                <i className="far fa-times-circle"></i>
                        </td>
                        <td  className="imgBx">
                             <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-ogival-og385-032lw-t-nu-pin-day-inox-600x600.jpg" alt="" />
                        </td>
                        <td className="product-name">
                            <a href="/">ĐỒNG HỒ OGIVAL OG385-032LW-T NỮ PIN DÂY INOX</a>
                            <div className="price-on-mobile hidden">
                                1 x <span>99,737,000 ₫</span>
                            </div>
                        </td>
                        <td className="product-price hidden-on-mobile">
                            99,737,000 ₫
                        </td>
                        <td className="product-quantity">
                            <button className="decrease">-</button>
                            <input type="number" defaultValue="1" />
                            <button className="increase">+</button>
                        </td>
                        <td className="total-price hidden-on-mobile">
                            991,737,000 ₫
                        </td>
                    </tr>
                   
                    <tr>
                        <td className="delete-product">
                                <i className="far fa-times-circle"></i>
                        </td>
                        <td  className="imgBx">
                             <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-ogival-og385-032lw-t-nu-pin-day-inox-600x600.jpg" alt="" />
                        </td>
                        <td className="product-name">
                            <a href="/">ĐỒNG HỒ OGIVAL OG385-032LW-T NỮ PIN DÂY INOX</a>
                            <div className="price-on-mobile hidden">
                                1 x <span>99,737,000 ₫</span>
                            </div>
                        </td>
                        <td className="product-price hidden-on-mobile">
                            99,737,000 ₫
                        </td>
                        <td className="product-quantity">
                            <button className="decrease">-</button>
                            <input type="number" defaultValue="1" />
                            <button className="increase">+</button>
                        </td>
                        <td className="total-price hidden-on-mobile">
                            991,737,000 ₫
                        </td>
                    </tr>

                    <tr>
                        <td className="delete-product">
                                <i className="far fa-times-circle"></i>
                        </td>
                        <td  className="imgBx">
                             <img src="http://mauweb.monamedia.net/dongho/wp-content/uploads/2018/03/dong-ho-ogival-og385-032lw-t-nu-pin-day-inox-600x600.jpg" alt="" />
                        </td>
                        <td className="product-name">
                            <a href="/">ĐỒNG HỒ OGIVAL OG385-032LW-T NỮ PIN DÂY INOX</a>
                            <div className="price-on-mobile hidden">
                                1 x <span>99,737,000 ₫</span>
                            </div>
                        </td>
                        <td className="product-price hidden-on-mobile">
                            99,737,000 ₫
                        </td>
                        <td className="product-quantity">
                            <button className="decrease">-</button>
                            <input type="number" defaultValue="1" />
                            <button className="increase">+</button>
                        </td>
                        <td className="total-price hidden-on-mobile">
                            991,737,000 ₫
                        </td>
                    </tr>
                  
                </tbody>
            </table>
            <div className="btn-section">
               <a href="/">
                <i className="fas fa-long-arrow-alt-left"></i>

                   Tiếp tục xem sản phẩm
               </a>
               <div className="updatecart-btn">
                   cập nhật giỏ hàng
               </div>
            </div>
        </div>
    )
}
