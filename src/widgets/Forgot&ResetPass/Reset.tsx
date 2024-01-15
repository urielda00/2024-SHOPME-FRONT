import * as Mui from '@mui/material';
import DialogIs from '../Register/Dialog';
import * as Regex from '../../utils/Regex';
import ErrorMessages from './ErrorMessages';
import useResetPass from '../../hooks/useResetPass';
import * as style from '../../style/Forget&Reset/Style';
import onResetSubmit from '../../services/Forgot&ResetPass/handleResetSubmit';

// Icons
import LockResetIcon from '@mui/icons-material/LockReset';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export interface FormResetValues {
	password: string;
	verifyPass: string;
}

const Reset = () => {
	const {
		errors,
		isValid,
		testArr,
		isDirty,
		password,
		register,
		passwordEye,
		openPassHelp,
		handleSubmit,
		setOpenPassHelp,
		passwordEyeVerify,
		handleChangeEyeVerify,
		handleChangeEyePassword,
	} = useResetPass();

	return (
		<Mui.Container sx={style.containerStyle} maxWidth='sm' component='main'>
			<Mui.Box sx={style.insideContainerStyle}>
				<Mui.Avatar sx={{ m: 2, bgcolor: 'error.main' }}>
					<LockResetIcon />
				</Mui.Avatar>

				<Mui.Typography sx={{ mb: -2 }} component='h1' variant='h5'>
					Set New Password
				</Mui.Typography>

				<Mui.Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onResetSubmit)}>
					<Mui.Grid container spacing={2}>
						<Mui.Grid sx={{ position: 'relative' }} item xs={12} sm={12}>
							<Mui.TextField
								fullWidth
								label='New Password'
								type={passwordEye ? 'text' : 'password'}
								InputProps={{
									// <-- This is where the toggle button is added.
									endAdornment: (
										<Mui.InputAdornment position='end'>
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
											<Mui.IconButton aria-label='toggle password visibility' onClick={handleChangeEyePassword}>
												{passwordEyeVerify ? <VisibilityIcon /> : <VisibilityOffIcon />}
											</Mui.IconButton>
										</Mui.InputAdornment>
									),
								}}
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
								helperText={errors.password?.message}
							/>
							<DialogIs open={openPassHelp} />
						</Mui.Grid>

						<Mui.Grid item xs={12} sm={12}>
							<Mui.TextField
								fullWidth
								label='Verify Password'
								type={passwordEyeVerify ? 'text' : 'password'}
								InputProps={{
									// <-- This is where the toggle button is added.
									endAdornment: (
										<Mui.InputAdornment position='end'>
											<Mui.IconButton aria-label='toggle password visibility' onClick={handleChangeEyeVerify}>
												{passwordEyeVerify ? <VisibilityIcon /> : <VisibilityOffIcon />}
											</Mui.IconButton>
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
					</Mui.Grid>

					<Mui.Button
						type='submit'
						fullWidth
						variant='contained'
						disabled={!isDirty || !isValid}
						sx={{
							mt: 2,
							bgcolor: 'success.main',
							':hover': { backgroundColor: '#5F8D4E' },
						}}
					>
						Submit
					</Mui.Button>
					<Mui.Grid container justifyContent='flex-end'>
						<Mui.Grid sx={{ mt: 4, position: 'absolute', left: '5px', top: '-9px' }} item xs={12} sm={12}></Mui.Grid>
					</Mui.Grid>
				</Mui.Box>
			</Mui.Box>
			<ErrorMessages errors={testArr} />
		</Mui.Container>
	);
};

export default Reset;

