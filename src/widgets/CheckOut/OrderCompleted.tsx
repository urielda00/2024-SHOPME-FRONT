import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const OrderCompleted = () => {
	return (
		<Box>
			<Box sx={childContainer1}>
				<h1>We Received Your Order!</h1>
				<h3>Order Confirmation Has Sent To Your Email.</h3>
				(Style will be added in the future )
				<Link to='/' style={{ color: 'var(--black)' }}>
					Return To Home Page
				</Link>
			</Box>
		</Box>
	);
};

export default OrderCompleted;

// Style
const childContainer1: React.CSSProperties = {
	width: 'var(--width)',
	display: 'flex',
	height: '380px',
	marginTop: '20px',
	alignItems: 'center',
	flexDirection: 'column',
};
