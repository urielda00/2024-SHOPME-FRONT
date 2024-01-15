import MuiDialog from './MuiDialog';
import * as Mui from '@mui/material';
import React, { useState } from 'react';
import ErrorMessages from './ErrorMessages';
import GenerateLinks from './GenerateLinks';
import * as style from '../../style/Cart/Medium';
import * as Actions from '../../features/cartSlice';
import * as commonStyle from '../../style/Cart/Common';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

// Icons:
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const MediumCart: React.FC = () => {
	const dispatch = useAppDispatch();
	const [dialogOpen, setDialogOpen] = useState(false);
	const { user } = useAppSelector((state) => state.user);
	const { cart, totalQuantity, totalPrice, warningMessage } = useAppSelector((state) => state.allCart);

	const handleClick = () => {
		setDialogOpen(true);
		setTimeout(() => {
			setDialogOpen(false);
		}, 1000);
	};

	return (
		<Mui.Box sx={{ ...commonStyle.baseContainer, ...style.container }}>
			<Mui.Box sx={style.childContainer1}>
				{warningMessage && <ErrorMessages />}
				<Mui.Box>
					<h1 style={commonStyle.LgMdHeader}>SHOPPING CART</h1>

					{cart.length === 0 ? (
						<Mui.Box>
							<Mui.Box style={style.emptyCartContainer}>The cart is empty</Mui.Box>

							<GenerateLinks marginTop='10px' marginBottom='0' icon={true} button={false} />
						</Mui.Box>
					) : (
						<GenerateLinks marginTop='10px' marginBottom='0' icon={true} button={false} />
					)}
				</Mui.Box>

				{cart.length === 0 ? (
					<Mui.Box style={{ display: 'none' }}></Mui.Box>
				) : (
					<p>
						<Mui.Button onClick={() => dispatch(Actions.deleteAllCart())} style={style.grey} size='small'>
							Delete all
							<DeleteOutlineOutlinedIcon style={style.deleteIcon} />
						</Mui.Button>
					</p>
				)}
			</Mui.Box>

			<Mui.Box sx={style.cartWithProductsContainer}>
				<ul style={style.ul}>
					{cart?.map((product: any) => {
						return (
							<li key={product._id} style={{ ...commonStyle.baseListMedSm, ...style.li }}>
								<Mui.Box style={style.liInternalContainer}>
									<img style={style.imgStyle} src={`${process.env.BASE_BACK_URL}/product/readProducts/${product.image}`} width='55px' height='55px' alt='' />
									<Mui.Box>
										<p style={style.productNameP}>{product.productName} </p>
									</Mui.Box>
								</Mui.Box>

								<Mui.Box style={style.quantityContainer}>
									<Mui.Box style={style.quantityInlineContainer}>
										<Mui.Button onClick={() => dispatch(Actions.decrementQuantity(product))}>
											<RemoveIcon fontSize='small' />
										</Mui.Button>
										<span>{product.itemQuantity}</span>
										<Mui.Button onClick={() => dispatch(Actions.incrementQuantity(product))}>
											<AddIcon fontSize='small' />
										</Mui.Button>
									</Mui.Box>
								</Mui.Box>

								<Mui.Box style={style.price}>{product.price} $</Mui.Box>
								<Mui.Box onClick={() => dispatch(Actions.removeItem(product))}>
									<Mui.Button style={{ color: 'var(--black)' }}>
										<CloseIcon fontSize='small' />
									</Mui.Button>
								</Mui.Box>
							</li>
						);
					})}
				</ul>
			</Mui.Box>

			<Mui.Box sx={style.summeryContainer}>
				<Mui.Box style={style.summeryInternalContainer}>
					<h1 style={style.summeryH1}>Summary</h1>
					<Mui.Box style={style.totalItemPContainer}>
						<p style={style.totalItemsPriceP}>Total Items: {totalQuantity}</p>
						<p style={style.totalItemsPriceP}>Total Price: {totalPrice} $</p>
					</Mui.Box>
				</Mui.Box>

				<Mui.Box style={style.couponStyle}>
					<Mui.Box style={{ marginTop: '20px' }}>
						<Mui.TextField
							size='small'
							sx={style.textFieldSx}
							InputLabelProps={{ style: style.InputLabelProps }}
							style={commonStyle.coupon}
							label='Enter Coupon Code'
							variant='filled'
						></Mui.TextField>
					</Mui.Box>

					<Mui.Box style={{ marginTop: '5px' }}>
						<MuiDialog open={dialogOpen} />
						{cart.length < 1 ? (
							<Mui.Button onClick={handleClick} style={{ ...commonStyle.checkoutBtn, ...style.checkoutBtn }} sx={commonStyle.checkoutBtnSx}>
								Checkout
							</Mui.Button>
						) : (
							<GenerateLinks height='35px' width='96%' icon={false} button={true} src={'checkout'} content={'Checkout'} />
						)}

						{!user && <GenerateLinks height='35px' width='96%' icon={false} button={true} src={'register'} content={'Register'} />}
					</Mui.Box>
				</Mui.Box>
			</Mui.Box>
		</Mui.Box>
	);
};

export default MediumCart;
