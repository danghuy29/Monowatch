import React from 'react'
import ReactStars from "react-rating-stars-component";

function Start() {
    return (
        <>
            <ReactStars
                count={5}
                size={24}
                isHalf={true}
                activeColor="#d26e4b"
            />,
        </>
    )
}

export default function Content2(props) {
    return (
        <div className="rate-container">
            <h1>Đánh giá</h1>
            <p>Chưa có đánh giá nào</p>
            <div className="rate-section">
                <h1>Hãy là người đầu tiên nhận xét “{props.item.ten}” </h1>
                <p>Đánh giá của bạn</p>
                {/* <form action=""> */}
                <div className="rate-star">
                    <Start />
                </div>
                <label>Nhận xét của bạn *</label>
                <textarea name="coment" className="comment"></textarea>
                <div className="form-group">
                    <div className="name-section">
                        <label >Tên *</label>
                        <input type="text" className="name" />
                    </div>
                    <div className="email-section">
                        <label >Email *</label>
                        <input type="email" className="email" />
                    </div>
                </div>
                <button className="submit-btn">
                    GỬI ĐI
                </button>

                {/* </form> */}
            </div>
        </div>


    )
}
