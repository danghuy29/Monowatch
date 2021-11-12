import React from 'react'
import Item from './Item Component/Item'
import 'aos/dist/aos.css'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const  editsearch = (str) => {
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
    str = str.replace(/(\s+)/g, ' ');
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
    // return
    str = str.toLowerCase()
    return str;
  }
const url ='https://public-json-server.herokuapp.com/watch'
export default function ListItem(props) {
    const [data,setData] = useState([])
    useEffect(()=>{
        async function getData(){
            try{
                const response = await axios.get(url)
                setData(response.data)
            }catch(err){
                console.log(err);
            }

        }
        getData()
    },[])   
    return (
        <div className="grid wide list-item-wrapper">
            <h2 className="list-item-tittle"
                data-aos="fade-up"
                data-aos-duration="1200" 
                data-aos-offset="120"
            >{props.danhmuc}</h2>
            <div className="row container">
             
               {
                   data.map((item,index)=>{
                    if(editsearch(props.danhmuc)===editsearch(item.danhmuc)){
                        return(
                            <Item key = {index} item={item}/>
                        )
                    }
                    return null
                   })
               }
            </div>
        </div>
    )
}
