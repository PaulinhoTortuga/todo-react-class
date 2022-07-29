import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { addTodo } from '../store/features/todoListSlice';

import InputField from '../components/InputField';

const AddTodo = () => {
	const dispatch = useDispatch();
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (value) => {
		setInputValue(value);
	};

	const handleInputKeyUp = (event) => {
		if (event.key === 'Enter') {
			dispatch(addTodo(inputValue));
			setInputValue('');
		}
	};
	return <InputField value={inputValue} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />;
};
export default AddTodo;
