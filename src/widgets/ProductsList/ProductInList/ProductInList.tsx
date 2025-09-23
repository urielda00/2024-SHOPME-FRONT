import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Box } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import * as style from '../../../style/ProductsList/ProductInList';

const ProductInList = ({ item }: any) => {
	const { isXs, isSm } = useResponsive();

	const getStyle = () => {
		if (isXs) {
			return { ...style.baseContainer, ...style.containerSStyle };
		} else if (isSm) {
			return { ...style.baseContainer, ...style.containerMStyle };
		} else {
			return { ...style.baseContainer, ...style.containerLStyle };
		}
	};

	return (
		<Box sx={getStyle}>
			<LeftSide item={item} isMedium={isSm} isSmall={isXs} />
			<RightSide isSmall={isXs} isMedium={isSm} item={item} />
		</Box>
	);
};

export default ProductInList;
