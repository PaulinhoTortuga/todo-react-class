import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos/Todos';
import AddTodos from './components/Todos/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {
	state = {
		todos: [
			{
				id: uuid.v4(),
				title: 'Feed the cat',
				checked: false
			},
			{
				id: uuid.v4(),
				title: 'Work on job tasks',
				checked: false
			},
			{
				id: uuid.v4(),
				title: 'Go on training',
				checked: false
			}
		]
	};

	todoCheck = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.checked = !todo.checked;
				}
				return todo;
			})
		});
	};

	delTodo = (id) => {
		this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] });
	};

	addTodo = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			checked: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header />
					<AddTodos addTodo={this.addTodo} />
					<Todos todos={this.state.todos} todoCheck={this.todoCheck} delTodo={this.delTodo} />
				</div>
			</div>
		);
	}
}
export default App;
