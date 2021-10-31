import React from 'react'
import ProductSlider from './ProductSlider'
export default function RelatedProduct(props) {
    return (
     <div className="related-product">
         <h3>Sản phẩm tương tự</h3>
        <ProductSlider item={props.item} data = {props.data}/>
     </div>
    )
}
