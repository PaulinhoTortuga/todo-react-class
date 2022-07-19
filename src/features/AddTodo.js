import React, { useState } from 'react';
import Input from '../components/Input';

const AddTodo = (props) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onInputKeyUp = (event) => {
		if (event.key === 'Enter') {
			props.addTodo(inputValue);
			setInputValue('');
		}
	};
	return <Input value={inputValue} onChange={onInputChange} onKeyUp={onInputKeyUp} />;
};
export default AddTodo;
