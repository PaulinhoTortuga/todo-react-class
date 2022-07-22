import styled from 'styled-components';
import { Checkbox, Input, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

// const textStyle = (checked) => {
// 	return {
// 		textDecoration: checked ? 'line-through' : 'none',
// 		marginLeft: '20px'
// 	};
// };

const TodoItem = ({ todo, onCheckTodo, onDelTodo, onUpdateTodo }) => {
	const [readOnly, setReadOnly] = useState(true);

	const updateTodo = (event) => {
		const input = event.target;
		input.focus();
		console.log(input);
		setReadOnly(() => false);
		input.onblur = () => {
			onUpdateTodo(todo.id, input.value);
			setReadOnly(() => true);
			if (!input.value) {
				onDelTodo(todo.id);
			}
		};
	};
	return (
		<Item>
			<Checkbox checked={todo.checked} onChange={() => onCheckTodo(todo.id)} />
			<Input
				defaultValue={todo.title}
				variant="standard"
				readOnly={readOnly}
				disableUnderline={readOnly}
				onDoubleClick={updateTodo}
			/>
			{/* <p style={textStyle(todo.checked)}>{todo.title}</p> */}
			<IconButton
				aria-label="delete"
				sx={{ marginLeft: 'auto' }}
				onClick={() => onDelTodo(todo.id)}>
				<DeleteIcon />
			</IconButton>
		</Item>
	);
};
export default TodoItem;

const Item = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #f4f4f4;
	padding: 10px;
	border-bottom: 1px #ccc dotted;
`;
