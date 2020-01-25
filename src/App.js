import React, { Component } from "react";
import NewTodoForm from './component/NewTodoForm';
import TodoList from "./component/TodoList";


class App extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Todos",
      newTodo: "",
      todos: [
        {
          title: "Learn React",
          done: false
        },
        {
          title: "Learn Vue",
          done: false
        }
      ],
      rememberMe: false
    };
    this.formSubmitted = this.formSubmitted.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleTodoDone = this.toggleTodoDone.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  componentDidMount = () => {
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    const newTodo = rememberMe ? localStorage.getItem("newTodo") : "";
    this.setState({ newTodo, rememberMe });
  };

  formSubmitted(e) {
    e.preventDefault();
    const { newTodo, rememberMe } = this.state;
    localStorage.setItem("rememberMe", rememberMe);
    localStorage.setItem("newTodo", rememberMe ? newTodo : "");
    this.setState({
      newTodo: "",
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    });
  }

  handleChange = event => {
    const input = event.target;
    const value = input.type === "checkbox" ? input.checked : input.value;

    this.setState({ [input.name]: value });
  };

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = { ...todos[index] };
    todos[index].done = event.target.checked;
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  render() {
    const { heading, todos, newTodo, rememberMe } = this.state;
    return (
      <div>
        <h1>{heading}</h1>
        <NewTodoForm
           newTodo = {newTodo}
           rememberMe = {rememberMe}
           formSubmitted = {this.formSubmitted}
           handleChange = {this.handleChange}
        />
        <button onClick={() => this.allDone()}>All Done</button>
       <TodoList
           todos = {todos}
           toggleTodoDone = {this.toggleTodoDone}
           removeTodo = {this.removeTodo}  
       />
      </div>
    );
  }
}

export default App;