import React from 'react'
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader'
import Footer from '../Footer/Footer'
import CategoryItem from './CategoryItem'
import './category.css'
import LeftSection from './LeftSection'
import ModalFilter from './ModalFilter'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'

import axios from 'axios'
import productAPi from '../../API/productsAPI'


export default function Category() {
    const handleFilterChange = (e) => {
        console.log(e.target.value);
    }
    
    const [modal, setModal] = useState(false)
    const handleShowModal = ()=>{
        setModal(!modal)
        document.body.style.overflow = 'hidden';
    }
    const handleCloseModal = ()=>{
        setModal(!modal)
        document.body.style.overflow = 'unset';
    }
    const {danhmuc} = useParams()
    // let url = `https://public-json-server.herokuapp.com/watch?danhmuc=${danhmuc}`
    const [data,setData] = useState([])
    useEffect(()=>{
        async function getData(){
            try{
                const params = {
                    danhmuc:danhmuc,
                }
                const response = await productAPi.getAll(params)
                setData(response)
            }catch(err){
                console.log(err);
            }

        }
        getData()
    },[])  
    const filterHandle=(e)=>{
        console.log(typeof e.giatri);
    let  filterData = data.filter((item)=>item[e.danhmuc] ===e.giatri)
        console.log(filterData);
        setData(filterData)
    }
    return (
        <div id="category">
            <ProductHeader />
            <div className="grid wide">
                <div className="top">
                    <div className="router-section">
                        <h3><a href="/home">Trang chủ <span>/</span> </a>{danhmuc}</h3>
                    </div>
                    <div className="filter-toggle hidden-on-PC hidden-on-large-tablet" onClick={handleShowModal}>
                        <i className="fas fa-bars ">
                        </i>
                        LỌC
                    </div>
                    <div className="filter-section">
                        <p className="hidden-on-mobile-tablet">Xem tất cả 8 kết quả</p>
                        <select id="filter-producs" name="products" onChange={(e) => handleFilterChange(e)}>
                            <option default value="default">Thứ tự mặc định</option>
                            <option value="trend">Thứ tự theo mức độ phổ biến</option>
                            <option value="rate">Thứ tự theo điểm đánh giá</option>
                            <option value="new">Thứ tự theo sản phẩm mới</option>
                            <option value="price-increase">Giá từ thấp đến cao</option>
                            <option value="price-decrease">Giá từ cao đến thấp</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col l-3 m-0 c-0">
                        <LeftSection filterHandle={(e)=>filterHandle(e)}/>
                    </div>
                    <div className="col l-9 m-12 c-12">
                        <div className="row">
                            {
                                data.map((item,index)=>{
                                    return <CategoryItem key={index} item={item}/>
                                })
                            }
                           
                        </div>
                    </div>
                    {
                        modal &&  <ModalFilter onClose = {handleCloseModal}/>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}
