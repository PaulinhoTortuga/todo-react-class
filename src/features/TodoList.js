import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
	render() {
		return this.props.todos.map((todo) => (
			<TodoItem
				key={todo.id}
				todo={todo}
				todoCheck={this.props.todoCheck}
				delTodo={this.props.delTodo}
			/>
		));
	}
}

export default TodoList;
