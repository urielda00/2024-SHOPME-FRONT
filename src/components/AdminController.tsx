import React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';

// Icons
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const actions = [
	{
		icon: (
			<Link to={'/createItem'}>
				<NoteAddIcon />
			</Link>
		),
		name: 'New Item',
	},
	{
		icon: (
			<Link to={'/updateItem'}>
				<AutorenewIcon />
			</Link>
		),
		name: 'Update Item',
	},
	{
		icon: (
			<Link to={'/deleteItem'}>
				<DeleteOutlineIcon />
			</Link>
		),
		name: 'Delete Item',
	},
];

const AdminController = () => {
	const { isAdmin } = useAppSelector((state) => state.user);
	const isLogged = window.sessionStorage.getItem('isLogged');

	return (
		<>
			{isAdmin && isLogged === 'true' ? (
				<Mui.Box>
					<Mui.SpeedDial ariaLabel='SpeedDial basic example' sx={speedDialStyle} icon={<Mui.SpeedDialIcon />}>
						{actions.map((action) => (
							<Mui.SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
						))}
					</Mui.SpeedDial>
				</Mui.Box>
			) : (
				<div hidden></div>
			)}
		</>
	);
};

export default AdminController;

const speedDialStyle: React.CSSProperties = {
	zIndex: 1,
	right: 16,
	bottom: 16,
	position: 'fixed',
};
