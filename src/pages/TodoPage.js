import React, { Component } from 'react';
import Header from '../components/Header';
import TodoList from '../features/TodoList';
import Input from '../components/Input';
import { v4 } from 'uuid';

class TodoPage extends Component {
	state = {
		todos: [
			{
				id: v4(),
				title: 'Feed the cat',
				checked: false
			},
			{
				id: v4(),
				title: 'Work on job tasks',
				checked: false
			},
			{
				id: v4(),
				title: 'Go on training',
				checked: false
			}
		]
	};

	todoCheck = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, checked: !todo.checked };
				} else {
					return todo;
				}
			})
		});
		console.log(this.state);
	};

	delTodo = (id) => {
		this.setState({ todos: [...this.state.todos.filter((todo) => todo.id !== id)] });
	};

	addTodo = (title) => {
		const newTodo = {
			id: v4(),
			title,
			checked: false
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<Header title={'TodoApp'} />
					<Input addTodo={this.addTodo} />
					<TodoList todos={this.state.todos} todoCheck={this.todoCheck} delTodo={this.delTodo} />
				</div>
			</div>
		);
	}
}
export default TodoPage;
