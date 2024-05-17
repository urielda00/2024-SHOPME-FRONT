import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as types from '../interfaces/admin.interface';
import SubmitFunc from '../widgets/Admin/Create&Update/SubmitFunc';

const useCreateUpdate = () => {
	const navigate = useNavigate();

	const [step, setStep] = useState(1);
	const [image1, setImage1] = useState<any>(null);
	const [image2, setImage2] = useState<any>(null);
	const [image3, setImage3] = useState<any>(null);
	const [image4, setImage4] = useState<any>(null);

	const nextStep = () => setStep((prev) => prev + 1);
	const prevStep = () => setStep((prev) => prev - 1);

	// UseForm Hook:
	const form = useForm<types.CreateFormValues>({ mode: 'onChange' });
	const { register, handleSubmit, formState, watch } = form;
	const { errors, isValid, isDirty } = formState;

	const isImage1 = watch('image1');
	const isImage2 = watch('image2');
	const isImage3 = watch('image3');
	const isImage4 = watch('image4');

	const image1Length = isImage1?.length;
	const image2Length = isImage2?.length;
	const image3Length = isImage3?.length;
	const image4Length = isImage4?.length;

	function changeState(newValue: any, image: string): void {
		switch (image) {
			case 'image1':
				setImage1(newValue);
				break;
			case 'image2':
				setImage2(newValue);
				break;
			case 'image3':
				setImage3(newValue);
				break;
			case 'image4':
				setImage4(newValue);
		}
	}

	const onSubmit: any = async (data: types.CreateFormValues, isUpdate: boolean) => {
		if (isUpdate) {
			console.log('the path not completed yet.');
			SubmitFunc(image1, image2, image3, image4, data);
			navigate('/');
		} else {
			SubmitFunc(image1, image2, image3, image4, data);
		}
	};

	return {
		step,
		form,
		watch,
		image1,
		image2,
		image3,
		image4,
		errors,
		setStep,
		isValid,
		isDirty,
		isImage1,
		isImage2,
		isImage3,
		isImage4,
		register,
		nextStep,
		prevStep,
		setImage1,
		setImage2,
		setImage3,
		setImage4,
		formState,
		onSubmit,
		changeState,
		handleSubmit,
		image1Length,
		image2Length,
		image3Length,
		image4Length,
	};
};

export default useCreateUpdate;
