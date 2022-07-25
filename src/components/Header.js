import { styled } from '@mui/system';
import React from 'react';

const Header = ({ title }) => {
	return (
		<HeaderWrapper>
			<h1>{title}</h1>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled('header')`
	background-color: #333;
	color: #fff;
	text-align: center;
	padding: 10px;
`;

export default Header;
