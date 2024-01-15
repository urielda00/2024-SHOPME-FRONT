import * as Mui from '@mui/material';
import React, { useState } from 'react';
import handleDeleteSubmit from '../../../services/Admin/deleteSubmit';

// Icons
import DeleteIcon from '@mui/icons-material/Delete';

export const DeleteForm = () => {
	const [id, setId] = useState('');
	const handleSubmit = async (e: any) => await handleDeleteSubmit(e, id);

	return (
		<Mui.Container sx={containerStyle} maxWidth='sm' component='main'>
			<Mui.Box sx={insideContainerStyle}>
				<Mui.Avatar sx={{ m: 0.5, mt: 2, bgcolor: 'secondary.main' }}>
					<DeleteIcon />
				</Mui.Avatar>
				<Mui.Typography sx={{ mb: -3, mt: 2 }} component='h1' variant='h5'>
					Delete Item
				</Mui.Typography>

				<Mui.Grid component='form' method='post' onSubmit={handleSubmit} sx={{ mt: 4 }} container spacing={2}>
					<Mui.Grid item xs={12} sm={12}>
						<Mui.TextField
							required
							fullWidth
							id='productID'
							label='product ID'
							type='text'
							autoComplete='none'
							onChange={(e: any) => {
								setId(e.target.value);
							}}
						/>
					</Mui.Grid>
					<Mui.Grid item xs={12} sm={12}>
						<Mui.Button
							sx={{
								backgroundColor: '#EA1179',
								color: 'var(--black)',
								fontSize: '16px',
							}}
							fullWidth
							type='submit'
						>
							Delete
						</Mui.Button>
					</Mui.Grid>
				</Mui.Grid>
			</Mui.Box>
		</Mui.Container>
	);
};

// Style:
const containerStyle = {
	borderRadius: '10px',
	backgroundColor: 'var(--white)',
	height: { md: '350px', sm: '350px', xs: '400px' },
	boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

const insideContainerStyle: React.CSSProperties = {
	marginTop: 1,
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
};
