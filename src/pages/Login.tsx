import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../widgets/Login/LoginForm';
import { containerStyle } from '../style/container';

const Login: React.FunctionComponent = () => {
	return (
		<Box sx={{ backgroundColor: 'var(--containerWhiteBackground)', ...containerStyle }}>
				<LoginForm />
		</Box>
	);
};

export default Login;
