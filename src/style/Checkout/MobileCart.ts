import React from 'react';

export const childContainer1 = {
	height: '450px',
	overflowY: 'scroll',
	overflowX: 'hidden',
	width: 'var(--width)',
	justifyContent: 'space-between',
	display: { xs: 'flex', sm: 'flex', md: 'flex' },
};

export const liStyle: React.CSSProperties = {
	display: 'flex',
	listStyle: 'var(--listStyle)',
	justifyContent: 'space-between',
};

export const listContainer = {
	display: 'flex',
	marginTop: '10px',
	alignItems: 'start',
	marginBottom: '12px',
	width: 'var(--width)',
};

export const listImage: React.CSSProperties = {
	marginTop: '10px',
	objectFit: 'cover',
	marginBottom: '12px',
	borderRadius: '15px',
};

export const productNameStyle: React.CSSProperties = {
	fontSize: '20px',
	marginTop: '18px',
	marginLeft: '10px',
};

export const productPriceStyle: React.CSSProperties = {
	color: 'grey',
	marginTop: '5px',
	textAlign: 'left',
	marginLeft: '11px',
};
