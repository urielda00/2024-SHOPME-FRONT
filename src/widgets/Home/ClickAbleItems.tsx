import { Box } from '@mui/material';
import * as style from '../../style/Home/Clickable';
import img1 from '../../assets/Home/6nd/buds2.jpg';
import img2 from '../../assets/Home/6nd/flip4.jpg';
import img3 from '../../assets/Home/6nd/watch5.jpg';
import img4 from '../../assets/Home/6nd/zFold.jpg';
import img5 from '../../assets/Home/6nd/bigPhoto1.jpg';

import { Link } from 'react-router-dom';

const GenerateItems = ({ to, src }: { to: string; src: string }) => {
	return (
		<Box style={style.smallImagesStyle} sx={{ ':hover': { transform: 'scale(1.1)' } }}>
			<Link to={to}>
				<img alt='' style={{ width: 'var(--width)', height: '95%', borderRadius: '30px', objectFit: 'cover' }} src={src} />
			</Link>
		</Box>
	);
};

const ClickAbleItems = () => {
	return (
		<Box sx={style.containerStyle}>
			<h1 style={style.h1Style}>Offers</h1>
			<Box sx={style.inlineContainerStyle}>
				<Link to='/productsList?toCategory=phone' style={style.linkStyle}>
					<h3>Mobile</h3>
				</Link>
				<Link to='/productsList?toCategory=watches' style={style.linkStyle}>
					<h3>Watches</h3>
				</Link>
				<Link to='/productsList?toCategory=headphons' style={style.linkStyle}>
					<h3>HeadPhones</h3>
				</Link>
				<Link to='/productsList?toCategory' style={style.linkStyle}>
					<h3>See All</h3>
				</Link>
			</Box>

			<Box sx={style.secondInlineContainerStyle}>
				{/* the left- four boxes */}
				<Box sx={{ width: '48%', height: '75vh', display: 'flex', flexDirection: 'column' }}>
					<Box sx={{ width: 'var(--width)', height: '40vh', display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
						<GenerateItems to='/productsList?toCategory=headphones' src={img1} />
						<GenerateItems to='/productsList?toCategory=phone&brand=Samsung' src={img2} />
					</Box>

					<Box sx={{ width: 'var(--width)', height: '40vh', display: 'flex', padding: '10px', justifyContent: 'space-between' }}>
						<GenerateItems to='/productsList?toCategory=watches' src={img3} />
						<GenerateItems to='/productsList?toCategory=phone&brand=Samsung' src={img4} />
					</Box>
				</Box>

				{/* the right big box */}
				<Box style={style.bigImageStyle} sx={{ ':hover': { transform: 'scale(1.07)' } }}>
					<Link to='/productsList?toCategory=phone&brand=Apple'>
						<img alt='' style={{ width: 'var(--width)', height: '95%', borderRadius: '30px', objectFit: 'cover' }} src={img5} />
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default ClickAbleItems;
