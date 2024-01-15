import * as React from 'react';
import Stack from '@mui/material/Stack';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const ErrorMessages = ({ error }: any) => {
	return (
		<Stack spacing={2} sx={stackStyle}>
			{error ? (
				<Alert severity='error' sx={{ width: '350px' }}>
					{error}
				</Alert>
			) : (
				<div hidden></div>
			)}
		</Stack>
	);
};

export default ErrorMessages;

const stackStyle = {
	zIndex: 20,
	width: '10%',
	top: '120px',
	left: '20px',
	position: 'absolute',
};
