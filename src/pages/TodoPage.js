import { useState } from 'react';
import { useSelector } from 'react-redux';

import Header from '../components/Header';
import TodoList from '../features/TodoList';
import AddTodo from '../features/AddTodo';
import TodoFooter from '../features/TodoFooter';

const TodoPage = () => {
	const todos = useSelector((state) => state.todoList);
	const [filterStatus, setFilterStatus] = useState('all');

	const handleFilterChange = (newStatus) => {
		setFilterStatus(newStatus);
	};

	return (
		<div className="App">
			<div className="container">
				<Header title={'TodoApp'} />
				<AddTodo />
				<TodoList filterStatus={filterStatus} />
				{todos.length != 0 && <TodoFooter onFilterChange={handleFilterChange} />}
			</div>
		</div>
	);
};

export default TodoPage;
