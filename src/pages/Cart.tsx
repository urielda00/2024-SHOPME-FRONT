import useResponsiveCart from '../hooks/useCart';
import { Box, useMediaQuery } from '@mui/material';

const Cart = () => {
	const { setContainerStyle, getCartComponent } = useResponsiveCart();

	// Check the screen size:
	const isXs = useMediaQuery('(max-width:600px)');
	const isSm = useMediaQuery('(min-width:601px) and (max-width:960px)');

	return (
		<Box sx={setContainerStyle(isXs, isSm)} className='ScrollCartStyle'>
			{getCartComponent(isXs, isSm)}
		</Box>
	);
};

export default Cart;
