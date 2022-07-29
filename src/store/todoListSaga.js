import { call, put, takeEvery } from 'redux-saga/effects';
import { setTodos, setLoading } from './features/todoListSlice';

function* getTodosFetchWorker() {
	yield put(setLoading(true));
	console.log('1');
	const todos = yield call(fetch, 'http://localhost:5000/todos');
	console.log('2');
	const parsedTodos = yield todos.json();
	yield put(setTodos(parsedTodos));
	yield put(setLoading(false));
}

function* todosSaga() {
	yield takeEvery('todoList/setTodos', getTodosFetchWorker);
}

export default todosSaga;
