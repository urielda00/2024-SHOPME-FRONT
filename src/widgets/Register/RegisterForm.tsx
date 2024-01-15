import DialogIs from './Dialog';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import * as Regex from '../../utils/Regex';
import ErrorMessages from './ErrorMessages';
import SuccessMessage from './SuccessMessage';
import ReCAPTCHA from 'react-google-recaptcha';
import useRegister from '../../hooks/useRegister';

// Icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const SITE_KEY = process.env.CAPTCHA_SITE_V2_KEY || '';

const RegisterForm = () => {
	const {
		reset,
		errors,
		isDirty,
		isValid,
		testArr,
		onSubmit,
		password,
		register,
		passwordEye,
		fetchErrors,
		handleSubmit,
		openPassHelp,
		successFetch,
		onCaptchaChange,
		captchaVerified,
		setOpenPassHelp,
		passwordEyeVerify,
		handleChangeEyeVerify,
		handleChangeEyePassword,
	} = useRegister();

	return (
		<Mui.Container sx={containerStyle} maxWidth='sm' component='main'>
			{successFetch ? <SuccessMessage /> : <div hidden></div>}

			<Mui.Box sx={insideContainerStyle}>
				<Mui.Avatar sx={{ m: 0.5, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Mui.Avatar>

				<Mui.Typography sx={{ mb: -2 }} component='h1' variant='h5'>
					Sign up
				</Mui.Typography>

				<Mui.Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
					<Mui.Grid container spacing={2}>
						<Mui.Grid item xs={12} sm={6}>
							<Mui.TextField
								autoComplete='given-name'
								fullWidth
								label='First Name'
								type='text'
								{...register('firstName', {
									required: 'First Name Is Required',
								})}
								error={!!errors.firstName}
								helperText={errors.firstName?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={6}>
							<Mui.TextField
								fullWidth
								label='Last Name'
								autoComplete='family-name'
								type='text'
								{...register('lastName', { required: 'Last Name Is Required' })}
								error={!!errors.lastName}
								helperText={errors.lastName?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={6}>
							<Mui.TextField
								fullWidth
								label='Email Address'
								autoComplete='email'
								type='email'
								{...register('email', {
									required: 'Email Is Required',
									pattern: {
										value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
										message: 'Invalid Email format',
									},
									validate: {
										emailAvailable: async (fieldValue) => {
											while (fieldValue.length >= 3 && fieldValue.includes('@')) {
												const res = await fetch(`${process.env.BASE_BACK_URL}/auth/checkIfExist/${fieldValue}`);
												const data = await res.json();
												return data.length === 0 || 'Email Already Exist';
											}
										},
									},
								})}
								error={!!errors.email}
								helperText={errors.email?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={6}>
							<Mui.TextField
								fullWidth
								label='User Name'
								type='text'
								{...register('userName', {
									required: 'User Name Is Required',
									validate: {
										userAvailable: async (fieldValue) => {
											while (fieldValue.length >= 4) {
												const res = await fetch(`${process.env.BASE_BACK_URL}/auth/checkIfExist/${fieldValue}`);
												const data = await res.json();
												return data.length === 0 || 'User Name Already Exist';
											}
										},
										has6Characters: (value) => Regex.min4Rjx.test(value) || 'Must have at least 4 Characters',
									},
								})}
								error={!!errors.userName}
								helperText={errors.userName?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={6}>
							<Mui.TextField
								fullWidth
								label='Password'
								type={passwordEye ? 'text' : 'password'}
								InputProps={{
									// <-- This is where the toggle button is added.
									endAdornment: (
										<Mui.InputAdornment position='end'>
											<Mui.Tooltip title='More Info'>
												<Mui.IconButton
													aria-label='toggle password visibility'
													onClick={() => {
														setOpenPassHelp(true);
														setTimeout(() => {
															setOpenPassHelp(false);
														}, 1000);
													}}
												>
													<HelpOutlineIcon />
												</Mui.IconButton>
											</Mui.Tooltip>
											<Mui.Tooltip title='Show Password'>
												<Mui.IconButton aria-label='toggle password visibility' onClick={handleChangeEyePassword}>
													{passwordEye ? <VisibilityIcon /> : <VisibilityOffIcon />}
												</Mui.IconButton>
											</Mui.Tooltip>
										</Mui.InputAdornment>
									),
								}}
								autoComplete='new-password'
								{...register('password', {
									required: 'Password Is Required',
									validate: {
										hasUpperCase: (value) => Regex.upperCaseRjx.test(value) || 'Password Must have at least 1 UpperCase',
										hasLowerCase: (value) => Regex.lowerCaseRjx.test(value) || 'Password Must have at least 1 LowerCase',
										hasDigitCase: (value) => Regex.digitRjx.test(value) || 'Password Must have at least 1 Digit',
										has6Characters: (value) => Regex.min4Rjx.test(value) || 'Password Must have at least 4 Characters',
									},
								})}
								error={!!errors.password}
							/>

							<DialogIs open={openPassHelp} />
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={6}>
							<Mui.TextField
								fullWidth
								label='Verify Password'
								type={passwordEyeVerify ? 'text' : 'password'}
								InputProps={{
									// <-- This is where the toggle button is added.
									endAdornment: (
										<Mui.InputAdornment position='end'>
											<Mui.Tooltip title='More Info'>
												<Mui.IconButton aria-label='toggle password visibility' onClick={handleChangeEyeVerify}>
													{passwordEyeVerify ? <VisibilityIcon /> : <VisibilityOffIcon />}
												</Mui.IconButton>
											</Mui.Tooltip>
										</Mui.InputAdornment>
									),
								}}
								{...register('verifyPass', {
									required: 'Verify Password Is Required',
									validate: (value) => {
										return value === password || 'The passwords do not match';
									},
								})}
								error={!!errors.verifyPass}
								helperText={errors.verifyPass?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={6.89}>
							<Mui.TextField
								fullWidth
								label='Phone Number'
								type='tel'
								autoComplete='phone'
								{...register('phoneNumber', {
									required: 'Phone Number Is Required',
								})}
								error={!!errors.phoneNumber}
								helperText={errors.phoneNumber?.message}
							/>
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={4}>
							<ReCAPTCHA sitekey={SITE_KEY} onChange={onCaptchaChange} style={{ transform: 'scale(0.75)', transformOrigin: '0 0' }} />
						</Mui.Grid>
					</Mui.Grid>
					<Mui.Button
						type='submit'
						fullWidth
						variant='contained'
						disabled={!isDirty || !isValid || !captchaVerified}
						sx={{
							mt: 3,
							backgroundColor: '#CD5888',
							':hover': { backgroundColor: '#FF2171' },
						}}
					>
						Sign Up
					</Mui.Button>

					<Mui.Button
						type='button'
						fullWidth
						onClick={() => reset()}
						variant='contained'
						sx={{
							mt: 1.5,
							mb: 2,
							backgroundColor: '#7895CB',
							':hover': { backgroundColor: '#4A55A2' },
						}}
					>
						Reset Form
					</Mui.Button>

					<Mui.Grid container justifyContent='flex-end'>
						<Mui.Grid item>
							<Link to='/login'>Already have an account? Sign in</Link>
						</Mui.Grid>
					</Mui.Grid>
				</Mui.Box>

				{fetchErrors ? <ErrorMessages errors={'Internal Server Error, please try again later'} /> : <ErrorMessages errors={testArr} />}
			</Mui.Box>
		</Mui.Container>
	);
};

export default RegisterForm;

// Style
const containerStyle = {
	borderRadius: '10px',
	backgroundColor: 'var(--white)',
	height: { md: '620px', sm: '620px', xs: '900px' },
	boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

const insideContainerStyle: React.CSSProperties = {
	marginTop: 1,
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
};
