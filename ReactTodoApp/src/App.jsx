import React, { useState } from 'react';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';
import Popup from './components/Popup.jsx';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');

  const handleAddTodo = (newTodo) => {
    // Yeni todo eklemek için
    setTodos([...todos, newTodo]);
    setPopupMessage('Todo added successfully.');
  };

  const handleDeleteTodo = (id) => {
    // Todo silme işlemi
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    setPopupMessage('Todo deleted successfully.');
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    // Todo güncelleme işlemi
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    });
    setTodos(updatedTodos);
    setPopupMessage('Todo updated successfully.');
  };

  const handleSortTodos = () => {
    // Todoları başlıklarına göre sıralama işlemi
    const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
    setTodos(sortedTodos);
    setPopupMessage('Todos sorted successfully.');
  };

  const handlePopupClose = () => {
    setPopupMessage('');
  };

  return (
    
      <div className="app">
        <Header />
      
         
            <Register />
         
         
            <Login />
        
          
            <TodoList
              todos={todos}
              onDeleteTodo={handleDeleteTodo}
              onUpdateTodo={handleUpdateTodo}
              onSortTodos={handleSortTodos}
              onAddTodo={handleAddTodo}
            />
       
         
            <Login />
         
   
        {popupMessage && <Popup message={popupMessage} onClose={handlePopupClose} />}
      </div>
   
  );
};

export default App;
