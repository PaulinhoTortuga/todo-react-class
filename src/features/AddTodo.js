import React, { Component } from 'react';
import Input from '../components/Input';
export class AddTodo extends Component {
	state = {
		input: ''
	};
	onInputChange = (e) => {
		this.setState({ input: e.target.value });
	};
	onInputKeyUp = (e) => {
		if (e.key === 'Enter') {
			this.props.addTodo(this.state.input);
			this.setState({ input: '' });
		}
	};
	render() {
		return (
			<Input value={this.state.input} onChange={this.onInputChange} onKeyUp={this.onInputKeyUp} />
		);
	}
}

export default AddTodo;
