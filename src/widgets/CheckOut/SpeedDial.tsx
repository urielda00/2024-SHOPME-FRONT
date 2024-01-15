import * as Mui from '@mui/material';

import Delivery from './Delivery';
import Purchase from './Purchase';
import CartDisplay from './CartDisplay';
import OrderCompleted from './OrderCompleted';
import useCheckout from '../../hooks/useCheckout';
import * as style from '../../style/Checkout/SpeedDial';

const SpeedDialCheckout = () => {
	const {
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
	} = useCheckout();

	return (
		<Mui.Box sx={style.containerStyle}>
			<Mui.Box sx={{ width: 'var(--width)' }}>
				<Mui.Stepper nonLinear activeStep={activeStep}>
					{steps.map((label, index) => (
						<Mui.Step key={label} completed={completed[index]}>
							<Mui.StepButton color='inherit' onClick={handleStep(index)}>
								{label}
							</Mui.StepButton>
						</Mui.Step>
					))}
				</Mui.Stepper>

				<Mui.Box sx={{ overflow: 'hidden' }}>
					{allStepsCompleted() ? (
						<OrderCompleted />
					) : (
						<Mui.Box>
							<Mui.Box sx={style.stepsContainerStyle}>
								{activeStep === 0 && <CartDisplay />}
								{activeStep === 1 && <Delivery />}
								{activeStep === 2 && <Purchase />}
							</Mui.Box>

							{activeStep === 0 && <Mui.Box>Total Price: {totalPrice}$</Mui.Box>}
							<Mui.Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
								<Mui.Button color='inherit' disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
									Back
								</Mui.Button>
								<Mui.Box sx={{ flex: '1 1 auto' }} />

								{completedSteps() === steps.length - 1 ? (
									<Mui.Button onClick={handleCompleteWithAction} sx={{ color: 'inherit' }}>
										Finish
									</Mui.Button>
								) : (
									<Mui.Button onClick={handleComplete} sx={{ color: 'inherit' }}>
										Next
									</Mui.Button>
								)}
							</Mui.Box>
						</Mui.Box>
					)}
				</Mui.Box>
			</Mui.Box>
		</Mui.Box>
	);
};

export default SpeedDialCheckout;
