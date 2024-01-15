import axios from 'axios';
import displayError from '../../utils/Errors/logErrors';


export const removeItemAPI = (item:any, userName:string) => {
	axios
		.post(`${process.env.BASE_BACK_URL}/cart/removeItem`, {
			userName,
			item,
		})
		.catch((error) => {
			displayError(error, 'removeItemAPI');
		});
};
