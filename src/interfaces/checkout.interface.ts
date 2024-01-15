export interface FormData {
	id: string;
	name: string;
	label: string;
	required?: boolean;
	autoComplete?: string;
}

export interface FormProps {
	formData: FormData[];
}
