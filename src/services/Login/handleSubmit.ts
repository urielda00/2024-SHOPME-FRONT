import axios from 'axios';

export type FormValues = {
	userName: string;
	password: string;
};

export const loginSubmit = async (data: FormValues) => {
	const url = `${process.env.BASE_BACK_URL}/auth/login`;

	try {
		const response = await axios.post(url, data);
		return { success: true, data: response.data };
	} catch (error: any) {
		return { success: false, error: error.response?.data.message || error.message };
	}
};
