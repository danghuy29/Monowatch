import React from 'react'
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader'
import Footer from '../Footer/Footer'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import "./shoppage.css"
export default function ShopPage() {
    return (
        <div id ="cart-page">
            <ProductHeader/>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-7 m-12 c-12">      
                        <LeftSection/>
                    </div>
                    <div className="col l-5 m-12 c-12">
                        <RightSection/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

