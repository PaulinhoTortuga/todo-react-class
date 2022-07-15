import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
	getStyle = () => {
		return {
			display: 'flex',
			justifyContent: 'flex-start',
			backgroundColor: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.todo.checked ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<input type="checkbox" onChange={this.props.todoCheck.bind(this, id)} />
				<p>{title}</p>
				<button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
					X
				</button>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todoCheck: PropTypes.func.isRequired,
	delTodo: PropTypes.func.isRequired,
	todo: PropTypes.object.isRequired
};

const btnStyle = {
	backgroundColor: '#CA2603',
	color: '#fff',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	marginLeft: 'auto'
};
export default TodoItem;
