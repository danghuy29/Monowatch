import React from 'react'
import "./tabinfo.css"
import { useState } from 'react'
import Content1 from './TabContent/Content1'
import Content2 from './TabContent/Content2'
import Content3 from './TabContent/Content3'
export default function TabInfo(props) {
    const [tab,setTab]= useState('tab-1')
    function handleClickTab1(){
        setTab("tab-1")
    }
    function handleClickTab2(){
        setTab("tab-2")
    }
    function handleClickTab3(){
        setTab("tab-3")
    }
    return (
        <div className="tab-container">
            <ul className="title-list">
                <li className={"tab-title " + (tab==="tab-1"?"active":"")} onClick={()=>handleClickTab1()}>Thông tin bổ sung</li>
                <li className={"tab-title " + (tab==="tab-2"?"active":"")} onClick={()=>handleClickTab2()}>Đánh giá (0)</li>
                <li className={"tab-title " + (tab==="tab-3"?"active":"")} onClick={()=>handleClickTab3()}>Chính sách bảo hành</li>
            </ul>
            <div className="tab-content">
                <div className={"content " + (tab==="tab-1"?"active":"")}>
                   <Content1 item = {props.item}/>
                </div>
                <div className={"content " + (tab==="tab-2"?"active":"")}>
                   <Content2 item = {props.item}/>
                </div>
                <div className={"content " + (tab==="tab-3"?"active":"")}>
                   <Content3/>
                </div>
            </div>
        </div>
    )
}
