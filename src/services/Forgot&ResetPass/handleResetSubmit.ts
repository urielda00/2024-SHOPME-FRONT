import axios from 'axios';
import { useParams } from 'react-router-dom';
import displayError from '../../utils/Errors/logErrors';
import { FormResetValues } from '../../widgets/Forgot&ResetPass/Reset';

const onResetSubmit = async (FormData: FormResetValues) => {
	const param = useParams();
	const url = `${process.env.BASE_BACK_URL}/resetPass/reset/${param.id}/${param.token}`;

	try {
		await axios.post(url, { password: FormData.password });
		setTimeout(() => window.location.replace('/login'), 1000);
		alert('Your Password has been updated successfully');
	} catch (error: any) {
		alert(error.response.data.message);
		displayError(error, 'onSubmit');
	}
};

export default onResetSubmit;
