import React from 'react';

const Input = (props) => {
	return (
		<input
			style={{ width: '100%', padding: '5px' }}
			type="text"
			name={props.name}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			onKeyUp={props.onKeyUp}
		/>
	);
};

export default Input;
