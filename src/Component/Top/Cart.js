import React from 'react'
import ModalShop from './ModalShop'
import { useState } from 'react'
import Buyitem from './Buyitem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Cart() {
    const [show, setShow] = useState(false)
    var buylist = useSelector(state => state.cart)
    const openCartModal = () => {
        setShow(!show);
        document.body.style.overflow = 'hidden';
    }
    const closeCartModal = () => {
        setShow(!show);
        document.body.style.overflow = 'unset';
    }
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    if (!buylist.item.length) {
        return (
            <>
            <div className="cart-section  customer-section-item hidden-on-large-tablet hidden-on-mobile-tablet" onClick={() => setShow(!show)}>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
                <div className="buy-section hidden-on-mobile-tablet hidden-on-large-tablet">
                    <div className="no-item-case">
                        <h4 className="no-item">Chưa có sản phẩm trong giỏ hàng</h4>
                    </div>
                </div>
            </div>
            <div className="cart-section customer-section-item hidden-on-PC" onClick={() => openCartModal()}>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
            </div> 
            
            <ModalShop onClose={() => closeCartModal()} show={show} />
            </>
        )
    }
    return (
        <>
            <div className="cart-section  customer-section-item hidden-on-large-tablet hidden-on-mobile-tablet" >
                <i className="fa fa-shopping-cart" aria-hidden="true" />
                <span>{buylist.item.length}</span>
                <div className="buy-section hidden-on-mobile-tablet hidden-on-large-tablet">
                    <div className="buy-list">
                     {
                         buylist.item.map((item,index)=>{
                            return  <Buyitem  key={index} item={item.item} quantity={item.quantity}/>
                         }
                        )
                    }             
                    </div>
                    <div className="total-price">
                        <h1>Tổng cộng: { changenumbertostring(buylist.total)} ₫</h1>
                    </div>
                    <div className="buybtn-section">
                        <div className="buy-btn"><Link to="/cart">XEM GIỎ HÀNG</Link></div>
                        <div className="buy-btn"><a href="/">THANH TOÁN</a></div>
                    </div>
                </div>
            </div> 

            <div className="cart-section customer-section-item hidden-on-PC" onClick={() => openCartModal()}>
                <i className="fa fa-shopping-cart" aria-hidden="true" />
                <span>{buylist.item.length}</span>
            </div> 
            
            <ModalShop onClose={() => closeCartModal()} show={show} />
        </>
    )
}
