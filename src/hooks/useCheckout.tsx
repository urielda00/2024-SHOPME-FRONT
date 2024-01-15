import * as React from 'react';

import { placeOrder } from '../features/orderSlice';
import { deleteAllCart } from '../features/cartSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';

const userName = window.sessionStorage.getItem('userName');

const useCheckout = () => {
	const dispatch = useAppDispatch();
	const steps = ['Cart', 'Delivery', 'Payment '];
	const { totalPrice, cart } = useAppSelector((state) => state.allCart);
	const { isAddress } = useAppSelector((state) => state.address);

	// Component states:
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>({});

	// States manipulations:
	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === steps.length - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === steps.length;
	};

	const handleNext = () => {
		const newActiveStep = isLastStep() && !allStepsCompleted() ? steps.findIndex((step, i) => !(i in completed)) : activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step: number) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleCompleteWithAction = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		dispatch(placeOrder({ isAddress, cart, userName }));
		dispatch(deleteAllCart());
		handleNext();
	};
	return {
		steps,
		completed,
		totalPrice,
		handleStep,
		handleBack,
		handleNext,
		isLastStep,
		activeStep,
		setCompleted,
		setActiveStep,
		completedSteps,
		handleComplete,
		allStepsCompleted,
		handleCompleteWithAction,
	};
};

export default useCheckout;
