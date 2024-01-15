import axios from 'axios';
import displayError from '../../utils/Errors/logErrors';

// Decrement if the quantity is more than 1:
export const decrementCartAPI1 = (item: any, userName: string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/cart/decrementQuantity1`, {
			userName,
			item,
		})
		.catch((error) => {
			displayError(error, 'decrementCartAPI1');
		});
};

// Decrement if the quantity is less than 1:
export const decrementCartAPI2 = (item: any, userName: string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/cart/decrementQuantity2`, {
			userName,
			item,
		})
		.catch((error) => {
			displayError(error, 'decrementCartAPI2');
		});
};
