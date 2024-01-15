import axios from 'axios';
import displayError from '../../utils/Errors/logErrors';
import { ForgerFormValues } from '../../hooks/useForgetPass';

const handleResetSubmit = async (formData: ForgerFormValues, setSentMail: any) => {
	const url = `${process.env.BASE_BACK_URL}/resetPass/`;

	try {
		await axios.post(url, { email: formData.email });
		setSentMail(true);
	} catch (error) {
		setSentMail(false);
		displayError(error, 'handleResetSubmit');
	}
};

export default handleResetSubmit;
