import axios from 'axios';
import displayError from '../../utils/Errors/logErrors';

export const resetCartAPI = (userName: string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/cart/resetCart`, {
			userName,
		})
		.catch((error) => {
			displayError(error, 'resetCartAPI');
		});
};
