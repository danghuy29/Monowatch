import React from 'react'
import './button.css'
export default function RightButton(props) {
    return (
     
             <div className="next-btn"  onClick={()=>props.onClick()}>
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
    )
}
// onClick={()=>props.handleClick()}