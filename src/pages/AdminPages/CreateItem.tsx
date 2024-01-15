import React from 'react';
import { Box } from '@mui/material';
import { containerStyle } from '../../style/container';
import UpdateCreate from '../../widgets/Admin/Create&Update/UpdateCreate';

const CreateItem: React.FunctionComponent = () => {
	return (
		<Box sx={{ ...containerStyle, backgroundColor: `var(--containerWhiteBackground)` }}>
			<Box sx={{ display: 'flex' }}>
				<UpdateCreate isUpdate={false} isCreate={true} />
			</Box>
		</Box>
	);
};
export default CreateItem;
