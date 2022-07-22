import TodoItem from './TodoItem';

const TodoList = ({ todos, checkTodoHandler, delTodoHandler, updateTodoHandler }) => {
	return (
		<ul>
			{todos.map((todo) => (
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
