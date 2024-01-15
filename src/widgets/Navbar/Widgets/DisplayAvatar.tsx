import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';

// To Do : replace the U with the user first letter / p.picture
const DisplayAvatar = () => {
	return (
		<Stack>
			<Avatar style={{ width: '25px', height: '25px' }} sx={{ bgcolor: deepOrange[500] }}>
				U
			</Avatar>
		</Stack>
	);
};
export default DisplayAvatar;
