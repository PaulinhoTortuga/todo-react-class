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
const TodoItem = (props) => {
	const { id, title } = props.todo;
	return (
		<div style={getStyle()}>
			<input type="checkbox" onChange={() => props.todoCheck(id)} />
			<p style={textStyle(props.todo.checked)}>{title}</p>
			<button onClick={() => props.delTodo(id)} style={btnStyle}>
				X
			</button>
		</div>
	);
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
