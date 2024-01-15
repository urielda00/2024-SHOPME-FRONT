import uploadImg from '../../../services/Admin/upload';
import * as types from '../../../interfaces/admin.interface';

const SubmitFunc: types.SubmitProps = async (image1, image2, image3, image4, data) => {
	let formData: any = new FormData();
	formData.append('productName', data.productName);
	formData.append('shortDescription', data.shortDescription);
	formData.append('longDescription', data.longDescription);
	formData.append('quantity', data.quantity);
	formData.append('releaseYear', data.releaseYear);
	formData.append('brand', data.brand);
	formData.append('category', data.category);
	formData.append('company', data.company);
	formData.append('os', data.os);
	formData.append('price', data.price);
	formData.append('screenshot', image1);
	formData.append('screenshot2', image2);
	formData.append('screenshot3', image3);
	formData.append('screenshot4', image4);

	const res = await uploadImg(formData);
	if (res.success) {
		return res.response;
	} else {
		return res.error;
	}
};

export default SubmitFunc;
