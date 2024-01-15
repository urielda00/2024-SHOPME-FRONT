import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { Box, useMediaQuery } from '@mui/material';
import * as style from '../../../style/ProductsList/ProductInList';

const ProductInList = ({ item }: any) => {
	const isXs = useMediaQuery('(max-width:600px)');
	const isSm = useMediaQuery('(min-width:601px) and (max-width:960px)');

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
