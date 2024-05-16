import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import * as style from '../../../style/NavBar/Open-Categories';

// TO-DO : Update the links in the categories.

const categoriesList = [
	{ name: 'Mobiles', category: 'phone' },
	{ name: 'Laptops', category: 'laptops' },
	{ name: 'Watches', category: 'watches' },
	{ name: 'Tablets', category: 'tablets' },
	{ name: 'HeadPhones', category: 'headPhones' },
	{ name: 'PC', category: 'pc' },
];

const shopList = [
	{ name: 'Shop All', link: '/productsList' },
	{ name: 'New In', link: '/productsList' },
	{ name: 'Best Offers', link: '/productsList' },
	{ name: '2023 Items', link: '/productsList' },
	{ name: '2022 Items', link: '/productsList' },
];

const supportList = [
	{ name: 'My account', link: 'underConstruction' },
	{ name: 'FAQ', link: '/underConstruction' },
	{ name: 'Terms', link: '/underConstruction' },
	{ name: 'Privacy Policy', link: 'underConstruction' },
];

const OpenCategories = ({ hover }: any) => {
	const categoriesStyle: any = (hover: any) => {
		return {
			top: '60px',
			left: '20px',
			width: '1000px',
			height: '400px',
			padding: '20px',
			position: 'absolute',
			borderRadius: '10px',
			backgroundColor: '#FCE9F1',
			justifyContent: 'space-between',
			display: hover ? 'flex' : 'none',
			boxShadow: '0 1px 2px  rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) ',
		};
	};

	return (
		<Box style={categoriesStyle(hover)}>
			<Box sx={style.childContainerStyle}>
				<h1 style={style.h1Style}>Categories</h1>
				<ul style={{ listStyle: 'none' }}>
					{categoriesList.map((item: any, index: any) => {
						return (
							<Box sx={{ ':hover': { fontSize: '20px' } }} key={index}>
								<Link style={style.linkStyle} to={`/productsList?toCategory=${item.category}`}>
									<p style={{ marginBottom: '20px' }}>{item.name}</p>
								</Link>
							</Box>
						);
					})}
				</ul>
			</Box>

			<Box sx={style.childContainerStyle}>
				<h1 style={style.h1Style}>Shop</h1>
				<ul style={{ listStyle: 'none' }}>
					{shopList.map((item: any, index: number) => {
						return (
							<Box sx={{ ':hover': { fontSize: '20px' } }} key={index}>
								<Link style={style.linkStyle} to={item.link}>
									<p style={{ marginBottom: '20px' }}>{item.name}</p>
								</Link>
							</Box>
						);
					})}
				</ul>
			</Box>

			<Box sx={style.childContainerStyle}>
				<h1 style={style.h1Style}>Support</h1>

				<ul style={{ listStyle: 'none' }}>
					{supportList.map((item: any, index: number) => {
						return (
							<Box sx={{ ':hover': { fontSize: '20px' } }} key={index}>
								<Link style={style.linkStyle} to={item.link}>
									<p style={{ marginBottom: '20px' }}>{item.name}</p>
								</Link>
							</Box>
						);
					})}
				</ul>
			</Box>
		</Box>
	);
};

export default OpenCategories;
