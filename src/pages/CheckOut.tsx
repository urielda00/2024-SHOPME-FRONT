import React from 'react';
import { Box } from '@mui/material';
import { containerStyle } from '../style/container';
import SpeedDialCheckout from '../widgets/CheckOut/SpeedDial';

const CheckOut: React.FunctionComponent = () => {
	return (
		<Box sx={{ ...containerStyle, backgroundColor: `var(--containerPinkBackground)` }}>
			<SpeedDialCheckout />
		</Box>
	);
};
export default CheckOut;
