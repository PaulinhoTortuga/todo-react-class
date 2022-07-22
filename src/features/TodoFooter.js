import styled from 'styled-components';
import { Button, ButtonGroup } from '@mui/material';

export default function TodoFooter({ todoListLength }) {
	return (
		<Footer>
			<Span>{todoListLength} items left</Span>
			<ButtonGroup variant="contained">
				<Button>All</Button>
				<Button>Active</Button>
				<Button>Completed</Button>
			</ButtonGroup>
			<Button variant="contained">Finish all</Button>
			<Button variant="contained">Clear completed</Button>
		</Footer>
	);
}

const Footer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	background-color: #333;
	margin: 5px 0;
	padding: 10px;
	border-radius: 4px;
`;

const Span = styled.span`
	vertical-align: center;
	margin: auto 0;
	background-color: #fff;
	padding: 6px;
	border-radius: 4px;
`;
