import React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

// Copyright component wrapped in React.memo
const Copyright = React.memo(() => (
	<Box sx={{ color: 'grey', textAlign: 'center' }}>
		{'Copyright © '}
		<Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
			SHOPME
		</Link>{' '}
		{new Date().getFullYear()}
		{'.'}
	</Box>
));

const Footer: React.FunctionComponent = () => {
	return (
		<Box sx={container}>
			<Box component='footer' sx={outerContainer}>
				<Container maxWidth='sm'>
					<Typography variant='body1'>Here is the sticky footer</Typography>
					<Copyright />
				</Container>
			</Box>
		</Box>
	);
};

export default Footer;

const outerContainer = {
	py: 4,
	backgroundColor: 'var(--white)',
	textAlign: 'center',
};

const container = {
	bottom: '1px',
	display: 'flex',
	minHeight: '100px',
	flexDirection: 'column',
};
