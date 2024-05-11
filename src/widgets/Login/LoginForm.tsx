import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import ErrorMessages from './ErrorMessages';
import ReCAPTCHA from 'react-google-recaptcha';
import * as style from '../../style/Login/Login';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SITE_KEY = process.env.CAPTCHA_SITE_V2_KEY || '';

const LoginForm = () => {
	const {
		errors,
		isDirty,
		isValid,
		register,
		navigate,
		onSubmit,
		passwordEye,
		handleSubmit,
		setPasswordEye,
		captchaVerified,
		onCaptchaChange,
		isSubmitSuccessful,
		setCaptchaVerified,
		handleChangeEyePassword,
	} = useLogin();

	return (
		<Mui.Container sx={style.containerStyle} maxWidth='sm' component='main'>
			<ErrorMessages />

			<Mui.Box sx={style.insideContainerStyle}>
				<Mui.Avatar sx={{ m: 2, bgcolor: 'success.main' }}>
					<PersonIcon />
				</Mui.Avatar>

				<Mui.Typography sx={{ mb: -2 }} component='h1' variant='h5'>
					Sign In
				</Mui.Typography>

				<Mui.Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
					<Mui.Grid container spacing={2}>
						<Mui.Grid item xs={12} sm={12}>
							<Mui.TextField
								fullWidth
								id='userName'
								label='User Name'
								type='text'
								{...register('userName', {
									required: 'User Name Is Required',
								})}
								error={!!errors.userName}
								helperText={errors.userName?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={12}>
							<Mui.TextField
								fullWidth
								label='Password'
								id='password'
								autoComplete='new-password'
								type={passwordEye ? 'text' : 'password'}
								InputProps={{
									// <-- This is where the toggle button is added.
									endAdornment: (
										<Mui.InputAdornment position='end'>
											<Mui.IconButton aria-label='toggle password visibility' onClick={handleChangeEyePassword}>
												{passwordEye ? <VisibilityIcon /> : <VisibilityOffIcon />}
											</Mui.IconButton>
										</Mui.InputAdornment>
									),
								}}
								{...register('password', {
									required: 'Password Is Required',
								})}
								error={!!errors.password}
								helperText={errors.password?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={12}>
							<ReCAPTCHA id='recaptcha' sitekey={SITE_KEY} onChange={onCaptchaChange} />
						</Mui.Grid>
					</Mui.Grid>

					<Mui.Button
						type='submit'
						fullWidth
						variant='contained'
						id='submitBtn'
						//|| !captchaVerified
						disabled={!isDirty || !isValid  }
						sx={{
							mt: 3,
							bgcolor: 'success.main',
							':hover': { backgroundColor: '#5F8D4E' },
						}}
					>
						Sign In
					</Mui.Button>
					<Mui.Grid container justifyContent='flex-end'>
						<Mui.Grid sx={{ mt: 7 }} item xs={12} sm={6}>
							<Link to='/forgetPass'>Forgot password?</Link>
						</Mui.Grid>
						<Mui.Grid sx={{ mt: 7, mr: -5 }} item xs={12} sm={6}>
							<Link to='/register'>Don't have an account? Sign Up</Link>
						</Mui.Grid>
					</Mui.Grid>
				</Mui.Box>
			</Mui.Box>
		</Mui.Container>
	);
};

export default LoginForm;
