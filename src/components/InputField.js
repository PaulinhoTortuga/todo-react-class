import React from 'react';
import TextField from '@mui/material/TextField';

const InputField = ({ name, label, placeholder, value, onChange, onKeyUp }) => {
	return (
		<TextField
			fullWidth
			style={{ padding: '5px 0' }}
			type="text"
			name={name}
			label={label}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onKeyUp={onKeyUp}
		/>
	);
};

export default InputField;
