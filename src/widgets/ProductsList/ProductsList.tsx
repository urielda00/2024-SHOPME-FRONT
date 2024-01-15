import Filter from './Filter/Filter';
import { Box, useMediaQuery } from '@mui/material';
import ProductInList from './ProductInList/ProductInList';
import * as style from '../../style/ProductsList/ProductsList';

const ProductsListDisplay = ({ items, data }: any) => {
	// Check the screen size:
	const isXs = useMediaQuery('(max-width:600px)');
	const isSm = useMediaQuery('(min-width:601px) and (max-width:960px)');

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
