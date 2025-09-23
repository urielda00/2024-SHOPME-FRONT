import React, { useState, useEffect } from 'react';
import * as Mui from '@mui/material';

interface MuiDialogProps {
	open: boolean;
}

const MuiDialog: React.FC<MuiDialogProps> = ({ open }) => {
	const [openPassHelp, setOpenPassHelp] = useState(false);

	const handleClickClosePassHelp = () => setOpenPassHelp(false);

	useEffect(() => {
		if (open) setOpenPassHelp(true);
	}, [open]);

	return (
		<Mui.Dialog open={openPassHelp} onClose={handleClickClosePassHelp}>
			<Mui.DialogTitle>Cannot check out while the cart is empty!</Mui.DialogTitle>
			<Mui.DialogActions>
				<Mui.Button onClick={handleClickClosePassHelp}>Close</Mui.Button>
			</Mui.DialogActions>
		</Mui.Dialog>
	);
};

export default MuiDialog;
