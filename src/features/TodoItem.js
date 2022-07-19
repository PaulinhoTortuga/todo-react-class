import React, { Component } from 'react';

const getStyle = () => {
	return {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#f4f4f4',
		padding: '10px',
		borderBottom: '1px #ccc dotted'
	};
};
const textStyle = (checked) => {
	return {
		textDecoration: checked ? 'line-through' : 'none',
		marginLeft: '20px'
	};
};
export class TodoItem extends Component {
	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={getStyle()}>
				<input type="checkbox" onChange={() => this.props.todoCheck(id)} />
				<p style={textStyle(this.props.todo.checked)}>{title}</p>
				<button onClick={() => this.props.delTodo(id)} style={btnStyle}>
					X
				</button>
			</div>
		);
	}
}

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
