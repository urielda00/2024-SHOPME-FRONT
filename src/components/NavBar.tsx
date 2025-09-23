import * as React from 'react';
import { Toolbar } from '@mui/material';
import { useAppSelector } from '../app/hooks';
import * as style from '../style/NavBar/Component';
import { lazy, Suspense, useState, useEffect } from 'react';

// Lazy load screens
const LargeScreen = lazy(() => import('../widgets/Navbar/Large'));
const MediumScreen = lazy(() => import('../widgets/Navbar/Med'));
const SmallScreen = lazy(() => import('../widgets/Navbar/Small'));

const NavBar: React.FunctionComponent = () => {
	const totalQuantity = useAppSelector((state) => state.allCart.totalQuantity);
	const [screen, setScreen] = useState<'large' | 'medium' | 'small'>('large');

	// Determine current screen size
	useEffect(() => {
		const updateScreen = () => {
			const width = window.innerWidth;
			if (width >= 960) setScreen('large');
			else if (width >= 600) setScreen('medium');
			else setScreen('small');
		};

		updateScreen();
		window.addEventListener('resize', updateScreen);
		return () => window.removeEventListener('resize', updateScreen);
	}, []);

	// Render the correct screen component
	const renderScreen = () => {
		switch (screen) {
			case 'large':
				return <LargeScreen />;
			case 'medium':
				return <MediumScreen totalQuantity={totalQuantity} />;
			case 'small':
				return <SmallScreen totalQuantity={totalQuantity} />;
		}
	};

	return (
		<Toolbar disableGutters style={style.Container}>
			<Suspense fallback={<div />}>{renderScreen()}</Suspense>
		</Toolbar>
	);
};

export default NavBar;
