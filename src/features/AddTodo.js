import React, { useState } from 'react';
import InputField from '../components/InputField';

const AddTodo = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const onInputKeyUp = (event) => {
		if (event.key === 'Enter') {
			addTodo(inputValue);
			setInputValue('');
		}
	};
	return <InputField value={inputValue} onChange={onInputChange} onKeyUp={onInputKeyUp} />;
};
export default AddTodo;
