import axios from 'axios';
import displayError from '../../utils/Errors/logErrors';

export const incrementCartAPI = (item: any, userName: string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/cart/incrementQuantity`, {
			userName,
			item,
		})
		.catch((error) => {
			displayError(error, 'incrementCartAPI');
		});
};
