import { Component } from 'react';
import { nanoid } from 'nanoid';
import { SearchForm } from 'components';
import { TodoList } from 'components/TodoList/TodoList';

export class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todosParsed = JSON.parse(localStorage.getItem('todoKEY'));
    if (todosParsed) {
      this.setState({ todos: todosParsed });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem('todoKEY', JSON.stringify(this.state.todos));
    }
  }

  handleSubmit = todo => {
    const newTodo = {
      text: todo,
      id: nanoid(),
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  render() {
    console.log(this.state);
    return (
      <>
        <SearchForm handleSubmit={this.handleSubmit} />
        <TodoList
          todosArr={this.state.todos}
          handleDelete={this.handleDelete}
        />
      </>
    );
  }
}
