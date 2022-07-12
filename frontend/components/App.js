import React from 'react'
import TodoList from "./TodoList"
import TodoForm from "./Form"

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  handleClear = () => {
    //1. setState
    //2. loop through all todos.
    //3. remove all todos that have been completed.
    //4 save filtered todos to state

    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    })
  }

  handleAdd = (task) => {

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleToggle = (id) => {
    const clickId = id;

    this.setState({
      ...this.state,
      [todos]: this.state.todos.map(todo => {
        if (todo.id === clickId) {
          return {
            ...this.state,
            [completed]: !todo.completed,
          }
        }

        return todo;
      })
    })
  }

  render() {
    const { todos } = this.state;


    return (
      <div>
        <TodoList handleToggle={this.handleToggle} todos={todos} />

        <TodoForm handleAdd={this.handleAdd} />

        <button onClick={this.handleClear}>Clear</button>
      </div>
    )
  }
}
