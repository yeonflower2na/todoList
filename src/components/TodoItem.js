import React from "react";

const TodoItem = ({todo,onToggle,onDelete}) => {
  return(
    <li className={`TodoItem ${todo.completed ? 'completed' : ''}`}>
      <span onClick={onToggle}>{todo.text}</span>
      <button onClick={onDelete}><i className="fas fa-trash"></i></button>
    </li>
  )
};

export default TodoItem;