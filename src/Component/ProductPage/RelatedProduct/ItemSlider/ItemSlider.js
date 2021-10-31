import React from 'react'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../../../../Action/Cart';
export default function ItemSlider(props) { 
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
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
    const dispatch = useDispatch()
    const handleAddToCart=()=>{
        let addItem = {
            item:props.item,
            quantity:1
        }
        dispatch(addNewItem(addItem))
    }
    if(props.item.giagoc===props.item.giahientai){
        return(
            <div className="col l-3 m-4 c-6 watch" 
            data-aos="fade-left"
            data-aos-duration="500"
            >
                <div className="watch-img">
                    <Link to={
                            "/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"
                        }><img src={props.item.img} alt="" /></Link>
                </div>
                <div className="watch-info">
                    <div className="watch-type">{props.item.danhmuc}</div>
                    <div className="watch-name"><Link to={
                            "/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"
                        }>{props.item.ten}</Link></div>
                    <div className="watch-price">{changenumbertostring(props.item.giahientai)}  ₫</div>
                </div>
                <button className="watch-add-to-cart" onClick={handleAddToCart}>
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
    return (
        <div className="col l-3 m-4 c-6 watch" 
        data-aos="fade-left"
        data-aos-duration="500"
        >
            <div className="watch-img">
                <Link to={
                        "/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"
                    }><img src={props.item.img} alt="" /></Link>
            </div>
            <div className="watch-info">
                <div className="watch-type">{props.item.danhmuc}</div>
                <div className="watch-name"><Link to={
                        "/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"
                    }>{props.item.ten}</Link></div>
                <div className="watch-price">{changenumbertostring(props.item.giahientai)}  ₫<span>{changenumbertostring(props.item.giagoc)} ₫  </span></div>
            </div>
            <div className="watch-sale">-10%</div>
            <button className="watch-add-to-cart" onClick={handleAddToCart}>
                <i className="fa fa-cart-plus" aria-hidden="true"></i>
            </button>
        </div>
    )
}
