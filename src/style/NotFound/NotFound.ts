import React from 'react';

export const Container: React.CSSProperties = {
	float: 'none',
	height: `83vh`,
	display: 'flex',
	alignItems: 'center',
	width: 'var(--width)',
	justifyContent: 'center',
	fontFamily: '"montserrat",sans-serif',
	backgroundImage: 'linear-gradient(125deg,#6a89cc,#b8e994)',
};

export const InsideDiv: React.CSSProperties = {
	top: '50%',
	marginTop: '3%',
	color: '#343434',
	textAlign: 'center',
	position: 'absolute',
	width: 'var(--width)',
	transform: 'translateY(-50%)',
};

export const buttonStyle: React.CSSProperties = {
	marginTop: '10px',
	borderRadius: '20px',
	color: 'var(--black)',
	backgroundColor: 'var(--white)',
};
