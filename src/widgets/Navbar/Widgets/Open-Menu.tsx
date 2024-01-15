import * as React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import { loggedOut } from '../../../features/userSlice';
import * as style from '../../../style/NavBar/Open-Menu';
import { resetOnLogOut } from '../../../features/cartSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';


//Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';

type Anchor = 'left';

const OpenMenu = () => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state: any) => state.user);
	const handleLogout = () => {
		dispatch(loggedOut());
		dispatch(resetOnLogOut());
	};

	const [state, setState] = React.useState({ left: false });
	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (event && event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
			return;
		}
		setState({ ...state, [anchor]: open });
	};

	const list = (anchor: Anchor) => (
		<Mui.Box sx={style.openMenu} role='presentation' onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
			<Mui.List>
				<Link style={style.linkStyle} to='/'>
					<Mui.ListItemButton style={style.link}>
						<Mui.ListItem key={1}>
							<Mui.ListItemText primary='Home' />
						</Mui.ListItem>
					</Mui.ListItemButton>
				</Link>

				<Link style={style.linkStyle} to='/productsList'>
					<Mui.ListItemButton style={style.link}>
						<Mui.ListItem key={2}>
							<Mui.ListItemText primary='Shop' />
						</Mui.ListItem>
					</Mui.ListItemButton>
				</Link>

				{user ? (
					<Link style={style.linkStyle} to='/' onClick={handleLogout}>
						<Mui.ListItemButton style={style.link}>
							<Mui.ListItem key={3}>
								<Mui.ListItemText primary='Log Out' />
							</Mui.ListItem>
						</Mui.ListItemButton>
					</Link>
				) : (
					<div hidden></div>
				)}

				<Link style={style.linkStyle} to='/contact'>
					<Mui.ListItemButton style={style.link}>
						<Mui.ListItem key={4}>
							<Mui.ListItemText primary='Contact' />
						</Mui.ListItem>
					</Mui.ListItemButton>
				</Link>

				<Mui.Stack>
					<Mui.Button style={{ color: 'var(--black)' }} onClick={toggleDrawer('left', true)}>
						<CloseOutlinedIcon />
					</Mui.Button>
				</Mui.Stack>
			</Mui.List>
		</Mui.Box>
	);

	//TO-DO: Add "see full cart" button
	return (
		<div style={{ marginLeft: '-20px' }}>
			{
				<React.Fragment>
					<IconButton style={{ color: 'var(--black)' }} onClick={toggleDrawer('left', true)} size='large'>
						<MenuIcon fontSize='large' sx={style.menuIconSx} />
					</IconButton>

					<Mui.SwipeableDrawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)} onOpen={toggleDrawer('left', false)}>
						{list('left')}
					</Mui.SwipeableDrawer>
				</React.Fragment>
			}
		</div>
	);
};

export default OpenMenu;
