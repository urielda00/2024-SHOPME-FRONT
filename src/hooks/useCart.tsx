import { ReactElement } from 'react';
import * as style from '../style/Cart/Common';
import LargeCart from '../widgets/Cart/LargeCart';
import SmallCart from '../widgets/Cart/SmallCart';
import MediumCart from '../widgets/Cart/MediumCart';

const useResponsiveCart = () => {
	const setContainerStyle = (small?: boolean, medium?: boolean) => {
		if (small) {
			return { ...style.containerBaseStyle, ...style.containerSmallStyle };
		} else if (medium) {
			return { ...style.containerBaseStyle, ...style.containerMediumStyle };
		} else {
			return { ...style.containerBaseStyle, ...style.containerLargeStyle };
		}
	};

	const getCartComponent = (small?: boolean, medium?: boolean): ReactElement => {
		if (small) {
			return <SmallCart />;
		} else if (medium) {
			return <MediumCart />;
		} else {
			return <LargeCart />;
		}
	};

	return { setContainerStyle, getCartComponent };
};

export default useResponsiveCart;
