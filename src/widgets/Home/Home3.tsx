import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import back1 from '../../assets/Home/3nd/thirdImg.png';
const link = '/productsList?toCategory=phone&brand=Apple';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


interface Props {
	boxStyle: React.CSSProperties;
	container: React.CSSProperties;
	imgHeight: React.CSSProperties;
	linkStyle: React.CSSProperties;
}

const Home3: FC<Props> = ({ container, imgHeight, linkStyle, boxStyle }) => {
	return (
		<Box style={container}>
			<Box>
				<img alt='' src={back1} width={'100%'} height={imgHeight.height} />
			</Box>
			<Link to={link} style={linkStyle}>
				<Box sx={{ ':hover': { opacity: '0.7' } }} style={boxStyle}>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
						Buy Now
						<ChevronRightIcon />
					</div>
				</Box>
			</Link>
		</Box>
	);
};

export default Home3;
