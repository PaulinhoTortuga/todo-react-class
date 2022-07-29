import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
	todos: [
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
	],
	isLoading: false
};

export const todoListSlice = createSlice({
	name: 'todoList',
	initialState,
	reducers: {
		setLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		setTodos: (state, action) => {
			state.todos = action.payload;
		},
		todoCheck: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
			);
		},
		delTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.map((todo) =>
				todo.id === action.payload.id ? { ...todo, title: action.payload.inputValue } : todo
			);
		},
		addTodo: (state, action) => {
			const newTodo = {
				id: v4(),
				title: action.payload,
				checked: false
			};
			state.todos = [...state.todos, newTodo];
		},
		toggleAll: (state) => {
			let uncheckedTodos = state.todos.filter((todo) => todo.checked === false);
			state.todos.map((todo) => {
				todo.checked = uncheckedTodos.length !== 0;
				return todo;
			});
		},
		clearChecked: (state) => {
			state.todos = state.todos.filter((todo) => !todo.checked);
		}
	}
});

export const {
	setLoading,
	setTodos,
	todoCheck,
	delTodo,
	updateTodo,
	addTodo,
	toggleAll,
	clearChecked
} = todoListSlice.actions;

export default todoListSlice.reducer;
