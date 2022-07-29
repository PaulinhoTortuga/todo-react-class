import { useSelector } from 'react-redux';

import TodoItem from './TodoItem';

const TodoList = ({ filterStatus }) => {
	const todos = useSelector((state) => state.todoList.todos);

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
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};

export default TodoList;
