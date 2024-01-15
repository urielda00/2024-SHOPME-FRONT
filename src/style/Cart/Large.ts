import React from 'react';

export const container: React.CSSProperties = {
	width: '85%',
	height: '70vh',
	padding: '40px',
	minWidth: '900px',
	flexDirection: 'row',
};

export const checkoutBtn: React.CSSProperties = {
	width: '96%',
	height: '50px',
	marginTop: '10px',
};

export const childContainer1: React.CSSProperties = {
	width: '65%',
	overflowY: 'scroll',
	overflowX: 'hidden',
};

export const listStyle: React.CSSProperties = {
	listStyle: 'var(--listStyle)',
};

export const liInternalContainer: React.CSSProperties = {
	width: '90%',
	display: 'flex',
	marginTop: '15px',
	alignItems: 'center',
	justifyContent: 'space-around',
};

export const secondLiInternalContainer: React.CSSProperties = {
	width: '40%',
	display: 'flex',
	alignItems: 'center',
};

export const removeIconContainer: React.CSSProperties = {
	width: '60%',
	alignItems: 'center',
};

export const inputLabelStyle: React.CSSProperties = {
	opacity: '0.8',
	color: 'var(--black)',
};

export const totalPriceContainer: React.CSSProperties = {
	alignItems: 'end',
	marginTop: '70px',
};

export const leftContainer: React.CSSProperties = {
	display: 'flex',
	alignItems: 'end',
};

export const baseLayoutStyle = {
	display: 'flex',
	justifyContent: 'space-between',
};

export const summeryH1: React.CSSProperties = {
	marginTop: '15px',
	marginLeft: '-60px',
	color: 'var(--black)',
	fontFamily: '"Tilt Prism", cursive',
};

export const emptyMessageContainer: React.CSSProperties = {
	color: 'grey',
	fontSize: '20px',
	marginTop: '40px',
};

export const grey: React.CSSProperties = { color: 'grey' };
export const deleteIcon: React.CSSProperties = { color: '#4E3636', marginTop: '-5px' };
export const linkStyle: React.CSSProperties = { marginTop: '25px', color: 'var(--black)' };
