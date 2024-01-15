import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { FirstProps } from '../../interfaces/home.interface';

const Home1: FC<FirstProps> = ({ linkStyle, large }) => {
	return (
		<>
			{large && (
				<Box style={textContainerStyle}>
					<h1 style={textStyle}>Feel The World Of A New Tech!</h1>
				</Box>
			)}
			<Link to='/productsList' style={linkStyle}>
				<Button variant='contained' size='large' style={button1}>
					Shop Now
				</Button>
			</Link>
		</>
	);
};

export default Home1;

// Only in large screen
const textContainerStyle: React.CSSProperties = {
	left: '68%',
	bottom: '25%',
	width: '260px',
	height: '60px',
	position: 'relative',
};

const textStyle: React.CSSProperties = {
	fontFamily: '"Indie Flower", cursive',
};

// Button Style
export const button1: React.CSSProperties = {
	width: 'var(--width)',
	height: '100%',
	backgroundColor: '#FC2947',
};
