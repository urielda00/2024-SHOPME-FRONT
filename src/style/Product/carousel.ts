import React from 'react';

export const container: React.CSSProperties = {
	height: '400px',
	display: 'flex',
	alignItems: 'center',
	width: 'var(--width)',
	flexDirection: 'column',
	justifyContent: 'start',
};

export const carouselItem: React.CSSProperties = {
	width: '170px',
	padding: '5px',
	display: 'flex',
	height: '270px',
	textAlign: 'center',
	alignItems: 'center',
	position: 'relative',
	flexDirection: 'column',
};

export const img: React.CSSProperties = {
	width: '160px',
	height: '150px',
	objectFit: 'cover',
	borderRadius: '10px',
};

export const pPrice: React.CSSProperties = {
	bottom: '10px',
	marginTop: '20px',
	position: 'absolute',
};
