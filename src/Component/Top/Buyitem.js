import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteItem } from '../../Action/Cart';
export default function Buyitem(props) {
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    const dispatch = useDispatch()
    const handleDeleteItem=()=>{
        dispatch(deleteItem(props.item.id))
    }
    return (
        <div className="buy-item">
            <div className="item-img">
                <img src={props.item.img} alt="" />
            </div>
            <div className="item-info">
                <h4 className="item-name">{props.item.ten}</h4>
                <p className="item-price">{props.quantity} x {changenumbertostring(props.item.giahientai)} ₫</p>

            </div>
            <div className="delete-item" onClick={handleDeleteItem}>
                <i className="far fa-times-circle"></i>
            </div>
        </div>
    )
}
