import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
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
				name="title"
				placeholder="Add Todo..."
				value={this.state.title}
				onChange={this.onChange}
				onKeyUp={this.onKeyUp}
			/>
		);
	}
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};
export default AddTodo;
