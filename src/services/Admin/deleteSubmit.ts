import axios from 'axios';

const handleDeleteSubmit = async (e: any, id: string) => {
	e.preventDefault();

	try {
		await axios.post(`${process.env.BASE_BACK_URL}/product/deleteProduct`, {
			id,
		});

		alert('success');
	} catch (error) {
		alert('err');
	}
};

export default handleDeleteSubmit;
