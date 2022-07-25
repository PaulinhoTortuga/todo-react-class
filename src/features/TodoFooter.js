import { styled } from '@mui/system';
import { Button, ButtonGroup } from '@mui/material';

export default function TodoFooter({
	todoListLength,
	onFilterChange,
	toggleAllHandler,
	clearCheckedHandler
}) {
	const filterHandler = (event) => {
		onFilterChange(event.target.id);
	};
	return (
		<Footer>
			<Span>{todoListLength} items left</Span>
			<ButtonGroup variant="contained" onClick={filterHandler}>
				<Button id="all">All</Button>
				<Button id="active">Active</Button>
				<Button id="completed">Completed</Button>
			</ButtonGroup>
			<Button variant="contained" onClick={toggleAllHandler}>
				Finish all
			</Button>
			<Button variant="contained" onClick={clearCheckedHandler}>
				Clear completed
			</Button>
		</Footer>
	);
}

const Footer = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #333;
	margin: 5px 0;
	padding: 10px;
	border-radius: 4px;
`;

const Span = styled('span')`
	vertical-align: center;
	margin: auto 0;
	background-color: #fff;
	padding: 6px;
	border-radius: 4px;
`;
