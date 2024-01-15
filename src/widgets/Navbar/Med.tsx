import Search from './Widgets/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import OpenMenu from './Widgets/Open-Menu';
import { Box, IconButton } from '@mui/material';
import * as style from '../../style/NavBar/NavBar';

//Icons:
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

//Type:
type MediumScreenProps = {
	totalQuantity: any;
};

const MediumScreen = ({ totalQuantity }: MediumScreenProps) => {
	const { user } = useSelector((state: any) => state.user);

	return (
		<>
			<Box component='nav'>
				<Link to='/' style={style.link}>
					<StoreOutlinedIcon style={style.outlineIcon} />
					SHOPME
				</Link>
			</Box>

			<Box sx={{ marginRight: '-30px' }}>
				<Search />
			</Box>

			<Box component='nav' style={{ display: 'flex' }}>
				<Link to='/cart'>
					<IconButton style={style.link} size='large'>
						<ShoppingCartOutlinedIcon fontSize='large' sx={style.iconMed} />
					</IconButton>

					{user ? (
						<span
							style={{
								...style.baseMedSpan,
								right: '77px',
							}}
						>
							{totalQuantity}
						</span>
					) : (
						<span
							style={{
								...style.baseMedSpan,
								right: '110px',
							}}
						>
							{totalQuantity}
						</span>
					)}
				</Link>

				<IconButton style={style.iconBtnMed} size='large'>
					{user ? (
						<div hidden></div>
					) : (
						<Link to='/login'>
							<PermIdentityOutlinedIcon fontSize='large' sx={style.iconMed} />
						</Link>
					)}
				</IconButton>

				<OpenMenu />
			</Box>
		</>
	);
};

export default MediumScreen;
