import { useState } from 'react';
import { Box } from '@mui/material';
import Search from './Widgets/Search';
import { NavLink, Link } from 'react-router-dom';
import { UserToggle } from './Widgets/UserToggle';
import ShoppingList from './Widgets/ShoppingList';
import * as style from '../../style/NavBar/NavBar';

//Icons:
import OpenCategories from './Widgets/OpenCategories';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const LargeScreen = () => {
	const [hover, setHover] = useState(false);

	return (
		<>
			<Box component='nav' style={style.firstBoxStyle}>
				<NavLink style={style.navLinkStyle} to='/contact'>
					CONTACT US
				</NavLink>
				<Box onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={style.lgNavLink}>
					<Box sx={style.containerLgSx}>
						<NavLink style={style.navLinkStyle} to='/productsList'>
							SHOP
						</NavLink>
					</Box>
					<OpenCategories hover={hover} />
					<ArrowDropDownIcon style={style.largeArrow} />
				</Box>
			</Box>

			<Box component='nav' style={style.navLgStyle}>
				<Link to='/' style={style.link}>
					<StoreOutlinedIcon style={style.outlineIcon} />
					SHOPME
				</Link>
			</Box>

			<Box component='nav' style={style.lgNavContainer}>
				<Search />
				<UserToggle />
				<ShoppingList />
			</Box>
		</>
	);
};

export default LargeScreen;
