import React from 'react';
import * as Mui from '@mui/material';
import ErrorMessages from '../Cart/ErrorMessages';
import * as style from '../../style/Checkout/Cart';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { incrementQuantity, decrementQuantity } from '../../features/cartSlice';

// Icons import:
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CartDisplayMobile from './CartDisplayMobile';

const CartDisplay = () => {
	const dispatch = useAppDispatch();
	const { cart, warningMessage } = useAppSelector((state) => state.allCart);

	return (
		<Mui.Box className='ScrollCartStyle' sx={{ overflow: 'hidden' }}>
			<Mui.Box sx={style.childContainer1}>
				<ul style={{ width: 'var(--width)' }}>
					<Mui.Box style={{ width: 'var(--width)' }}>
						{cart?.map((product: any) => {
							return (
								<li key={product._id} style={style.liStyle}>
									<Mui.Box style={style.insideListContainerStyle}>
										<Mui.Box style={style.insideListSecondContainerStyle}>
											<Mui.Box>
												<img
													style={{ objectFit: 'cover', borderRadius: '15px' }}
													src={`${process.env.BASE_BACK_URL}/product/readProducts/${product.image}`}
													width='90px'
													height='90px'
													alt=''
												/>
											</Mui.Box>

											<Mui.Box>
												<Mui.ListItemText style={{ marginLeft: '30px' }} primary={product.productName} />
											</Mui.Box>
										</Mui.Box>

										<Mui.Box style={style.insideListMiddleContainerStyle}>
											<Mui.Box>
												<Mui.Button
													onClick={() => {
														dispatch(decrementQuantity(product));
													}}
												>
													<RemoveIcon />
												</Mui.Button>

												<span>{product.itemQuantity}</span>
												<Mui.Button onClick={() => dispatch(incrementQuantity(product))}>
													<AddIcon />
												</Mui.Button>
											</Mui.Box>
											<Mui.Box style={{ marginLeft: '-10px' }}>{product.price}$</Mui.Box>
										</Mui.Box>
									</Mui.Box>
								</li>
							);
						})}
					</Mui.Box>
				</ul>
			</Mui.Box>
			{/* for Mobile Screens: */}
			<Mui.Box
				sx={{
					display: { xs: 'flex', sm: 'none', md: 'none' },
					width: 'var(--width)',
					height: '450px',
				}}
			>
				<CartDisplayMobile />
			</Mui.Box>
			{warningMessage && <ErrorMessages />}
		</Mui.Box>
	);
};

export default CartDisplay;
