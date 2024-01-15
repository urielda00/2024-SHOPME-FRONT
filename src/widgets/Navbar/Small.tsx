import Search from './Widgets/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OpenMenu from './Widgets/Open-Menu';
import { Box, IconButton } from '@mui/material';
import * as style from '../../style/NavBar/NavBar';

// Icons:
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

type SmallScreenProps = {
	totalQuantity: any;
};

const SmallScreen = ({ totalQuantity }: SmallScreenProps) => {
	const { user } = useSelector((state: any) => state.user);

	return (
		<>
			<Box component='nav'>
				<Link to='/' style={style.link}>
					<StoreOutlinedIcon style={style.outlineIcon} />
					SHOPME
				</Link>
				<Box style={style.smSearchContainer}>
					<Search />
				</Box>
			</Box>
			{user ? (
				<Box component='nav' style={style.flex}>
					<Link to='/cart'>
						<IconButton style={style.smIconBtn2} size='large'>
							<ShoppingCartOutlinedIcon fontSize='large' sx={style.smIcon} />
						</IconButton>
					</Link>
					<span style={style.smSpan}>{totalQuantity}</span>
					<OpenMenu />
				</Box>
			) : (
				<Box component='nav' style={style.flex}>
					<Link to='/cart'>
						<IconButton style={style.smIconButton} size='large'>
							<ShoppingCartOutlinedIcon fontSize='large' sx={style.smIcon} />
						</IconButton>
					</Link>
					<Link to='/login'>
						{' '}
						<IconButton style={style.smIconBtn2} size='large'>
							<PermIdentityOutlinedIcon fontSize='large' sx={style.smIcon} />
						</IconButton>
						<span style={style.smSpan}>{totalQuantity}</span>
					</Link>
					<OpenMenu />
				</Box>
			)}
		</>
	);
};

export default SmallScreen;
