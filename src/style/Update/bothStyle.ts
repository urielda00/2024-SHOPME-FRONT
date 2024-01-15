import React from 'react';

// update:
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

export const stepsP: React.CSSProperties = {
	top: '-45px',
	left: '-105px',
	fontSize: '15px',
	position: 'absolute',
	color: 'var(--darkGrey)',
};

export const stepIconButton: React.CSSProperties = {
	top: '-48px',
	left: '-125px',
	fontSize: '15px',
	position: 'absolute',
	color: 'var(--darkGrey)',
};
