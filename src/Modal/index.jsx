import React from "react";
import  ReactDOM from "react-dom";
import './Modal.css'

const Modal = ({children, idCard}) => {

        if(idCard === 1) {
            return ReactDOM.createPortal(
            <div className="ModalBackground">
                {children}
            </div>,
            document.getElementById('modal')
            )
        } else {
            return ReactDOM.createPortal(
                <div className="ModalBackground">
                    <h1>Heyyyy</h1>
                </div>,
                document.getElementById('modal')
            )
            
        }
}

export { Modal };