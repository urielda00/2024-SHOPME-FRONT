import React from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import DisplayAvatar from './DisplayAvatar';
import { loggedOut } from '../../../features/userSlice';
import { resetOnLogOut } from '../../../features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';

//Icons
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export const UserToggle = () => {
	const dispatch = useAppDispatch();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef<HTMLButtonElement>(null);

	// User Auth
	const { user } = useAppSelector((state) => state.user);
	const isLogged = window.sessionStorage.getItem('isLogged');

	const handleLogOut = () => {
		window.sessionStorage.removeItem('logoutIndicator');
		dispatch(loggedOut());
		dispatch(resetOnLogOut());
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event: Event | React.SyntheticEvent) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return;
		}
		setOpen(false);
	};

	function handleListKeyDown(event: React.KeyboardEvent) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === 'Escape') {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<>
			<IconButton
				ref={anchorRef}
				aria-haspopup='true'
				onClick={handleToggle}
				id='composition-button'
				aria-expanded={open ? 'true' : undefined}
				sx={{ display: { xs: 'none', md: 'flex' } }}
				style={{ marginLeft: '10px', color: 'black' }}
				aria-controls={open ? 'composition-menu' : undefined}
			>
				{user && isLogged === 'true' ? <DisplayAvatar /> : <PermIdentityOutlinedIcon />}
			</IconButton>

			<Mui.Popper open={open} anchorEl={anchorRef.current} role={undefined} placement='bottom-end' transition disablePortal>
				{({ TransitionProps, placement }) => (
					<Mui.Grow
						{...TransitionProps}
						style={{
							transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
						}}
					>
						{user && isLogged === 'true' ? (
							<Mui.Paper style={{ backgroundColor: 'var(--navCreamColor)' }}>
								<Mui.ClickAwayListener onClickAway={handleClose}>
									<Mui.MenuList autoFocusItem={open} id='composition-menu' aria-labelledby='composition-button' onKeyDown={handleListKeyDown}>
										<Mui.MenuItem onClick={handleLogOut}>Logout</Mui.MenuItem>
									</Mui.MenuList>
								</Mui.ClickAwayListener>
							</Mui.Paper>
						) : (
							<Mui.Paper style={{ backgroundColor: 'var(--navCreamColor)' }}>
								<Mui.ClickAwayListener onClickAway={handleClose}>
									<Mui.MenuList autoFocusItem={open} id='composition-menu' aria-labelledby='composition-button' onKeyDown={handleListKeyDown}>
										<Link style={linkStyle} to='/login'>
											<Mui.MenuItem onClick={handleClose}>Login</Mui.MenuItem>
										</Link>

										<Mui.Divider />

										<Link style={linkStyle} to='/register'>
											<Mui.MenuItem onClick={handleClose}>Register</Mui.MenuItem>
										</Link>
									</Mui.MenuList>
								</Mui.ClickAwayListener>
							</Mui.Paper>
						)}
					</Mui.Grow>
				)}
			</Mui.Popper>
		</>
	);
};

const linkStyle = {
	textDecoration: 'none',
	color: 'black',
};
