import { ReactElement, useCallback, lazy } from 'react';
import * as style from '../style/Cart/Common';

// Dynamic imports for performance optimization
const LargeCart = lazy(() => import('../widgets/Cart/LargeCart'));
const MediumCart = lazy(() => import('../widgets/Cart/MediumCart'));
const SmallCart = lazy(() => import('../widgets/Cart/SmallCart'));

const useResponsiveCart = () => {
	// Memoized function for container style
	const setContainerStyle = useCallback((small?: boolean, medium?: boolean) => {
		if (small) return { ...style.containerBaseStyle, ...style.containerSmallStyle };
		if (medium) return { ...style.containerBaseStyle, ...style.containerMediumStyle };
		return { ...style.containerBaseStyle, ...style.containerLargeStyle };
	}, []);

	// Memoized function for returning the correct cart component
	const getCartComponent = useCallback((small?: boolean, medium?: boolean): ReactElement => {
		if (small) return <SmallCart />;
		if (medium) return <MediumCart />;
		return <LargeCart />;
	}, []);

	return { setContainerStyle, getCartComponent };
};

export default useResponsiveCart;
