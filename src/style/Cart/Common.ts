import React from 'react';

// Containers - useCart:
export const containerBaseStyle: React.CSSProperties = {
	flex: '1',
	display: 'flex',
	justifyContent: 'center',
	backgroundColor: 'var(--containerPinkBackground)',
};

export const containerSmallStyle: React.CSSProperties = { height: '100vh' };

export const containerMediumStyle: React.CSSProperties = {
	height: '85vh',
	alignItems: 'center',
};

export const containerLargeStyle: React.CSSProperties = {
	height: '83.4vh',
	alignItems: 'center',
};

// In-components common style:
export const baseContainer: React.CSSProperties = {
	overflow: 'hidden',
	borderRadius: '20px',
	backgroundColor: '#fff',
};

export const baseListMedSm: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	width: 'var(--width)',
	listStyle: 'var(--listStyle)',
	justifyContent: 'space-between',
};

export const checkoutBtnSx = {
	color: 'var(--white)',
	bgcolor: 'var(--cartBtnDarkGrey)',
	':hover': { color: 'var(--black)', bgcolor: 'var(--cartBtnBrightGreen)' },
};

export const checkoutBtn: React.CSSProperties = {
	marginTop: '10px',
	textAlign: 'center',
};

export const coupon: React.CSSProperties = {
	width: '96%',
	marginTop: '5px',
	color: 'var(--black)',
	backgroundColor: '#EDC6B1',
};

export const LgMdHeader: React.CSSProperties = {
	color: 'var(--black)',
	fontFamily: '"Tilt Prism", cursive',
};
