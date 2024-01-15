import React from 'react';
import { Box } from '@mui/material';
import { containerStyle } from '../../style/container';
import { DeleteForm } from '../../widgets/Admin/Delete/Delete';

const DeleteItem: React.FunctionComponent = () => {
	return (
		<Box sx={{ ...containerStyle, backgroundColor: `var(--containerWhiteBackground)` }}>
			<DeleteForm />
		</Box>
	);
};

export default DeleteItem;
