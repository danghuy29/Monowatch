import React from 'react'
import Buyitem from './Buyitem'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function ModalShop(props) {
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    const buylist = useSelector(state => state.cart)
  
    if (!props.show) {
        return null
    }
    if (!buylist.item.length) {
        return (
            <div className="modal hidden-on-PC" onClick={() => props.onClose()}>
                <div className="modalShop-container" onClick={e => e.stopPropagation()}>
                    <div className="modalShop-header">
                        <h4>GIỎ HÀNG</h4>
                        <div className="dividedHeader">
                        </div>
                        <div className="modal-close" onClick={() => props.onClose()}>
                            <i className="fa fa-times close-btn" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="no-item-case">
                        <h4 className="no-item">Chưa có sản phẩm trong giỏ hàng</h4>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div className="modal hidden-on-PC" onClick={() => props.onClose()}>
            <div className="modalShop-container" onClick={e => e.stopPropagation()}>
                <div className="modalShop-header">
                    <h4>GIỎ HÀNG</h4>
                    <div className="dividedHeader">
                    </div>
                    <div className="modal-close" onClick={() => props.onClose()}>
                        <i className="fa fa-times close-btn" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="buy-list">
                    {
                         buylist.item.map((item,index)=>{
                            return  <Buyitem  key={index} item={item.item} quantity={item.quantity}/>
                         }
                        )
                    }           
                </div>
                {/* //end buy list  */}
                <div className="total-price">
                    <h1>Tổng cộng: {changenumbertostring(buylist.total)} ₫</h1>
                </div>
                <div className="buybtn-section">
                    <div className="buy-btn" ><Link to="/cart">XEM GIỎ HÀNG</Link></div>
                    <div className="buy-btn"><a href="/">THANH TOÁN</a></div>
                </div>

                {/* trường hợp  có hàng */}

            </div>
        </div>
    )
}
