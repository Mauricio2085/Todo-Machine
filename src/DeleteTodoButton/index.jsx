import  './DeleteTodoButton.css';

const DeleteTodoButton = ({onDelete, todosTest}) => {
    return (
        <button className='delete-button' onClick={onDelete}>X</button>
    )
}

export {DeleteTodoButton};