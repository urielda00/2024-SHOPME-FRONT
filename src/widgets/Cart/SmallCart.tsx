import MuiDialog from './MuiDialog';
import * as Mui from '@mui/material';
import React, { useState } from 'react';
import ErrorMessages from './ErrorMessages';
import GenerateLinks from './GenerateLinks';
import * as style from '../../style/Cart/Small';
import * as Actions from '../../features/cartSlice';
import * as commonStyle from '../../style/Cart/Common';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

// Icons:
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

const SmallCart: React.FC = () => {
	const { cart, totalQuantity, totalPrice, warningMessage } = useAppSelector((state) => state.allCart);
	const { user } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<Mui.Box sx={{ ...commonStyle.baseContainer, ...style.container }}>
			<Mui.Box sx={style.inlineContainer}>
				<Mui.Box sx={style.shoppingCart}>
					<h1 style={style.h1}>SHOPPING CART</h1>
					<Mui.Box style={style.border}></Mui.Box>
				</Mui.Box>

				{warningMessage && <ErrorMessages />}
				<Mui.Box sx={style.warningMessagesContainer}>
					<Mui.Box>
						<p style={style.grey}>Total Items: {totalQuantity}</p>
					</Mui.Box>
					<Mui.Box>
						<p style={style.grey}>Total Price: {totalPrice} $</p>
					</Mui.Box>
				</Mui.Box>

				{cart.length === 0 ? (
					<Mui.Box style={style.emptyCartContainer}>
						<Mui.Box style={style.emptyCartInlineContainer}>The cart is empty</Mui.Box>
						<GenerateLinks marginBottom='-155px' marginTop='100px' icon={true} button={false} />
					</Mui.Box>
				) : (
					<GenerateLinks marginBottom='-155px' marginTop='15px' icon={true} button={false} />
				)}

				<ul style={style.ul}>
					{cart?.map((product: any) => {
						return (
							<li key={product._id} style={{ ...commonStyle.baseListMedSm, ...style.li }}>
								<Mui.Box style={style.liInternalContainer}>
									<img style={style.liImg} src={`${process.env.BASE_BACK_URL}/product/readProducts/${product.image}`} width='100px' height='100px' alt='' />

									<Mui.Box>
										<p style={style.liProductNameP}>{product.productName}</p>
										<p style={style.liProductPriceP}>{product.price} $</p>
										<Mui.Box style={style.quantityBtn}>
											<Mui.Button onClick={() => dispatch(Actions.decrementQuantity(product))}>
												<RemoveIcon fontSize='small' />
											</Mui.Button>
											<span>{product.itemQuantity}</span>
											<Mui.Button onClick={() => dispatch(Actions.incrementQuantity(product))}>
												<AddIcon fontSize='small' />
											</Mui.Button>
										</Mui.Box>
									</Mui.Box>
								</Mui.Box>

								<Mui.Box onClick={() => dispatch(Actions.removeItem(product))}>
									<Mui.Button style={style.black}>
										<CloseIcon fontSize='small' />
									</Mui.Button>
								</Mui.Box>
							</li>
						);
					})}
				</ul>
			</Mui.Box>

			<Mui.Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<input type='text' style={style.input} placeholder='Enter Your Coupon' />

				<Mui.Box sx={style.dialogContainer}>
					<MuiDialog open={dialogOpen} />
					{cart.length < 1 ? (
						<Mui.Button
							onClick={() => {
								setDialogOpen(true);
								setTimeout(() => setDialogOpen(false), 1000);
							}}
							style={{ ...commonStyle.checkoutBtn, ...style.checkoutBtn }}
							sx={commonStyle.checkoutBtnSx}
						>
							Checkout
						</Mui.Button>
					) : (
						<GenerateLinks marginTop='10px' icon={false} button={true} src={'checkout'} content={'Checkout'} width='100%' height='35px' />
					)}

					{!user && <GenerateLinks marginTop='10px' icon={false} button={true} src={'register'} content={'Register'} width='100%' height='35px' />}
				</Mui.Box>
			</Mui.Box>
		</Mui.Box>
	);
};

export default SmallCart;
