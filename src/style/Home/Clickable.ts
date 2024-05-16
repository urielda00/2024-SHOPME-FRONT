import React from 'react';

export const containerStyle: React.CSSProperties = {
	width: 'var(--width)',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
	backgroundColor: 'white',
	justifyContent: 'center',
	boxShadow: '-1px -4px 43px -12px rgba(0,0,0,1)',
};

export const h1Style: React.CSSProperties = {
	marginBottom: '10px',
	borderBottom: '1px solid black',
	fontFamily: 'Georgia, sans-serif	',
};

export const inlineContainerStyle: React.CSSProperties = {
	width: 'var(--width)',
	height: '10vh',
	display: 'flex',
	marginBottom: '-50px',
	justifyContent: 'center',
};


export const secondInlineContainerStyle: React.CSSProperties = {
	width: '90%',
	height: '75vh',
	padding: '20px',
	display: 'flex',
	marginBottom: '-20px',
	backgroundColor: 'white',
	justifyContent: 'space-between',
};

export const smallImagesStyle: React.CSSProperties = {
	width: '46%',
	height: '35vh',
	backgroundRepeat: ' no-repeat',
	backgroundSize: 'cover',
	backgroundBlendMode: 'multiply',
	marginLeft: '10px',
	transition: 'transform 0.4s ease',
};

export const bigImageStyle: React.CSSProperties = {
	width: '50%',
	height: '75vh',
	borderRadius: '30px',
	backgroundRepeat: ' no-repeat',
	backgroundSize: 'cover',
	backgroundBlendMode: 'multiply',
	marginLeft: '10px',
	transition: 'transform 0.4s ease',
};

export const linkStyle: React.CSSProperties = {
	width: '150px',
	textAlign: 'center',
	textDecoration: 'none',
	color: 'var(--black)',
};

// Mobile
export const mobileLinkStyle: React.CSSProperties = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	borderRadius: '30px',
};

export const mobileContainerStyle: React.CSSProperties = {
	width: '100%',
	height: '200%',
	padding: '10px',
	display: 'flex',
	textAlign: 'center',
	flexDirection: 'column',
	backgroundColor: 'white',
	justifyContent: 'center',
};