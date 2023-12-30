import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import {TodoItem} from '../TodoItem';
import { TodoTitle } from '../TodoTitle';
import { CreateTodoButton } from '../CreateTodoButton';
import './App.css';
import { TodoLoading } from '../TodoLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

const AppUI = () => {
    const {loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        idCard,
        setIdCard} = React.useContext(TodoContext)

    return (
        <>
        <TodoTitle /> 
            <TodoCounter/>
        <TodoSearch />
                <TodoList>

                {loading && <TodoLoading />}
                {error && searchedTodos === 0 && <p>Desespérate hay un error!!</p>}
                {!loading && searchedTodos < 1 && <p>¡Crea tu primer todo!</p>}

                {searchedTodos.map(todo =>(
                <TodoItem 
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
                />
            ))}
        </TodoList>
        <CreateTodoButton
            setOpenModal={setOpenModal}
            idCard={idCard}
            setIdCard={setIdCard}
        />
        {openModal && (<Modal
                        idCard={idCard}
                        setIdCard={setIdCard}
                        >
                            <TodoForm />
                    </Modal>)}
        </>
      );
}

export { AppUI };