import React, { Component } from 'react';

export class Input extends Component {
	state = {
		title: ''
	};

	onChange = (e) => {
		this.setState({ title: e.target.value });
	};
	onKeyUp = (e) => {
		if (e.key === 'Enter') {
			this.props.addTodo(this.state.title);
			this.setState({ title: '' });
		}
	};
	render() {
		return (
			<input
				style={{ width: '100%', padding: '5px' }}
				type="text"
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.state.title}
				onChange={this.onChange}
				onKeyUp={this.onKeyUp}
			/>
		);
	}
}

export default Input;
