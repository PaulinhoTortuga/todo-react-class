import React, { useState } from 'react';
import InputField from '../components/InputField';

const AddTodo = ({ addTodo }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleInputKeyUp = (event) => {
		console.log('inputValue1', inputValue);
		if (event.key === 'Enter') {
			console.log('inputValue2', inputValue);
			addTodo(inputValue);
			setInputValue('');
		}
	};
	return <InputField value={inputValue} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />;
};
export default AddTodo;
