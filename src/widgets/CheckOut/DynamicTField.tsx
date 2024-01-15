import React from 'react';
import * as Mui from '@mui/material';
import { FormData, FormProps } from '../../interfaces/checkout.interface';

const DynamicTField: React.FC<FormProps> = ({ formData }) => {
	return (
		<Mui.Grid container spacing={3}>
			{formData.map((field) => (
				<Mui.Grid key={field.id} item xs={12} sm={6}>
					<Mui.TextField
						fullWidth
						id={field.id}
						name={field.name}
						variant='standard'
						label={field.label}
						autoComplete={field.autoComplete}
						required={field.required || false}
					/>
				</Mui.Grid>
			))}

			<Mui.Grid item xs={12}>
				<Mui.FormControlLabel control={<Mui.Checkbox color='secondary' name='saveAddress' value='yes' />} label='Confirm The Address Here' />
			</Mui.Grid>
		</Mui.Grid>
	);
};

// Render the DynamicForm component with the provided data:
const DeliveryFormData = () => {
	const formData: FormData[] = [
		{ id: 'firstName', name: 'firstName', label: 'First name', required: true, autoComplete: 'given-name' },
		{ id: 'lastName', name: 'lastName', label: 'Last name', required: true, autoComplete: 'family-name' },
		{ id: 'address1', name: 'address1', label: 'Address line 1', required: true, autoComplete: 'shipping address-line1' },
		{ id: 'address2', name: 'address2', label: 'Address line 2', required: false, autoComplete: 'shipping address-line2' },
		{ id: 'city', name: 'city', label: 'City', required: true, autoComplete: 'shipping address-level2' },
		{ id: 'state', name: 'state', label: 'State/Province/Region', required: true },
		{ id: 'zip', name: 'zip', label: 'Zip / Postal code', required: true, autoComplete: 'shipping postal-code' },
		{ id: 'country', name: 'country', label: 'Country', required: true, autoComplete: 'shipping country' },
	];

	return <DynamicTField formData={formData} />;
};

export default DeliveryFormData;
