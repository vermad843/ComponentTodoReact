import React from 'react';


function NewTodoForm(props) {
  return (
    <form onSubmit={props.formSubmitted}>
       <label htmlFor="newTodo">NewTodo</label>
       <label>
         <input
           onChange={props.handleChange}
           name="newTodo"
           id="newTodo"
           value={props.newTodo}
         />
       </label>
       <label>
         <input
           name="rememberMe"
           checked={props.rememberMe}
           onChange={props.handleChange}
           type="checkbox"
           value={props.rememberMe}
         />
         Remember me
       </label>
       <button type="submit">Add Todo</button>
  </form>
  );
}

export default NewTodoForm;