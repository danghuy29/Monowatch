import React from 'react'
import ProductHeader from '../ProductPage/ProductHeader/ProductHeader'
import Footer from '../Footer/Footer'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import "./shoppage.css"
import { useSelector} from 'react-redux'
export default function ShopPage() {
    const cart = useSelector(state => state.cart) 

    return (
        <div id ="cart-page">
            <ProductHeader/>
            <div className="grid wide">
                <div className="row">
                    <div className="col l-7 m-12 c-12">      
                        <LeftSection cart = {cart} />
                    </div>
                    <div className="col l-5 m-12 c-12">
                        <RightSection cart = {cart}/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

