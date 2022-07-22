import TodoItem from './TodoItem';

const TodoList = ({ todos, checkTodoHandler, delTodoHandler, updateTodoHandler, filterStatus }) => {
	const filterTodoList = (filterStatus) => {
		if (filterStatus === 'completed') {
			return todos.filter((item) => item.checked);
		} else if (filterStatus === 'active') {
			return todos.filter((item) => !item.checked);
		}
		return todos;
	};

	const filteredTodoList = filterTodoList(filterStatus);

	return (
		<ul>
			{filteredTodoList.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onCheckTodo={checkTodoHandler}
					onDelTodo={delTodoHandler}
					onUpdateTodo={updateTodoHandler}
				/>
			))}
		</ul>
	);
};

export default TodoList;
