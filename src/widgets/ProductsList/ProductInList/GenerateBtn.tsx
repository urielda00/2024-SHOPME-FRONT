import { Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useAppDispatch } from '../../../app/hooks';
import { addToCart } from '../../../features/cartSlice';
import useResponsive from '../../../hooks/useResponsive';
import * as style from '../../../style/ProductsList/ProductInList';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { FC } from 'react';

interface Props {
	item?: any;
	isInfo: boolean;
}

const GenerateBtn: FC<Props> = ({ isInfo, item }) => {
	const dispatch = useAppDispatch();

	const { isXs, isSm } = useResponsive();

	const handleButtonClick = () => {
		// Only dispatch addToCart if isInfo is false
		if (!isInfo) {
			dispatch(addToCart(item));
		}
	};

	const getStyle = () => {
		if (isXs) {
			return isInfo ? { ...style.baseInfo, ...style.smInfo } : { ...style.baseStyle, ...style.smStyle };
		} else if (isSm) {
			return isInfo ? { ...style.baseInfo, ...style.mdInfo } : { ...style.baseStyle, ...style.mdStyle };
		} else {
			return isInfo ? { ...style.baseStyle, ...style.lgStyle } : { ...style.baseInfo, ...style.lgInfo };
		}
	};

	return (
		<Button onClick={handleButtonClick} variant='contained' size={isXs || isSm ? 'small' : 'medium'} sx={getStyle}>
			{!isXs && (isInfo ? 'More Info' : 'Add To Cart')}
			{isInfo ? <InfoIcon sx={{ marginLeft: !isXs ? '10px' : '' }} /> : <AddShoppingCartIcon sx={{ marginLeft: !isXs ? '10px' : '' }} />}
		</Button>
	);
};

export default GenerateBtn;
