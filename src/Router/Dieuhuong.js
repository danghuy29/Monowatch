import React from 'react'
import { Route,Switch } from 'react-router'
import Home from '../Component/Home/Home'
import Product from '../Component/ProductPage/Product'
import ScrollToTop from './ScrollToTop'
import Category from '../Component/CategoryPage/Category'
import ShopPage from '../Component/ShopPage/ShopPage'
const Dieuhuong = () => {
    return (
        <Switch>
            <Route exact path="/"><ScrollToTop/><Home/></Route>
            <Route path="/home"><ScrollToTop/><Home/></Route>
            <Route path="/product/:title.:id.html"><ScrollToTop/><Product/></Route> 
            <Route path="/product"><ScrollToTop/><Product/></Route> 
            <Route path="/cart"><ScrollToTop/>< ShopPage/></Route> 
            <Route path="/category/:danhmuc"><ScrollToTop/><Category/></Route> 
            <Route path="/filter/:danhmuc.:filterby"><ScrollToTop/><Category/></Route> 
        </Switch>
    )
}
export default Dieuhuong
