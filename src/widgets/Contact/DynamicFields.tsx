import React from 'react';
import * as Mui from '@mui/material';
import { FormData, FormProps } from '../../interfaces/contact.interface';

const DynamicFields: React.FC<FormProps> = ({ formData }) => {
	return (
		<Mui.Grid container spacing={2}>
			{formData.map((field) => (
				<Mui.Grid key={field.id} item xs={12} sm={field.id === 'moreInfo' ? 12 : 6}>
					<Mui.TextField
						required
						fullWidth
						id={field.id}
						name={field.name}
						label={field.label}
						rows={field.rows || 1}
						type={field.type || 'text'}
						autoComplete={field.autoComplete}
						multiline={field.multiline || false}
					/>
				</Mui.Grid>
			))}
			<Mui.Grid item xs={12} sm={12}>
				<Mui.Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
					Submit
				</Mui.Button>
			</Mui.Grid>
		</Mui.Grid>
	);
};

// Function to activate/render the component
const renderForm = () => {
	const formData: FormData[] = [
		{ id: 'email', name: 'email', label: 'Email Address', autoComplete: 'email', type: 'email' },
		{ id: 'phone', name: 'phone', label: 'Phone Number', autoComplete: 'phone', type: 'tel' },
		{ id: 'fName', name: 'fName', label: 'First Name', autoComplete: 'given-name', type: 'text' },
		{ id: 'lName', name: 'lName', label: 'Last Name', autoComplete: 'family-name', type: 'text' },
		{ id: 'moreInfo', name: 'moreInfo', label: 'Provide information here...', multiline: true, rows: 4 },
	];

	return <DynamicFields formData={formData} />;
};

export default renderForm;
