import { Box } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Loading from '../ProductsList/Loading';
import * as style from '../../style/Product/carousel';
import { Link, useSearchParams } from 'react-router-dom';
import { responsiveUnits } from '../../utils/responsiveUnits';
import { UseRelateItemsData } from '../../services/Product/getRelate';

const RelateProducts = ({ handleState, category }: any) => {
	const [searchParams] = useSearchParams();
	// const category = searchParams.get('category');
	const { isLoading, data } = UseRelateItemsData(category);

	if (isLoading) return <Loading />;
  
	return (
		<Box sx={style.container}>
			<h1 style={{ marginBottom: '30px' }}>Products related to this item:</h1>
			<div style={{ width: '90%' }}>
				<Carousel responsive={responsiveUnits}>
					{data?.map((item: any) => {
						return (
							<Box key={item._id} sx={style.carouselItem}>
								<Link
									to={`/product/${item._id}?category=${item.category}`}
									style={{ textDecoration: 'none', color: 'var(--black)' }}
									onClick={() => handleState(item.productImages[1])}
								>
									<img alt='' style={style.img} src={`${process.env.BASE_BACK_URL}/product/readProducts/${item.image}`} />
								</Link>

								<p style={{ marginTop: '10px' }}>{item.shortDescription}</p>
								<p style={style.pPrice}>{item.price} $</p>
							</Box>
						);
					})}
				</Carousel>
			</div>
		</Box>
	);
};
export default RelateProducts;
