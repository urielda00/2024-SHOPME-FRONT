import React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import useForgotPass from '../../hooks/useForgetPass';
import * as style from '../../style/Forget&Reset/Style';

// Icons
import SecurityIcon from '@mui/icons-material/Security';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const siteKey = process.env.CAPTCHA_SITE_V2_KEY || '';

const Forgot = () => {
	const {
		form,
		reset,
		errors,
		isDirty,
		isValid,
		onSubmit,
		sentMail,
		register,
		formState,
		setSentMail,
		handleSubmit,
		onCaptchaChange,
		captchaVerified,
		setCaptchaVerified,
		isSubmitSuccessful,
	} = useForgotPass();

	return (
		<Mui.Container sx={style.containerForgetStyle} maxWidth='sm' component='main'>
			<Mui.Box sx={style.insideForgetContainerStyle}>
				{sentMail && (
					<Mui.Alert
						sx={{ position: 'absolute', top: '-70px', right: '20px' }}
						severity='success'
						variant='filled'
						onClose={() => {
							setSentMail(false);
						}}
					>
						Reset Link Has Sent To Your Email.
					</Mui.Alert>
				)}
				<Mui.Avatar sx={{ m: 2, bgcolor: 'error.main' }}>
					<SecurityIcon />
				</Mui.Avatar>

				<Mui.Typography sx={{ mb: -2 }} component='h1' variant='h5'>
					Forgot Password
				</Mui.Typography>

				<Mui.Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
					<Mui.Grid container spacing={2}>
						<Mui.Grid sx={{ position: 'relative' }} item xs={12} sm={12}>
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
												return data.length !== 0 || 'Email Dont Exist';
											}
										},
									},
								})}
								error={!!errors.email}
								helperText={errors.email?.message}
							/>
						</Mui.Grid>

						<Mui.Grid sx={{ ml: 8 }} item xs={12} sm={4}>
							<ReCAPTCHA sitekey={siteKey} onChange={onCaptchaChange} style={{ transform: 'scale(0.75)', transformOrigin: '0 0' }} />
						</Mui.Grid>
					</Mui.Grid>

					<Mui.Button
						type='submit'
						fullWidth
						variant='contained'
						disabled={!isDirty || !isValid || !captchaVerified}
						sx={{
							mt: 2,
							bgcolor: 'success.main',
							':hover': { backgroundColor: '#5F8D4E' },
						}}
					>
						Submit
					</Mui.Button>

					<Mui.Grid container justifyContent='flex-end'>
						<Mui.Grid sx={{ mt: 4, position: 'absolute', left: '5px', top: '-9px' }} item xs={12} sm={12}>
							<Link to='/login' style={{ textDecoration: 'none', color: 'var(--black)' }}>
								<KeyboardReturnIcon fontSize='medium' />
							</Link>
						</Mui.Grid>
					</Mui.Grid>
				</Mui.Box>
			</Mui.Box>
		</Mui.Container>
	);
};

export default Forgot;


