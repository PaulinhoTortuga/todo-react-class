import { v4 } from 'uuid';
import { useState } from 'react';

import Header from '../components/Header';
import TodoList from '../features/TodoList';
import AddTodo from '../features/AddTodo';
import TodoFooter from '../features/TodoFooter';

const TodoPage = () => {
	let todoList = [
		{
			id: v4(),
			title: 'Feed the cat',
			checked: false
		},
		{
			id: v4(),
			title: 'Work on job tasks',
			checked: false
		},
		{
			id: v4(),
			title: 'Go on training',
			checked: false
		}
	];

	const [todoListState, setTodoListState] = useState(todoList);
	const [filterStatus, setFilterStatus] = useState('all');

	const todoCheck = (id) => {
		setTodoListState(() => {
			return todoListState.map((todo) => {
				if (todo.id === id) {
					return { ...todo, checked: !todo.checked };
				} else {
					return todo;
				}
			});
		});
	};

	const delTodo = (id) => {
		setTodoListState(() => {
			return todoListState.filter((todo) => todo.id !== id);
		});
	};

	const updateTodo = (id, newTodo) => {
		setTodoListState(() => {
			return todoListState.map((item) => (item.id === id ? { ...item, title: newTodo } : item));
		});
	};

	const addTodo = (title) => {
		const newTodo = {
			id: v4(),
			title,
			checked: false
		};
		setTodoListState(() => {
			return [...todoListState, newTodo];
		});
	};

	const toggleAll = () => {
		setTodoListState(() => {
			let uncheckedTodos = todoListState.filter((item) => item.checked === false);
			if (uncheckedTodos.length !== 0) {
				return todoListState.map((item) => {
					item.checked = true;
					return item;
				});
			} else {
				return todoListState.map((item) => {
					item.checked = false;
					return item;
				});
			}
		});
	};

	const clearChecked = () => {
		setTodoListState(() => {
			return todoListState.filter((item) => !item.checked);
		});
	};

	return (
		<div className="App">
			<div className="container">
				<Header title={'TodoApp'} />
				<AddTodo addTodo={addTodo} />
				<TodoList
					todos={todoListState}
					checkTodoHandler={todoCheck}
					delTodoHandler={delTodo}
					updateTodoHandler={updateTodo}
					filterStatus={filterStatus}
				/>
				{todoListState.length != 0 && (
					<TodoFooter
						todoListLength={todoListState.length}
						filterStatusHandler={setFilterStatus}
						toggleAllHandler={toggleAll}
						clearCheckedHandler={clearChecked}
					/>
				)}
			</div>
		</div>
	);
};

export default TodoPage;
