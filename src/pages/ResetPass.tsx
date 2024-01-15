import React from 'react';
import { Box } from '@mui/material';
import { containerStyle } from '../style/container';
import Reset from '../widgets/Forgot&ResetPass/Reset';

const ResetPass: React.FunctionComponent = () => {
	return (
		<Box sx={{ backgroundColor: 'var(--containerWhiteBackground)', ...containerStyle }}>
			<Reset />
		</Box>
	);
};

export default ResetPass;
