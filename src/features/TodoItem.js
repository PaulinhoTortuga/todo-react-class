import { useDispatch } from 'react-redux';
import { todoCheck, delTodo, updateTodo } from '../store/features/todoListSlice';

import { useState, useRef, useEffect } from 'react';

import { styled } from '@mui/system';
import { Checkbox, Input, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// import { setTodos } from '../store/features/todoListSlice';

const TodoItem = ({ todo }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'todoList/setTodos' });
	}, []);

	const inputRef = useRef();
	const [readOnly, setReadOnly] = useState(true);
	const [inputValue, setInputValue] = useState(todo.title);

	const updateTodoItem = () => {
		inputRef.current.focus();
		setReadOnly(false);
	};

	const saveUpdatedTodoItem = () => {
		const id = todo.id;
		dispatch(updateTodo({ id, inputValue }));
		setReadOnly(true);
		if (!inputValue) {
			dispatch(delTodo(todo.id));
		}
	};
	return (
		<Item>
			<Checkbox checked={todo.checked} onChange={() => dispatch(todoCheck(todo.id))} />
			<Input
				ref={inputRef}
				defaultValue={todo.title}
				variant="standard"
				readOnly={readOnly}
				disableUnderline={readOnly}
				onDoubleClick={updateTodoItem}
				onBlur={saveUpdatedTodoItem}
				onChange={(event) => setInputValue(event.target.value)}
			/>
			<IconButton
				aria-label="delete"
				sx={{ marginLeft: 'auto' }}
				onClick={() => dispatch(delTodo(todo.id))}>
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
