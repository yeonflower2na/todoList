import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
  <ul className="TodoList">
  {todos.map((todo) => (
  <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => toggleComplete(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
  />
  ))}
  </ul>
  );
  };
  
export default TodoList;