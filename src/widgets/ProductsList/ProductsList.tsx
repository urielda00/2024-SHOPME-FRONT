import { Box } from '@mui/material';
import Filter from './Filter/Filter';
import useResponsive from '../../hooks/useResponsive';
import ProductInList from './ProductInList/ProductInList';
import * as style from '../../style/ProductsList/ProductsList';

const ProductsListDisplay = ({ items, data }: any) => {
	// Check the screen size:
	const { isXs, isSm } = useResponsive();

	const setContainerStyle = () => {
		if (isXs) {
			return style.smContainer;
		} else {
			return style.lgContainer;
		}
	};

	return (
		<Box sx={style.containerLStyle}>
			{/* Items */}
			<Box sx={setContainerStyle}>
				<Box sx={style.internalContainer}>
					{items(data)?.map((item: any) => {
						return (
							<Box key={item._id}>
								<ProductInList item={item} />
							</Box>
						);
					})}
				</Box>
			</Box>

			{/* Filter  */}
			<Box style={style.filterContainer}>
				<Filter pStyle={isSm ? { fontSize: '14px' } : { fontSize: '18px' }} isMedium={isSm} />
			</Box>
		</Box>
	);
};

export default ProductsListDisplay;
