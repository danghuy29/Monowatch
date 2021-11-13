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
import productAPi from '../../API/productsAPI'


export default function Category() {
    const handleFilterChange = (e) => {
      switch (e.target.value) {
          case "defaultValue":
            setParams(prev=>({
                ...prev,
                _sort:"",
                _order:""
            }))
              break;
        case "increase":
            setParams(prev=>({
                ...prev,
                _sort:"giahientai",
                _order:"asc"
            }))
                break;
        case "decrease":
            setParams(prev=>({
                ...prev,
                _sort:"giahientai",
                _order:"desc"
            }))
              break;
      
          default:
              break;
      }
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
    const [data,setData] = useState([])
   const [params,setParams] = useState({
                                            
                                            _sort:"",
                                            _order:"",
                                            danhmuc:danhmuc,
                                        })
                  
    useEffect(()=>{
        async function getData(){
            try{
                const response = await productAPi.getAll(params)
                setData(response)
            }catch(err){
                console.log(err);
            }

        }
        getData()
    },[params])

    useEffect(() => {
        setParams({
            _sort:"",
            _order:"",
            danhmuc:danhmuc,
        })
    }, [danhmuc])
    const filterHandle=(e)=>{
    let  filterData = data.filter((item)=>item[e.danhmuc] ===e.giatri)
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
                        <p className="hidden-on-mobile-tablet">Xem tất cả {data.length} kết quả</p>
                        <select id="filter-producs" name="products" onChange={(e) => handleFilterChange(e)}>
                            <option default value="defaultValue">Thứ tự mặc định</option>
                            {/* <option value="trend">Thứ tự theo mức độ phổ biến</option>
                            <option value="rate">Thứ tự theo điểm đánh giá</option>
                            <option value="new">Thứ tự theo sản phẩm mới</option> */}
                            <option value="increase">Giá từ thấp đến cao</option>
                            <option value="decrease">Giá từ cao đến thấp</option>
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
