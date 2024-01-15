import React from 'react';
import { Box } from '@mui/material';
import { containerStyle } from '../style/container';
import Forgot from '../widgets/Forgot&ResetPass/Forgot';

const ForgotPass: React.FunctionComponent = () => {
	return (
		<Box sx={{ ...containerStyle, backgroundColor: `var(--containerWhiteBackground)` }}>
			<Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex' } }}>
				<Forgot />
			</Box>
		</Box>
	);
};
export default ForgotPass;
