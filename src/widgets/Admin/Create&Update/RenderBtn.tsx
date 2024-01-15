import { Button } from '@mui/material';

const RenderBtn = (step: any, nextStep: any, isValid: boolean, isDirty: boolean) => {
	if (step > 4) {
		return undefined;
	} else if (step === 4) {
		return (
			<Button type='submit' fullWidth variant='contained' id='submitBtn' disabled={!isValid} sx={btnStyle}>
				Create New Item
			</Button>
		);
	} else {
		return (
			<Button type='button' fullWidth variant='contained' id='submitBtn' onClick={nextStep} disabled={!isDirty || !isValid} sx={btnStyle}>
				Next
			</Button>
		);
	}
};

export default RenderBtn;

const btnStyle = {
	mt: 3,
	bgcolor: 'success.main',
	':hover': { backgroundColor: '#5F8D4E' },
};
