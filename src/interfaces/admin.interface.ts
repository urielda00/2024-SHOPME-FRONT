interface BaseFormValues {
	os: string;
	brand: string;
	price: number;
	company: string;
	quantity: string;
	category: string;
	productName: string;
	releaseYear: number;
	longDescription: string;
	shortDescription: string;
}

type StringImg = [string];

export interface CreateFormValues extends BaseFormValues {
	image1: StringImg;
	image2: StringImg;
	image3: StringImg;
	image4: StringImg;
	productID?: string;
}

export interface UpdateFormValues extends BaseFormValues {
	image1: StringImg | undefined;
	image2: StringImg | undefined;
	image3: StringImg | undefined;
	image4: StringImg | undefined;
	productID: string;
}

export interface BothFormValues extends BaseFormValues {
	image1: StringImg | undefined;
	image2: StringImg | undefined;
	image3: StringImg | undefined;
	image4: StringImg | undefined;
	productID?: string;
}

export type SubmitProps = (image1: string, image2: string, image3: string, image4: string, data: CreateFormValues) => void;

export interface FormProps {
	isUpdate: boolean;
	isCreate: boolean;
}
