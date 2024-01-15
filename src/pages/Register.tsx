import React from 'react';
import { Box } from '@mui/material';
import RegisterForm from '../widgets/Register/RegisterForm';

const Register: React.FunctionComponent = () => {
	return (
		<Box sx={backgroundStyle}>
			<RegisterForm />
		</Box>
	);
};
export default Register;

const backgroundStyle = {
	display: 'flex',
	alignItems: 'center',
	width: 'var(--width)',
	justifyContent: 'center',
	height: { md: '88vh', sm: '88vh', xs: '110vh' },
	backgroundColor: 'var(--containerWhiteBackground)',
};
