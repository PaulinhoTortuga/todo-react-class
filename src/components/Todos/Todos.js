import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
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

Todos.propTypes = {
	todoCheck: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
	todos: PropTypes.array.isRequired
};
export default Todos;
