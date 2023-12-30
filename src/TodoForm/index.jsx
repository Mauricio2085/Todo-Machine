import React, { useState } from 'react';
import {TodoContext} from '../TodoContext'
import './TodoForm.css';


const TodoForm = () =>{
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);
    const [newTodoValue, setNewTodoValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}
    >
        <label>Escribe tu nuevo Todo...</label>
        <textarea 
            placeholder="Cortar cebolla para el almuerzo"
            value={newTodoValue}
            onChange={onChange}
            >
            
        </textarea>
        <div className="TodoForm-buttonContainer">
        <button
            onClick={onCancel}
            className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
        <button type="submit" className="TodoForm-button TodoForm-button--add">Añadir</button>
        </div>
    </form>
    )
    
};

export { TodoForm };