export interface FormData {
	id: string;
	name: string;
	label: string;
	type?: string;
	rows?: number;
	multiline?: boolean;
	autoComplete?: string;
}

export interface FormProps {
	formData: FormData[];
}
