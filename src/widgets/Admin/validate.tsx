import { InputAdornment } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const baseMaxStr = 'Max Length is';
const baseMinStr = 'Minimum Length is';

const min = {
	four: {
		value: 4,
		message: `${baseMinStr} 4`,
	},
	two: {
		value: 2,
		message: `${baseMinStr} 2`,
	},
};

const max = {
	message: `${baseMaxStr} 10`,
};

export const validateShortObj = {
	minLength: min.four,
	maxLength: {
		value: 50,
		message: `${baseMaxStr} 50`,
	},
};

export const validateProductNameObj = {
	minLength: min.two,
	maxLength: {
		value: 20,
		message: `${baseMaxStr} 20`,
	},
};

export const validateLongObj = {
	minLength: min.four,
	maxLength: {
		value: 150,
		message: `${baseMaxStr} 150`,
	},
};

export const companyObj = {
	minLength: min.two,
	maxLength: {
		value: 20,
		message: `${baseMaxStr} 20`,
	},
};

export const brandObj = {
	minLength: min.two,
	maxLength: {
		value: 10,
		message: max.message,
	},
};

export const osObj = {
	minLength: min.two,
	maxLength: {
		value: 10,
		message: max.message,
	},
};

export const categoryObj = {
	minLength: min.two,
	maxLength: {
		value: 10,
		message: max.message,
	},
};

export const required = {
	required: 'Required',
	valueAsNumber: true,
};

export const priceInputProps = {
	endAdornment: (
		<InputAdornment position='end'>
			<AttachMoneyIcon />
		</InputAdornment>
	),
};

export const validateID = {
	required: 'Required',
	minLength: min.four,
	maxLength: {
		value: 150,
		message: `${baseMaxStr} 150`,
	},
	validate: {
		itemDontExist: async (fieldValue: any) => {
			while (fieldValue.length >= 8) {
				const res = await fetch(`${process.env.BASE_BACK_URL}/product/checkIfExist/${fieldValue}`);
				const data = await res.json();
				return data.length === 0 || `Id don't Exist`;
			}
		},
	},
};
