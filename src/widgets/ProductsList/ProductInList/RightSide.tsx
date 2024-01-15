import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import GenerateBtn from './GenerateBtn';
import * as style from '../../../style/ProductsList/ProductInList';

const RightSide = ({ isSmall, isMedium, item }: any) => {
	const setContainerStyle = () => {
		if (isSmall) {
			return style.smContainer;
		} else if (isMedium) {
			return { ...style.baseRightContainer, ...style.mdContainer };
		} else {
			return { ...style.baseRightContainer, ...style.lgContainer };
		}
	};

	return (
		<Box sx={setContainerStyle}>
			{isSmall && (
				<>
					<Box style={{ position: 'absolute' }}>
						<h3 style={style.h3Style}>
							{item.price}
							<span style={{ fontSize: '13px', marginLeft: '3px' }}>$</span>
						</h3>
					</Box>

					<Box style={style.smallInternalContainer}>
						<GenerateBtn isInfo={false} item={item}/>

						<Link to={`/product/${item._id}`}>
							<GenerateBtn isInfo={true} />
						</Link>
					</Box>
				</>
			)}

			{!isSmall && (
				<>
					<GenerateBtn isInfo={false} item={item}/>

					<Link to={`/product/${item._id}`}>
						<GenerateBtn isInfo={true} />
					</Link>
				</>
			)}
		</Box>
	);
};

export default RightSide;
