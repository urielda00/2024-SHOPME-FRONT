import { Box } from '@mui/material';
import useResponsiveCart from '../hooks/useCart';
import useResponsive from '../hooks/useResponsive';

const Cart = () => {
	const { setContainerStyle, getCartComponent } = useResponsiveCart();

	// Check the screen size:
	const { isXs, isSm } = useResponsive();
	return (
		<Box sx={setContainerStyle(isXs, isSm)} className='ScrollCartStyle'>
			{getCartComponent(isXs, isSm)}
		</Box>
	);
};

export default Cart;
