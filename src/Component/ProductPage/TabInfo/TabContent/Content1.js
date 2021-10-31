import React from 'react'

export default function Content1(props) {
    return (
        <>
          <div className="info-item">
              <h1>bộ máy & năng lượng</h1>
              <p>{props.item.bomay}</p>
          </div>
          <div className="info-item">
              <h1>chất liệu dây</h1>
              <p>{props.item.chatlieuday}</p>
          </div>
          <div className="info-item">
              <h1>chất liệu mặt kính</h1>
              <p>{props.item.chatlieumatkinh}</p>
          </div>
          <div className="info-item">
              <h1>giới tính </h1>
              <p>{props.item.danhmuc}</p>
          </div>
          <div className="info-item">
              <h1>hình dạng mặt số</h1>
              <p>{props.item.hinhdangmatso}</p>
          </div>
          <div className="info-item">
              <h1>kích thước mặt số</h1>
              <p>{props.item.kichthuocmatso}</p>
          </div>
          <div className="info-item">
              <h1>MỨC CHỐNG NƯỚC</h1>
              <p>{props.item.muchongnuoc}</p>
          </div>
          <div className="info-item">
              <h1>THƯƠNG HIỆU</h1>
              <p>{props.item.thuonghieu}</p>
          </div>
          <div className="info-item">
              <h1>XUẤT XỨ</h1>
              <p>{props.item.xuatxu}</p>
          </div>
        </>
    )
}
