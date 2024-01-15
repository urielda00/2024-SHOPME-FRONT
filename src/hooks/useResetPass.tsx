import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export interface FormResetValues {
	password: string;
	verifyPass: string;
}

const useResetPass = () => {
	// State
	const [validUrl, setValidUrl] = useState(false);
	const [passwordEye, setPasswordEye] = useState(false);
	const [openPassHelp, setOpenPassHelp] = useState(false);
	const [passwordEyeVerify, setPasswordEyeVerify] = useState(false);

	// Form Hook
	const form = useForm<FormResetValues>({ mode: 'onChange' });
	const { register, handleSubmit, formState, watch, reset } = form;
	const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

	// Set state
	const handleChangeEyePassword = () => setPasswordEye(!passwordEye);
	const handleChangeEyeVerify = () => setPasswordEyeVerify(!passwordEyeVerify);

	const password = watch('password');

	const param = useParams();
	const url = `${process.env.BASE_BACK_URL}/resetPass/reset/${param.id}/${param.token}`;

	useEffect(() => {
		const verifyUrl = async () => {
			try {
				await axios.get(url);
				setValidUrl(true);
			} catch (error) {
				setValidUrl(false);
			}
		};
		verifyUrl();
	}, [param, url]);

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	let testArr = [];

	if (errors.password) {
		testArr.push(errors.password.message);
	} else {
		testArr = [];
	}

	return {
		watch,
		reset,
		errors,
		testArr,
		isDirty,
		isValid,
		validUrl,
		register,
		password,
		formState,
		setValidUrl,
		passwordEye,
		openPassHelp,
		handleSubmit,
		setPasswordEye,
		setOpenPassHelp,
		passwordEyeVerify,
		isSubmitSuccessful,
		setPasswordEyeVerify,
		handleChangeEyeVerify,
		handleChangeEyePassword,
	};
};

export default useResetPass;
