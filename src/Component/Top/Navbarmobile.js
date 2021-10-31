import React, {useState} from 'react'
import ModalMenu from './ModalMenu'
export default function Navbarmobile() {
    const [showMenu, setShowMenu] = useState(false)
    const openModal = ()=>{
        setShowMenu(!showMenu);
        document.body.style.overflow = 'hidden';

    }
    const closeModal = ()=>{
        setShowMenu(!showMenu);
        document.body.style.overflow = 'unset';
    }
    return (
        <div>
             <div className="menubar-mobile" onClick={()=>openModal()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <ModalMenu show ={showMenu} onClose = {()=>closeModal()}/>
        </div>
    )
}
