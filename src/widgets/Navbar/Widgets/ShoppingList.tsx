import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { useAppSelector } from '../../../app/hooks';

//Icons:
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ShoppingList = () => {
	const { totalQuantity } = useAppSelector((state) => state.allCart);

	return (
		<>
			<Link to='/cart'>
				<IconButton style={{ color: 'black', marginRight: '20px', marginLeft: '-10px' }}>
					<ShoppingCartOutlinedIcon />
				</IconButton>

				<span style={span}>{totalQuantity}</span>
			</Link>
		</>
	);
};

export default ShoppingList;

const span: React.CSSProperties = {
	width: '20px',
	height: '20px',
	borderRadius: '50px',
	backgroundColor: '#E7CEA6',
	position: 'absolute',
	textAlign: 'center',
	top: '23px',
	right: '43px',
	color: 'black',
};
