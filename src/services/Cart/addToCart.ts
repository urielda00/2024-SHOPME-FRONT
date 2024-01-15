import axios from 'axios';
import displayError from '../../utils/Errors/logErrors';

// Add item to the cart:
export const addToCartAPI = (itemData: any, userName: string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/'cart'/addToCart`, {
			userName,
			itemData,
		})
		.catch((error) => {
			displayError(error, 'addToCartAPI');
		});
};

// Update item that already in the cart:
export const updateInAddToCartAPI = (itemId: string, userName: string, totalPrice: number) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/'cart'/updateInAddToCart`, {
			userName,
			itemId,
			totalPrice,
		})
		.catch((error) => {
			displayError(error, 'updateInAddToCartAPI');
		});
};
