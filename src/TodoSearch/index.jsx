import React from 'react';
import './TodoSearch.css';
import { TodoContext } from '../TodoContext';

const  TodoSearch = () => {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    console.log("Los usuarios estan escribiendo: " + searchValue)
    
        return (
        <input className='TodoSearch'
        placeholder="Cortar cebolla"
        value={searchValue}
        onChange={(event) =>{
            setSearchValue(event.target.value)
            console.log(event.target.value)
        }}
        />
        
    );
}

export {TodoSearch};