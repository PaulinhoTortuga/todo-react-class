import React, { useState } from 'react';
import InputField from '../components/InputField';

const AddTodo = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (value) => {
		setInputValue(value);
	};

	const handleInputKeyUp = (event) => {
		if (event.key === 'Enter') {
			addTodo(inputValue);
			setInputValue('');
		}
	};
	return <InputField value={inputValue} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />;
};
export default AddTodo;
