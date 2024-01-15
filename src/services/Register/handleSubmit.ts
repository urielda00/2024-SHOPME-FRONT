import axios from 'axios';

export interface FormValues {
	email: string;
	lastName: string;
	userName: string;
	password: string;
	firstName: string;
	verifyPass: string;
	phoneNumber: number;
};

export const registerSubmit = async (data: FormValues) => {
	try {
		const response = await axios.post(`${process.env.BASE_BACK_URL}/auth/register`, data);
		return { success: true, data: response.data };
	} catch (error: any) {
		return { success: false, error: error.response?.data.message || error.message };
	}
};
