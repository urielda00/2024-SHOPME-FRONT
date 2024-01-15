import React from "react";



export const link: React.CSSProperties = { textDecoration: 'none', color: 'black' };

export const imgStyle: React.CSSProperties = {
	width: '50px',
	height: '50px',
	marginRight: '15px',
	borderRadius: '5px',
	marginLeft: '-15px',
};

export const ListItemButtonStyle: React.CSSProperties = {
	color: 'var(--black)',
	borderBottom: '1px var(--black) outset',
};

export const baseListStyle: React.CSSProperties = {
	overflowY: 'auto',
	maxHeight: '300px',
	borderRadius: '5px',
	position: 'absolute',
	scrollbarColor: 'red ',
	backgroundColor: 'var(--navCreamColor)',
};

export const lgList: React.CSSProperties = {
	top: '65px',
	right: '120px',
	boxShadow: '-12px 17px 27px -5px rgba(0,0,0,0.32)',
};

export const smList: React.CSSProperties = {
	top: '130px',
	left: '20px',
	direction: 'rtl',
	boxShadow: '12px 17px 27px 5px rgba(0,0,0,0.32)',
};

export const mdList: React.CSSProperties = {
	top: '90px',
	left: '30%',
	boxShadow: '-8px 17px 20px -5px rgba(0,0,0,0.32)',
};