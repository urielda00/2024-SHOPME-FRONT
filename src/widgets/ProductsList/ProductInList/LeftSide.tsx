import { Link } from 'react-router-dom';
import { Box, Rating } from '@mui/material';
import * as style from '../../../style/ProductsList/ProductInList';

const LeftSide = ({ isMedium, isSmall, item }: any) => {
	//Only for production:
	const randomSoldAndShippingPrice = (min: number, max: number) => {
		return Math.floor(min + Math.random() * (max - min + 1));
	};

	return (
		<Box sx={{ display: 'flex', width: isMedium ? '70%' : isSmall ? '550px' : '70%' }}>
			<Box sx={{ ':hover': { opacity: '0.8' } }}>
				<Link to={`/product/${item.id}?category=${item.category}`}>
					<img
						src={`${process.env.BASE_BACK_URL}/product/readProducts/${item.image}`}
						alt=''
						style={isSmall ? { ...style.baseImg, ...style.sImg } : isMedium ? { ...style.baseImg, ...style.mdImg } : { ...style.baseImg, ...style.lgImg }}
					/>
				</Link>
			</Box>

			<Box sx={style.internalLeftContainer}>
			  <Box>
					{isSmall || isMedium ? <h4>{item.name}</h4> : <h3>{item.name}</h3>}
					<p style={{ ...style.shortDP, fontSize: isSmall || isMedium ? '15px' : 'inherit' }}>{item.shortDescription}</p>
					<p style={{ ...style.categoryP, fontSize: isSmall || isMedium ? '15px' : 'inherit' }}>category: {item.category}</p>
					<Rating size={isMedium || isSmall ? 'small' : 'medium'} name='read-only' value={4.5} precision={0.5} readOnly sx={{ marginTop: '10px', zIndex:1 }} />
				</Box>

         <Box>
				{!isSmall && (
					<Box>
						{isMedium ? (
							<>
								<h3 style={style.mdPrice}>
									{item.price}
									<span style={{ fontSize: '13px', marginLeft: '3px' }}>$</span>
								</h3>
							</>
						) : (
							<>
								<h2 style={style.lgPrice}>
									{item.price}
									<span style={{ fontSize: '15px', marginLeft: '3px' }}>$</span>
								</h2>
							</>
						)}

						{!isSmall && (
							<>
								<p style={style.random}>+{randomSoldAndShippingPrice(3, 14)}$ shipping</p>
								<p style={style.random}>+{randomSoldAndShippingPrice(100, 4210)} sold</p>
							</>
						)}
					</Box>
				)}
				</Box>
			</Box>
		</Box>
	);
};

export default LeftSide;
