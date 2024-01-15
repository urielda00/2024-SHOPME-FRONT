import React from 'react';

// Login
export const containerStyle = {
	borderRadius: '10px',
	backgroundColor: 'var(--white)',
	height: { md: '550px', sm: '550px', xs: '600px' },
	boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

export const insideContainerStyle: React.CSSProperties = {
	marginTop: 1,
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
};

// Error Messages
export const ErrorContainerStyle: React.CSSProperties = {
	zIndex: 20,
	width: '10%',
	top: '120px',
	left: '20px',
	position: 'absolute',
};
