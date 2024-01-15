import React, { CSSProperties } from 'react';

const containerStyle = {
	borderRadius: '10px',
	backgroundColor: 'var(--white)',
	height: { md: '550px', sm: '550px', xs: '600px' },
	boxShadow: '-11px 6px 26px -14px rgba(0,0,0,0.52)',
};

const insideContainerStyle: React.CSSProperties = {
	marginTop: 1,
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
};

const stepsP: CSSProperties = {
	top: '-45px',
	left: '-105px',
	fontSize: '15px',
	color: '#27374D',
	position: 'absolute',
};

const stepIconButton: CSSProperties = {
	top: '-48px',
	left: '-125px',
	fontSize: '15px',
	color: '#27374D',
	position: 'absolute',
};

export { containerStyle, insideContainerStyle, stepsP, stepIconButton };
