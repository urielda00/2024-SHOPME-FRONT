import * as React from 'react';
import { Typography } from '@mui/material';
import DeliveryFormData from './DynamicTField';

const Delivery = () => {
	return (
		<React.Fragment>
			<Typography variant='h6' gutterBottom>
				Shipping address
			</Typography>
			{DeliveryFormData()}
		</React.Fragment>
	);
};

export default Delivery;
