import { styled } from '@mui/system';
import { Checkbox, Input, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useRef } from 'react';

const TodoItem = ({ todo, onCheckTodo, onDelTodo, onUpdateTodo }) => {
	const [readOnly, setReadOnly] = useState(true);
	const inputRef = useRef();

	const updateTodo = () => {
		inputRef.current.focus();
		setReadOnly(false);
	};

	const saveUpdatedTodo = () => {
		onUpdateTodo(todo.id, inputRef.current.firstChild.value);
		setReadOnly(true);
		if (!inputRef.current.firstChild.value) {
			onDelTodo(todo.id);
		}
	};
	return (
		<Item>
			<Checkbox checked={todo.checked} onChange={() => onCheckTodo(todo.id)} />
			<Input
				ref={inputRef}
				defaultValue={todo.title}
				variant="standard"
				readOnly={readOnly}
				disableUnderline={readOnly}
				onDoubleClick={updateTodo}
				onBlur={saveUpdatedTodo}
			/>
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

const Item = styled('div')`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: #f4f4f4;
	padding: 10px;
	border-bottom: 1px #ccc dotted;
`;
