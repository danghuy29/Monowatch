import React from 'react'

export default function RightSection(props) {
    const changenumbertostring=(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
    }
    return (
        <div className="right-section">
            <h2 className="title">
                Tổng số lượng
            </h2>
            <div className="price">
                <div className="text">Tổng cộng</div>
                <div className="content">{changenumbertostring(props.cart.total)} ₫</div>
            </div>
            <div className="ship">
                <div className="text">Giao hàng 1</div>
                <div className="content">Giao hàng miễn phí</div>
            </div>
            <div className="total">
                <div className="text">Tổng cộng</div>
                <div className="content">{changenumbertostring(props.cart.total)} ₫</div>
            </div>
          
                <a href="/" className="pay-btn">Tiến hành thanh toán</a>
           
        </div>
    )
}

