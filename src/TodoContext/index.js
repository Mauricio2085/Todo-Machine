import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = ({children}) => {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const [idCard, setIdCard] = React.useState(0);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLocaleLowerCase()
          return todoText.includes(searchText);
        }
      );

        const addTodo = (text) => {
          const newTodos = [...todos];
          newTodos.push({
            text,
            completed: false
          });
          saveTodos(newTodos)
        }
    
        const completeTodo = (text) => {
        const parcialTodos = todos.map(todo => todo);
        const todoIndex = parcialTodos.findIndex(
          (todo) => todo.text === text
        );
        parcialTodos[todoIndex].completed = true;
        saveTodos(parcialTodos);
      }
    
      const deleteTodo = (text) => {
        const parcialTodos = [...todos];
        const todoIndex = parcialTodos.findIndex(
          (todo) => todo.text === text
        );
        parcialTodos.splice([todoIndex], 1);
        saveTodos(parcialTodos)
      }

    return(
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
            idCard,
            setIdCard
        }
        }>
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider }