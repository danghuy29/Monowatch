import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import productAPi from '../../API/productsAPI';
import { Link } from 'react-router-dom'

export default function Search() {
    const [data,setData] = useState([])
    const [searchData,setSearchData] = useState([])
    const handleOnChange=(e)=>{
            if(e.target.value.length>=3){
                const tempData =   data.filter((item)=>{
                    return suatieude(item.ten).includes(suatieude(e.target.value))
                })
            setSearchData(tempData)
            }
            else{
                setSearchData([])
            }
          
        
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
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    useEffect(()=>{
        async function getData(){
            try{
               const response = await productAPi.getAll()
               setData(response)
            }catch(err){
                console.log(err);
            }

        }
        getData()
    },[])
    const SearchItem = (props)=>{
        return(
            <Link to={
                "/product/" + suatieude(props.item.ten) + "." + props.item.id +".html"
            } className="content__item">
            <div className="content__item__img">
                    <img src={props.item.img} alt="" />
                </div>
                <div className="content__item__name">
                    <h3>{props.item.ten}</h3>
                </div>
                <div className="content__item__price">
                   {changenumbertostring(props.item.giahientai)} ₫
                </div>
            </Link>

        )
    }   
    return (
        <div className="search-section hidden-on-mobile-tablet hidden-on-large-tablet customer-section-item">
        <i className="fa fa-search separate" aria-hidden="true" />
        <div className="searchBx">
            <div className="input-section ">
                <input type="text" placeholder="Nhập sản phẩm bạn cần tìm..." onChange={(e)=>handleOnChange(e)}/>
                <i className="fa fa-search" aria-hidden="true" />
            </div>
            <div className="input__content">
               {
                   searchData.map((item,index)=> <SearchItem key={index} item={item}/>)
               }
            </div>
        </div>
    </div>
    )
}
