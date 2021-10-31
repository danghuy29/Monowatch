import React from 'react'
import './button.css'
export default function LeftButton(props) {
    return (
        <div className="previous-btn" onClick={()=>props.onClick()}>
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
        </div>
    )
}

// onClick={()=>props.handleClick()}