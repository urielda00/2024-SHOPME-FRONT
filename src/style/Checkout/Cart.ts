import React from 'react';

export const childContainer1 = {
	height: '380px',
	overflowY: 'scroll',
	overflowX: 'hidden',
	width: 'var(--width)',
	justifyContent: 'space-between',
	display: { xs: 'none', sm: 'flex', md: 'flex' },
};

export const liStyle: React.CSSProperties = {
	display: 'flex',
	listStyle: 'var(--listStyle)',
	justifyContent: 'space-between',
};

export const insideListContainerStyle: React.CSSProperties = {
	width: 'var(--width)',
	display: 'flex',
	marginTop: '15px',
	alignItems: 'center',
	justifyContent: 'space-around',
};

export const insideListSecondContainerStyle: React.CSSProperties = {
	width: '40%',
	display: 'flex',
	alignItems: 'center',
};

export const insideListMiddleContainerStyle: React.CSSProperties = {
	width: '60%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-around',
};
