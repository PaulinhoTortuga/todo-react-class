import React from 'react';
import { styled } from '@mui/system';

import TextField from '@mui/material/TextField';

const InputField = ({ name, label, placeholder, value, onChange, onKeyUp }) => {
	return (
		<Container>
			<TextFieldWrapper
				fullWidth
				type="text"
				name={name}
				label={label}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onKeyUp={onKeyUp}
			/>
		</Container>
	);
};
const Container = styled('div')`
	padding: 5px 0;
`;
const TextFieldWrapper = styled(TextField)({
	padding: '5px 0'
});

export default InputField;
