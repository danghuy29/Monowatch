import React from 'react'
import './product.css'
import ProductHeader from './ProductHeader/ProductHeader'
import WatchInfo from './WatchInfo/WatchInfo'
import TabInfo from './TabInfo/TabInfo'
import Footer from '../Footer/Footer'
import LeftSection from './LeftSection/LeftSection'
import RelatedProduct from './RelatedProduct/RelatedProduct'
import { useParams } from 'react-router-dom'
import data from '../data/data'
// import Header from '../Top/Header'
export default function Product() {
    const {id} = useParams()
    // const {title} =useParams()
    // console.log(title);
    let item = data.watch.find((item)=>item.id=== Number(id))
    return (
        <div id="product-page">
            {/* <Header/> */}
            <ProductHeader />
            <div className="product-container">
                <div className="grid wide">
                    <div className="row">
                        <div className="col l-3 m-0 c-0">
                            <LeftSection/>
                        </div>
                        <div className="col l-9 m-12 c-12 right-section">
                            <WatchInfo item={item} />
                            <TabInfo item={item}/>
                            <RelatedProduct item={item} data = {data    }/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
