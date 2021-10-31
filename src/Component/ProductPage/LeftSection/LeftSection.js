import React from 'react'
import ProductList from './ProductList'
import BlogList from './BlogList'
import "./leftsection.css"
export default function LeftSection() {
    return (
        <div id="left-section">
            <ProductList />
            <BlogList />
        </div>
    )
}
