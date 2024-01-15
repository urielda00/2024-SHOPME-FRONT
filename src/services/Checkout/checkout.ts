import axios from 'axios';

export const createOrderAPI = (address: string, products: any, userName: string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/order/createOrder`, {
			userName,
			address,
			products,
		})
		.then((res) => {
			console.log('res:', res.data);
		})
		.catch((error) => {
			console.log('error in addToCartAPI:', error);
		});
};
