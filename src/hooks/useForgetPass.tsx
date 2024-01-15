import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import handleResetSubmit from '../services/Forgot&ResetPass/handleSubmit';

export interface ForgerFormValues {
	email: string;
}

const useForgotPass = () => {
	// State
	const [sentMail, setSentMail] = useState<boolean>(false);
	const [captchaVerified, setCaptchaVerified] = useState(false);

	const onCaptchaChange = () => setCaptchaVerified(true);

	// Form Hook
	const form = useForm<ForgerFormValues>({ mode: 'onChange' });
	const { register, handleSubmit, formState, reset } = form;
	const { errors, isDirty, isValid, isSubmitSuccessful } = formState;

	const onSubmit = async (formData: ForgerFormValues) => {
		await handleResetSubmit(formData, setSentMail);
	};

	useEffect(() => {
		setCaptchaVerified(true);
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	return {
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
	};
};

export default useForgotPass;
