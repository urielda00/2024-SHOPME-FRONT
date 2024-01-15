import React from 'react';


export const baseContainer: React.CSSProperties = {
	width: '100%',
	display: 'flex',
	height: '100vh',
};


export const rightSideContainer: React.CSSProperties = {
	width: '910px',
	height: '100vh',
	padding: '20px',
};


export const leftImage: React.CSSProperties = {
	width: '610px',
	height: '100vh',
	padding: '20px',
	display: 'flex',
	alignItems: 'start',
	justifyContent: 'center',
};

export const border: React.CSSProperties = {
	borderBottom: '0.5px solid grey',
};

export const rightInner: React.CSSProperties = {
	width: '800px',
	height: '600px',
};

export const category: React.CSSProperties = {
	color: 'grey',
	marginTop: '20px',
	fontWeight: 'lighter',
};


export const addToCartBtn: React.CSSProperties = {
	marginRight: '10px',
	backgroundColor: '#F24C3D',
};


export const leftInner: React.CSSProperties = {
	top: '100px',
	width: '610px',
	height: '600px',
	display: 'flex',
	position: 'sticky',
	alignItems: 'center',
	justifyContent: 'space-around',
};

export const sImagesContainer: React.CSSProperties = {
	width: '50px',
	height: '450px',
	display: 'flex',
	marginRight: '-20px',
	flexDirection: 'column',
};

export const sImages: React.CSSProperties = {
	width: '50px',
	height: '70px',
	objectFit: 'cover',
	borderRadius: '15px',
	marginBottom: '15px',
	border: '0.5px solid grey',
};

export const lgImage: React.CSSProperties = {
	width: '400px',
	height: '540px',
	objectFit: 'contain',
	borderRadius: '10px',
};
