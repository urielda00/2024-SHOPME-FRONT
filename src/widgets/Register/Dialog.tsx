import React, { FC } from 'react';
import * as Mui from '@mui/material';

interface DialogProps {
	open: boolean;
}

const DialogIs: FC<DialogProps> = ({ open }) => {
	const [openPassHelp, setOpenPassHelp] = React.useState(false);
	const closeDialog = () => setOpenPassHelp(false);

	React.useEffect(() => {
		if (open) {
			setOpenPassHelp(true);
		}
	}, [open]);

	return (
		<Mui.Dialog open={openPassHelp} onClose={closeDialog}>
			<Mui.DialogTitle>{'To set a strong password, follow the next steps:'}</Mui.DialogTitle>
			<Mui.DialogContent>
				<Mui.Box>3. Password must have at least 1 Digit.</Mui.Box>
				<Mui.Box>1. Password must have at least 1 UpperCase.</Mui.Box>
				<Mui.Box>2. Password must have at least 1 LowerCase.</Mui.Box>
				<Mui.Box>4. Password must have at least 6 Characters.</Mui.Box>
			</Mui.DialogContent>
			<Mui.DialogActions>
				<Mui.Button onClick={closeDialog}>Close</Mui.Button>
			</Mui.DialogActions>
		</Mui.Dialog>
	);
};

export default DialogIs;
