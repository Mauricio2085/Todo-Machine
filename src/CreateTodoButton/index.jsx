import './CreateTodoButton.css'
import React from 'react';

const CreateTodoButton = ({setOpenModal, setIdCard, idCard}) => {
    return (
        <button className='CreateTodoButton' onClick={() => {
            setOpenModal(state => !state);
            setIdCard(1)
            console.log(idCard)
        }}>+</button>
    )
}

export {CreateTodoButton};