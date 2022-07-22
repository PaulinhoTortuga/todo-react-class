import React from 'react';

const Header = ({ title }) => {
	return (
		<header style={headerStyle}>
			<h1>{title}</h1>
		</header>
	);
};

const headerStyle = {
	backgroundColor: '#333',
	color: '#fff',
	textAlign: 'center',
	padding: '10px'
};

export default Header;
