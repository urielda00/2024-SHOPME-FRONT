import React from 'react';
import { Box } from '@mui/material';
import back1 from '../assets/construction.jpg';

// Temporary component that indicates that the page is not available and under construction
const Construction = () => {
	return (
		<Box sx={containerStyle}>
			<Box sx={initialContainerStyle}></Box>
			<h1 style={h1Style}>This Page Is Under Construction</h1>
		</Box>
	);
};

export default Construction;

const containerStyle: React.CSSProperties = {
	width: '100%',
	height: '70vh',
	flexDirection: 'column',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

const initialContainerStyle: React.CSSProperties = {
	height: '60vh',
	minWidth: '400px',
	backgroundSize: 'contain',
	backgroundRepeat: ' no-repeat',
	backgroundImage: `url(${back1})`,
};

const h1Style: React.CSSProperties = {
	fontSize: '30px',
	fontWeight: 'bold',
	textAlign: 'center',
	textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
};
