import * as React from 'react';
import { Toolbar } from '@mui/material';
import { useAppSelector } from '../app/hooks';
import MediumScreen from '../widgets/Navbar/Med';
import LargeScreen from '../widgets/Navbar/Large';
import SmallScreen from '../widgets/Navbar/Small';
import * as style from '../style/NavBar/Component';

// The component
const NavBar: React.FunctionComponent = () => {
	const { totalQuantity } = useAppSelector((state) => state.allCart);
	return (
		<>
			{/* for large screens: */}
			<Toolbar disableGutters style={style.Container} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
				<LargeScreen />
			</Toolbar>

			{/* for medium screens: */}
			<Toolbar disableGutters style={style.Container} sx={{ display: { xs: 'none', sm: 'flex', md: 'none' } }}>
				<MediumScreen totalQuantity={totalQuantity} />
			</Toolbar>

			{/* for small screens: */}
			<Toolbar disableGutters style={style.Container} sx={{ display: { xs: 'flex', sm: 'none', md: 'none' } }}>
				<SmallScreen totalQuantity={totalQuantity} />
			</Toolbar>
		</>
	);
};

export default NavBar;
