import * as React from 'react';
import Stack from '@mui/material/Stack';
import { container } from './ErrorMessages';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SuccessMessage = () => {
	return (
		<Stack spacing={2} sx={container}>
			<Alert severity='success' sx={{ width: '400px' }}>
				Registration successful! Welcome aboard!
			</Alert>
		</Stack>
	);
};
export default SuccessMessage;
