import * as React from 'react';
import Stack from '@mui/material/Stack';
import * as style from '../../style/Login/Login';
import { errorLogged } from '../../features/userSlice';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const ErrorMessages = () => {
	const dispatch = useAppDispatch();
	const { loginError } = useAppSelector((state) => state.user);

	setTimeout(() => {
		dispatch(errorLogged(''));
	}, 7000);

	return (
		<Stack spacing={2} sx={style.ErrorContainerStyle}>
			{loginError ? (
				<Alert severity='error' sx={{ width: '350px' }}>
					{loginError}
				</Alert>
			) : (
				<div hidden></div>
			)}
		</Stack>
	);
};
export default ErrorMessages;
