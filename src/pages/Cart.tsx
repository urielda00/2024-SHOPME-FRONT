import { Box, CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import useResponsive from '../hooks/useResponsive';
import useResponsiveCart from '../hooks/useResponsiveCart';

const Cart = () => {
	const { setContainerStyle, getCartComponent } = useResponsiveCart();

	// Check the screen size:
	const { isXs, isSm } = useResponsive();

	return (
		<Box sx={setContainerStyle(isXs, isSm)} className="ScrollCartStyle">
			<Suspense fallback={<CircularProgress />}>
				{getCartComponent(isXs, isSm)}
			</Suspense>
		</Box>
	);
};

export default Cart;
