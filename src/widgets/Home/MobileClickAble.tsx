import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import * as style from '../../style/Home/Clickable';
import clickableData from '../../utils/data/clickAbleData';

// Local images
import img1 from '../../assets/Home/6nd/buds2.jpg';
import img2 from '../../assets/Home/6nd/flip4.jpg';
import img3 from '../../assets/Home/6nd/watch5.jpg';
import img4 from '../../assets/Home/6nd/zFold.jpg';

//: FC<ClickAbleItemsProps>{ to, img }
const MobileClickAble: FC = () => {
	return (
		<Box sx={style.mobileContainerStyle}>
			<h1 style={{ marginBottom: '30px', fontFamily: 'Georgia, sans-serif	', borderBottom: '1px solid black' }}>Offers</h1>
			{clickableData.map((image: any, index: number) => (
				<Box key={index}>
					<Link to={image.to}>
						<img alt='' style={style.mobileLinkStyle} src={image.src} />
					</Link>
				</Box>
			))}
		</Box>
	);
};

export default MobileClickAble;
