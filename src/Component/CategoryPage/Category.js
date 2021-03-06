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
                        <h3><a href="/home">Trang ch??? <span>/</span> </a>{danhmuc}</h3>
                    </div>
                    <div className="filter-toggle hidden-on-PC hidden-on-large-tablet" onClick={handleShowModal}>
                        <i className="fas fa-bars ">
                        </i>
                        L???C
                    </div>
                    <div className="filter-section">
                        <p className="hidden-on-mobile-tablet">Xem t???t c??? {data.length} k???t qu???</p>
                        <select id="filter-producs" name="products" onChange={(e) => handleFilterChange(e)}>
                            <option default value="defaultValue">Th??? t??? m???c ?????nh</option>
                            {/* <option value="trend">Th??? t??? theo m???c ????? ph??? bi???n</option>
                            <option value="rate">Th??? t??? theo ??i???m ????nh gi??</option>
                            <option value="new">Th??? t??? theo s???n ph???m m???i</option> */}
                            <option value="increase">Gi?? t??? th???p ?????n cao</option>
                            <option value="decrease">Gi?? t??? cao ?????n th???p</option>
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
