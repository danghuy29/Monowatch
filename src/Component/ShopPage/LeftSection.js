import React from 'react'
import CartItem from './CartItem'
import { useState} from 'react'
import { useDispatch } from 'react-redux'
import { upgradeItem } from '../../Action/Cart'
export default function LeftSection(props) {
    const [data, setData] = useState(props.cart.item)
    const ditpatch = useDispatch()
    const deleteItem = (e) => {
        let tempData = data.filter((item) => item.item.id !== e.item.id)
        setData(tempData)
    }
    const handleChangeQuantity = (e) => {
    
       let tempData = data.map((item)=>{
            if(item.item.id===e.id){
               return({
                   item:item.item,
                   quantity:e.quantity
               })
            }
            return item 
       })
       setData(tempData);
    }
    const upgrade = ()=>{
        ditpatch(upgradeItem(data))
    }
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
                    {
                        data.map((item, index) =>
                            <CartItem
                                key={index}
                                item={item}
                                deleteItem={(e) => deleteItem(e)}
                                handleChangeQuantity={(e)=>handleChangeQuantity(e)}
                            />)
                    }
                </tbody>
            </table>
            <div className="btn-section">
                <a href="/">
                    <i className="fas fa-long-arrow-alt-left"></i>

                    Tiếp tục xem sản phẩm
                </a>
                <div className="updatecart-btn" onClick = {upgrade}>
                    cập nhật giỏ hàng
                </div>
            </div>
        </div>
    )
}
