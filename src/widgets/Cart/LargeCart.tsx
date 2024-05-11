import MuiDialog from './MuiDialog';
import * as Mui from '@mui/material';
import React, { useState } from 'react';
import ErrorMessages from './ErrorMessages';
import GenerateLinks from './GenerateLinks';
import * as style from '../../style/Cart/Large';
import * as Actions from '../../features/cartSlice';
import * as commonStyle from '../../style/Cart/Common';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

// Icons:
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const LargeCart: React.FC = () => {
	const dispatch = useAppDispatch();
	const [dialogOpen, setDialogOpen] = useState(false);
	const { user } = useAppSelector((state) => state.user);
	const { cart, totalQuantity, totalPrice, warningMessage } = useAppSelector((state) => state.allCart);

	return (
		<Mui.Box sx={{ ...commonStyle.baseContainer, ...style.container, ...style.baseLayoutStyle }}>
			<Mui.Box sx={{ ...style.childContainer1, ...style.baseLayoutStyle }}>
				<Mui.Box>
					<Mui.Box sx={style.leftContainer}>
						<h1 style={{ marginTop: '15px', ...commonStyle.LgMdHeader }}>SHOPPING CART</h1>

						<Mui.Button onClick={() => dispatch(Actions.deleteAllCart())} style={style.grey} size='small'>
							Delete all
							<DeleteOutlineOutlinedIcon style={style.deleteIcon} />
						</Mui.Button>
					</Mui.Box>

					{cart.length === 0 ? (
						<Mui.Box>
							<Mui.Box style={style.emptyMessageContainer}>The cart is empty</Mui.Box>
							<GenerateLinks marginTop='25px' marginBottom='0' icon={true} button={false} />
						</Mui.Box>
					) : (
						<GenerateLinks marginTop='25px' marginBottom='0' icon={true} button={false} />
					)}

					<ul>
						<Mui.Box style={{ width: '145%', marginTop: '10px' }}>
							{cart?.map((product: any) => {
								return (
									<li key={product._id} style={{ listStyle: 'var(--listStyle)', ...style.baseLayoutStyle }}>
										<Mui.Box style={style.liInternalContainer}>
											<Mui.Box style={style.secondLiInternalContainer}>
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

											<Mui.Box style={{ ...style.removeIconContainer, ...style.baseLayoutStyle }}>
												<Mui.Box style={{ marginLeft: '-10px' }}>
													<Mui.Button onClick={() => dispatch(Actions.decrementQuantity(product))}>
														<RemoveIcon />
													</Mui.Button>
													<span>{product.itemQuantity}</span>
													<Mui.Button onClick={() => dispatch(Actions.incrementQuantity(product))}>
														<AddIcon />
													</Mui.Button>
												</Mui.Box>

												<Mui.Box style={{ marginLeft: '-10px' }}>{product.price}$</Mui.Box>
												<Mui.Box onClick={() => dispatch(Actions.removeItem(product))}>
													<Mui.Button style={{ color: 'var(--black)' }}>
														<CloseIcon style={{ marginLeft: '-30px' }} />
													</Mui.Button>
												</Mui.Box>
											</Mui.Box>
										</Mui.Box>
									</li>
								);
							})}
						</Mui.Box>
					</ul>
				</Mui.Box>
			</Mui.Box>

			<Mui.Box sx={{ textAlign: 'left', width: '25%' }}>
				{warningMessage && <ErrorMessages />}

				<Mui.Box
					style={{
						...style.baseLayoutStyle,
						alignItems: 'end',
					}}
				>
					<h1 style={style.summeryH1}>Summary</h1>
					<p style={style.grey}>Total Items: {totalQuantity}</p>
				</Mui.Box>
				<Mui.Box
					style={{
						marginTop: '30px',
						marginLeft: '-50px',
						marginBottom: '40px',
					}}
				>
					<Mui.Box>
						<h5>COUPON CODE:</h5>
					</Mui.Box>

					<Mui.TextField InputLabelProps={{ style: style.inputLabelStyle }} style={commonStyle.coupon} label='Enter Your Code' variant='filled'></Mui.TextField>
					<Mui.Box style={{ ...style.totalPriceContainer, ...style.baseLayoutStyle }}>
						<h3>TOTAL PRICE</h3>
						<h3 style={{ marginRight: '20px' }}>{totalPrice} $</h3>
					</Mui.Box>

					<Mui.Box>
						<MuiDialog open={dialogOpen} />
						{cart.length < 1 ? (
							<Mui.Button
								onClick={() => {
									setDialogOpen(true);
									setTimeout(() => {
										setDialogOpen(false);
									}, 1000);
								}}
								style={{ ...commonStyle.checkoutBtn, ...style.checkoutBtn }}
								sx={commonStyle.checkoutBtnSx}
							>
								Checkout
							</Mui.Button>
						) : (
							<GenerateLinks height='50px' icon={false} button={true} src={'checkout'} content={'Checkout'} width='96%' />
						)}
						{!user && <GenerateLinks height='50px' icon={false} button={true} src={'register'} content={'Register'} width='96%' />}
					</Mui.Box>
				</Mui.Box>
			</Mui.Box>
		</Mui.Box>
	);
};

export default LargeCart;
