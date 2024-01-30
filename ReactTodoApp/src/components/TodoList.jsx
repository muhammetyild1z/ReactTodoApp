// components/TodoList.js
import React from 'react';
import   Table  from '@mui/material/Table';



const TodoList = ({ todos, onDeleteTodo, onUpdateTodo, onSortTodos }) => {
  // Todo listesi ve işlemleri
  return (
    <div>
      <h2>Todo List</h2>
      {/* Todo listesi */}
      <Table>
        <tbody>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDeleteTodo}
              onUpdate={onUpdateTodo}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TodoList;
