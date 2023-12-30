import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
            }
  
            setLoading(false);
  
        } catch (error) {
          console.log(error);
          setError(true);
          setLoading(false);
          }
      },3000);
    },[]);
      
      const saveItem = (newItem) => {
      localStorage.setItem('TODOS_V1', JSON.stringify(newItem))
      setItem(newItem)
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    }
  
  }

  export { useLocalStorage };

  // const defaultTodos = [
//   { text: 'LLorar con la  llorona', completed: false, },
//   { text: 'Picar cebolla', completed: false, },
//   { text: 'Completar curso React', completed: false, },
//   { text: 'tarea finalizada', completed: false, },
//   { text: 'LALALALA', completed: false, }
// ];
// let stringifyTodos = JSON.stringify(defaultTodos);
// localStorage.setItem('TODOS_V1', stringifyTodos);