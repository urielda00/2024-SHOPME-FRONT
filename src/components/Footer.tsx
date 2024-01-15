import React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';

function Copyright() {
	return (
		<Mui.Box sx={{ color: 'grey', textAlign: 'center' }}>
			{'Copyright © '}
			<Link color='inherit' to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
				SHOPME
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Mui.Box>
	);
}

const Footer: React.FunctionComponent = () => {
	return (
		<Mui.Box sx={container}>
			<Mui.Box component='footer' sx={outerContainer}>
				<Mui.Container maxWidth='sm'>
					<Mui.Typography variant='body1'>Here is the sticky footer</Mui.Typography>
					<Copyright />
				</Mui.Container>
			</Mui.Box>
		</Mui.Box>
	);
};

export default Footer;

const outerContainer = { py: 4, backgroundColor: 'var(--white)', textAlign: 'center' };
const container = {
	bottom: '1px',
	display: 'flex',
	minHeight: '100px',
	flexDirection: 'column',
};
