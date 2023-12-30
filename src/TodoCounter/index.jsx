import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import { useContext } from 'react';

const  TodoCounter = () => {
    const {
        totalTodos, 
        completedTodos, 
        loading 
        } = useContext(TodoContext)
    if(totalTodos !== completedTodos) {
        return (
                <h1 className='TodoCounter'>
                    Has creado {completedTodos} de {totalTodos} todos
                </h1>
            );
    } else if (!loading) {
        return(
            <h1 className='TodoCounter-felicidades'>
                    FELICIDADES!! Has completado todos los TODOS !!
                </h1>
        )
    }
    
}

export {TodoCounter};