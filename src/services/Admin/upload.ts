import axios from 'axios';
import { SubmitProps } from '../../interfaces/admin.interface';

const uploadImg = async (formData: SubmitProps) => {
	const url = `${process.env.BASE_BACK_URL}/product/createProduct`;
	const content = { headers: { 'Content-Type': 'multipart/form-data' } };
	try {
		const response = await axios.post(url, formData, content);
		return { success: true, response };
	} catch (error) {
		return { success: false, error };
	}
};

export default uploadImg;
