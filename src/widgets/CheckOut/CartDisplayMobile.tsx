import React from 'react';
import { Box, Button } from '@mui/material';
import * as style from '../../style/Checkout/MobileCart';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { incrementQuantity, decrementQuantity, removeItem } from '../../features/cartSlice';

// Icons import:
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartDisplayMobile = () => {
	const dispatch = useAppDispatch();
	const { cart } = useAppSelector((state) => state.allCart);

	return (
		<Box className='ScrollCartStyle' sx={{ overflow: 'hidden', width: 'var(--width)' }}>
			<Box sx={style.childContainer1}>
				<ul>
					{cart?.map((product: any) => {
						return (
							<li key={product._id} style={style.liStyle}>
								<Box style={style.listContainer}>
									<img style={style.listImage} alt='' width='100px' height='100px' src={`${process.env.BASE_BACK_URL}/product/readProducts/${product.image}`} />

									<Box>
										<p style={style.productNameStyle}>{product.productName}</p>
										<p style={style.productPriceStyle}>{product.price} $</p>

										<Box style={{ marginLeft: '-10px', marginTop: '15px' }}>
											<Button onClick={() => dispatch(decrementQuantity(product))}>
												<RemoveIcon fontSize='small' />
											</Button>

											<span>{product.itemQuantity}</span>

											<Button onClick={() => dispatch(incrementQuantity(product))}>
												<AddIcon fontSize='small' />
											</Button>
										</Box>
									</Box>
								</Box>

								<Box
									onClick={() => {
										dispatch(removeItem(product));
									}}
								></Box>
							</li>
						);
					})}
				</ul>
			</Box>
		</Box>
	);
};

export default CartDisplayMobile;
