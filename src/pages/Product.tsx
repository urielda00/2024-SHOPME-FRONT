import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelateProducts from '../widgets/Product/RelateProducts';
import { UseSingleItemData } from '../services/Product/getProduct';
import SingleItemContainer from '../widgets/Product/SingleItemContainer';
import Construction from '../components/Construction';

const Product = () => {
	const { productId } = useParams();
	const [imgSrc, setImgSrc] = useState<any>();
	const { isLoading, data } = UseSingleItemData(productId);

	const handleState = (img: string) => {
		setImgSrc(img);
	};

	useEffect(() => {
		data && setImgSrc(data.productImages[1]);
	}, [data]);

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<Box>
			{/* Large Screens: */}
			<Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
				<SingleItemContainer imgSrc={imgSrc} data={data} handleState={handleState} />
				<RelateProducts handleState={handleState} />
			</Box>

			{/* Medium & Small Screens: */}
			<Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' }}}><Construction/></Box>
		</Box>
	);
};

export default Product;
