import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Box, Button } from '@mui/material';
import { addToCart } from '../../features/cartSlice';
import * as style from '../../style/Product/productPage';

const SingleItemContainer = ({ imgSrc, data, handleState }: any) => {
	const dispatch = useDispatch();

	return (
		<Box sx={style.baseContainer}>
			{/* image left side: */}
			<Box sx={style.leftImage}>
				<Box sx={style.leftInner}>
					<Box sx={style.sImagesContainer}>
						{data.productImages.slice(1).map((img: string, index: number) => {
							return (
								<Box sx={{ ':hover': { opacity: '0.7' } }} key={index}>
									<img alt='' src={`${process.env.BASE_BACK_URL}/product/readProducts/${img}`} style={style.sImages} onMouseEnter={() => handleState(img)} />
								</Box>
							);
						})}
					</Box>

					<Box>
						<img
							alt=''
							src={
								imgSrc
									? `${process.env.BASE_BACK_URL}/product/readProducts/${imgSrc}`
									: `${process.env.BASE_BACK_URL}/product/readProducts/${data?.productImages[1]}`
							}
							style={style.lgImage}
						/>
					</Box>
				</Box>
			</Box>

			{/* info-right side */}
			<Box sx={style.rightSideContainer}>
				<Box sx={style.rightInner}>
					<h2>{data.longDescription}</h2>
					<h4 style={style.category}>category: {data.category}</h4>
					<Box style={{ marginTop: '10px' }}>
						4.5
						<Rating value={4.5} precision={0.5} readOnly size='small' />
					</Box>
					<Box style={style.border}></Box>
					<Box> some delivery section here.</Box>
					<h4> some about the item section here.</h4>
					<h5> what in the box section here. (need to add this 3 lines to the DB)</h5>
					<Button variant='contained' sx={style.addToCartBtn} onClick={() => dispatch(addToCart(data))}>
						Add to cart
					</Button>

					<Link to='/cart'>
						<Button variant='contained' sx={{ backgroundColor: '#F2BE22' }}>
							See Cart
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default SingleItemContainer;
