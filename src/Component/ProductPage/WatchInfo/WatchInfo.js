import React from 'react'
import { Link } from 'react-router-dom';
import './watchinfo.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../../../Action/Cart';
export default function WatchInfo(props) {
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    const [itemQuantity,setItemQuantity]=useState(1)
    const onChangeInput= (e)=>{
       if(e.target.valueAsNumber>=1){
        setItemQuantity(e.target.valueAsNumber)
       }
    }
   const increaseQuantity = ()=>{
       setItemQuantity(prev=>prev+1)
   }
   const decreaseQuantity = ()=>{
       if(itemQuantity>1){
        setItemQuantity(prev=>prev-1)
       }
    }
    const dispatch = useDispatch()
    const handleAddToCart = ()=>{
        let addItem = {
            item:props.item,
            quantity:itemQuantity
        }
        dispatch(addNewItem(addItem))
    }
    return (
       
            <div className="main-info">
                <div className="row">
                    <div className="col l-6 imgBx">
                        <img src={props.item.img} alt="" />
                    </div>
                    <div className="col l-6 infoBx">
                        <div className="router">
                            <Link to = "/home">Trang chủ</Link>
                            <span>/</span>
                            <a href="/">{props.item.danhmuc}</a>
                        </div>
                        <div className="watch-name spacing-bottom">
                            <h2>{props.item.ten}</h2>
                        </div>
                        <div className="watch-price">
                            <h3><span>{changenumbertostring(props.item.giagoc)} ₫</span>  {changenumbertostring(props.item.giahientai)} ₫</h3>
                        </div>
                        <div className="watch-des">
                            <p>{props.item.mota}</p>
                        </div>
                        <div className="watch-btn">
                            <div className="watch-quantity">
                                <button className="decrease" onClick={decreaseQuantity}>-</button>
                                <input type="number" className="quantity-value" name="watchQuantity" value= {itemQuantity} onChange={(e)=>onChangeInput(e)}/>
                                <button className="increase" onClick={increaseQuantity}>+</button>
                            </div>
                            <div className="add-to-cart-btn" onClick={handleAddToCart}>
                                <button>thêm vào giỏ</button>
                            </div>
                        </div>
                        <div className="watch-id">
                            <p>{props.item.ma}</p>
                        </div>
                        <div className="watch-type">
                            <p>Danh mục: <a href="/">{props.item.danhmuc}</a></p>
                        </div>
                    </div>
                </div>
            </div>
      
    )
}
