import { Box } from '@mui/material';
import { containerStyle } from '../../style/container';
import UpdateCreate from '../../widgets/Admin/Create&Update/UpdateCreate';

const Update = () => {
	return (
		<Box sx={{ ...containerStyle, backgroundColor: `var(--containerWhiteBackground)` }}>
			<UpdateCreate isUpdate={true} isCreate={false} />
		</Box>
	);
};

export default Update;
