import TodoItem from './TodoItem';

const TodoList = (props) => {
	console.log(props.todos);
	return props.todos.map((todo) => (
		<TodoItem key={todo.id} todo={todo} todoCheck={props.todoCheck} delTodo={props.delTodo} />
	));
};

export default TodoList;
