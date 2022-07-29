import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import todoListReducer from './features/todoListSlice';
import todoListSaga from './todoListSaga';

const saga = createSagaMiddleware();
export const store = configureStore({
	reducer: {
		todoList: todoListReducer
	},
	middleware: [saga]
});
saga.run(todoListSaga);
