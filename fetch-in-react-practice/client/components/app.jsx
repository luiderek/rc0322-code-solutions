import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    // use fetch to send a GET request to /api/todos
    fetch('/api/todos')
      .then(response => response.json())
      // update state with the received todos.
      .then(data => {
        this.setState({ todos: data });
      });
  }

  addTodo(newTodo) {
    // Use fetch to send a POST request to /api/todos
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    }).then(response => response.json())
      .then(data => {
        this.setState(
          // replace the old todos array with a:
          //    shallow copy of state.todos appended with the response data
          { todos: [...this.state.todos, data] }
        );
      }
      );
  }

  toggleCompleted(todoId) {
    // finding the object where todoID matches the function argument
    const todoIndex = this.state.todos.findIndex(x => x.todoId === todoId);
    const selectedObject = this.state.todos[todoIndex];
    // Use fetch to send a PATCH request to `/api/todos/${todoId}
    fetch(`/api/todos/${selectedObject.todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      // Sending it an literal object with the opposite of it's current status
      body: JSON.stringify({ isCompleted: !selectedObject.isCompleted })
    }).then(response => response.json())
      .then(data => {
        // creating a shallow copy of the todos array from state
        const statecopy = [...this.state.todos];
        // replacing the old todo with the one received by the server
        statecopy.splice(todoIndex, 1, data);
        // updating client state
        this.setState({ todos: statecopy });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
