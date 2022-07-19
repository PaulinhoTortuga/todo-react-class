import React, { Component } from 'react';

export class Input extends Component {
	render() {
		return (
			<input
				style={{ width: '100%', padding: '5px' }}
				type="text"
				name={this.props.name}
				placeholder={this.props.placeholder}
				value={this.props.value}
				onChange={this.props.onChange}
				onKeyUp={this.props.onKeyUp}
			/>
		);
	}
}

export default Input;
