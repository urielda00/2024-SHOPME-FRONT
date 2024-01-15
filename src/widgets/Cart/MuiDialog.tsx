import React from 'react';
import * as Mui from '@mui/material';

const MuiDialog = ({ open }: any) => {
	const [openPassHelp, setOpenPassHelp] = React.useState(false);
	const handleClickClosePassHelp = () => {
		setOpenPassHelp(false);
	};
	React.useEffect(() => {
		if (open) {
			setOpenPassHelp(true);
		}
	}, [open]);

	return (
		<Mui.Dialog open={openPassHelp} onClose={handleClickClosePassHelp}>
			<Mui.DialogTitle>{'Cannot check out while the cart is empty!'}</Mui.DialogTitle>
			<Mui.DialogActions>
				<Mui.Button onClick={handleClickClosePassHelp}>Close</Mui.Button>
			</Mui.DialogActions>
		</Mui.Dialog>
	);
};
export default MuiDialog;
