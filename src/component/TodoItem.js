import React from 'react';


function TodoItem(props) {
  const {index} = props;
  return (
    <li key={index}>
        <input
          onChange={(event) => props.toggleTodoDone(event, index)}
          type="checkbox"
          checked={props.todo.done}
        />
        <span
          style={{
            textDecoration: props.todo.done ? "line-through" : "inherit"
          }}
        >
          {props.todo.title}
        </span>
        <button onClick={() => props.removeTodo(index)}>Remove</button>
   </li>
  );
}

export default TodoItem;