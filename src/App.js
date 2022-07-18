import React, { Component } from 'react';
import './App.css';
import TodoPage from './pages/TodoPage';
class App extends Component {
	render() {
		return (
			<div className="App">
				<TodoPage />
			</div>
		);
	}
}
export default App;
