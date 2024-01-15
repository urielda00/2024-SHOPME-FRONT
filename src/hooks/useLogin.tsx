import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { useNavigate } from 'react-router-dom';
import { setUserCart } from '../features/cartSlice';
import * as UserActions from '../features/userSlice';
import { FormValues } from '../services/Login/handleSubmit';

import { loginSubmit } from '../services/Login/handleSubmit';

const useLogin = () => {
	// STATE
	const [passwordEye, setPasswordEye] = useState(false);
	const [captchaVerified, setCaptchaVerified] = useState(false);

	// FORM HOOK
	const form = useForm<FormValues>({ mode: 'onChange' });
	const { register, handleSubmit, formState, reset } = form;
	const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

	// CONFIGURATION
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onCaptchaChange = () => setCaptchaVerified(true);
	const handleChangeEyePassword = () => setPasswordEye(!passwordEye);

	// Submit:
	const setLocalStorage = (userName: string, admin: boolean): void => {
		window.sessionStorage.setItem('isLogged', 'true');
		if (admin) window.sessionStorage.setItem('userName', userName);
	};
	const onSubmit = async (data: FormValues) => {
		const response = await loginSubmit(data);
		if (response.success) {
			const { totalPrice, cart } = response.data;

			if (response.data.admin) {
				setLocalStorage(response.data.userName, true);
				dispatch(UserActions.isAdmin(response.data.user_id));
			} else {
				setLocalStorage(response.data.userName, false);
				dispatch(UserActions.logged(response.data.user_id));
			}

			dispatch(
				setUserCart({
					cart,
					totalPrice,
					totalItemsInCart: response.data.totalQuantity,
				})
			);

			navigate('/');

			setTimeout(() => {
				navigate(0);
			}, 1000);
		} else {
			dispatch(UserActions.errorLogged(response.error));
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return {
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
	};
};

export default useLogin;
