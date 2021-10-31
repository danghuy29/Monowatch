import React from 'react'
import { useState } from 'react';
const changenumbertostring=(x)=> {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

export default function CartItem(props) {
    const [quantity,setQuantity] = useState(props.item.quantity)
    function handleDecrease(){
       if(quantity>1){
           let temp = quantity-1
           setQuantity(temp)
           props.handleChangeQuantity({
               id:props.item.item.id,
               quantity:temp
           })
       }
    }
    function handleIncrease(){
       if(quantity<1000)
       {
           let temp =quantity+1
            setQuantity(temp)
            props.handleChangeQuantity({
                id:props.item.item.id,
                quantity:temp
            })
       } 
     }
    function handleChange(e){
        let temp = Number(e.target.value)
        setQuantity(temp)
        
        props.handleChangeQuantity({
            id:props.item.item.id,
            quantity:temp
        })
    }
    return (
        <tr>
            <td className="delete-product" onClick={()=>props.deleteItem(props.item)}>
                <i className="far fa-times-circle"></i>
            </td>
            <td className="imgBx">
                <img src={props.item.item.img} alt="" />
            </td>
            <td className="product-name">
                <a href="/">{props.item.item.ten}</a>
                <div className="price-on-mobile hidden">
                   {quantity} x <span>{changenumbertostring(props.item.item.giahientai)}</span>
                </div>
            </td>
            <td className="product-price hidden-on-mobile">
                {changenumbertostring(props.item.item.giahientai)} ₫
            </td>
            <td className="product-quantity">
                <button className="decrease" onClick = {handleDecrease}>-</button>
                <input type="number" value={quantity} onChange={(e)=>handleChange(e)}/>
                <button className="increase" onClick = {handleIncrease}>+</button>
            </td>
            <td className="total-price hidden-on-mobile">
                {changenumbertostring(props.item.quantity*props.item.item.giahientai)} ₫
            </td>
        </tr>
    )
}
