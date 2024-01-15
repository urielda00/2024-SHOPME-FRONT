import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import { registerSubmit } from '../services/Register/handleSubmit';

type FormValues = {
	firstName: string;
	lastName: string;
	userName: string;
	email: string;
	password: string;
	verifyPass: string;
	phoneNumber: number;
};

const useRegister = () => {
	// State:
	const [passwordEye, setPasswordEye] = useState(false);
	const [fetchErrors, setFetchErrors] = useState(false);
	const [openPassHelp, setOpenPassHelp] = useState(false);
	const [successFetch, setSuccessFetch] = useState(false);
	const [captchaVerified, setCaptchaVerified] = useState(false);
	const [passwordEyeVerify, setPasswordEyeVerify] = useState(false);

	// SetState
	const onCaptchaChange = () => setCaptchaVerified(true);
	const handleChangeEyePassword = () => setPasswordEye(!passwordEye);
	const handleChangeEyeVerify = () => setPasswordEyeVerify(!passwordEyeVerify);

	// UseForm
	const form = useForm<FormValues>({ mode: 'onChange' });
	const { register, handleSubmit, formState, watch, reset } = form;
	const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

	const password = watch('password');

	const onSubmit = async (data: FormValues) => {
		const response = await registerSubmit(data);
		if (response.success) {
			setFetchErrors(false);
			setSuccessFetch(true);
			setTimeout(() => window.location.replace(`${process.env.FRONT_URL}/login`), 2000);
		} else {
			setFetchErrors(true);
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			setTimeout(() => {
				setFetchErrors(false);
			}, 4000);
		}
	}, [isSubmitSuccessful, reset, fetchErrors]);

	let testArr = [];

	if (errors.password) {
		testArr.push(errors.password.message);
	} else {
		testArr = [];
	}



	return {
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
	};
};

export default useRegister;
