import React from 'react';

// Carousel
export const container: React.CSSProperties = {
	height: '100vh',
	alignItems: 'center',
	display: 'inline-flex',
	justifyContent: 'center',
};

export const h1: React.CSSProperties = { position: 'absolute' };

export const img: React.CSSProperties = {
	width: '80%',
	height: '75vh',
	objectFit: 'contain',
	borderRadius: '30px',
};

// CarouselView
export const viewContainer: React.CSSProperties = {
	width: 'var(--width)',
	display: 'flex',
	overflow: 'hidden',
	alignItems: 'center',
	position: 'relative',
	justifyContent: 'center',
};

export const inlineViewContainer: React.CSSProperties = {
	height: '100vh',
	whiteSpace: 'nowrap',
	transition: 'transform 1.3s',
	boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
};

export const infoContainer: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export const secondContainerStyle: React.CSSProperties = {
	top: '91vh',
	height: '60px',
	width: '200px',
	display: 'flex',
	marginTop: '-100px',
	alignItems: 'center',
	borderRadius: '50px',
	position: 'absolute',
	backgroundColor: 'var(--black)',
	justifyContent: 'center',
};

export const linkStyle: React.CSSProperties = {
	color: 'white',
	fontSize: '20px',
	textDecoration: 'none',
};

export const buttonContainer: React.CSSProperties = {
	top: '97vh',
	left: '0vw',
	width: 'var(--width)',
	height: '5vh',
	display: 'flex',
	marginTop: '-60px',
	position: 'absolute',
	justifyContent: 'space-evenly',
};
