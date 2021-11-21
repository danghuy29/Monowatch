import React from 'react'
import {useDispatch} from 'react-redux'
import { deleteItem } from '../../Action/Cart';
import { Link } from 'react-router-dom';
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
    const suatieude = (str) => {
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();

        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');

        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');

        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');

        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');

        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');

        // return
        return str;
    }
    return (
        <div   className="buy-item">
            <a href={"/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"} className="item-img">
                <img src={props.item.img} alt="" />
            </a>
            <div className="item-info">
                <a href={"/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"}  className="item-name">{props.item.ten}</a>
                <p className="item-price">{props.quantity} x {changenumbertostring(props.item.giahientai)} ₫</p>
            </div>

            <div className="delete-item" onClick={handleDeleteItem}>
                <i className="far fa-times-circle"></i>
            </div>
        </div>
    )
}
