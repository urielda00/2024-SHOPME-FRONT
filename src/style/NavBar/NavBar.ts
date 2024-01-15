import React from "react";

interface Props {
	isActive: boolean;
}

export const firstBoxStyle: React.CSSProperties = {
	zIndex: 70,
	width: '250px',
	display: 'flex',
	marginRight: '230px',
	justifyContent: 'space-between',
};

export const navLinkStyle = ({ isActive }: Props) => {
	return {
		textDecoration: 'none',
		padding: isActive ? '1rem' : '1rem',
		fontWeight: isActive ? 'bold' : 'normal',
		color: isActive ? 'var(--black)' : 'var(--black)',
	};
};

export const containerLgSx = {
	':hover': { opacity: '0.5', fontSize: '18px', borderRadius: '30px' },
};

export const link: React.CSSProperties = {
	fontSize: '1.3rem',
	letterSpacing: '8px',
	color: 'var(--black)',
	textDecoration: 'none',
};

export const lgNavContainer: React.CSSProperties = {
	width: '220px',
	display: 'flex',
	marginRight: '10px',
	justifyContent: 'space-between',
};

export const baseMedSpan: React.CSSProperties = {
	top: '20px',
	width: '20px',
	height: '20px',
	right: '110px',
	textAlign: 'center',
	borderRadius: '50px',
	position: 'absolute',
	color: 'var(--black)',
	backgroundColor: '#E7CEA6',
};

export const iconMed: React.CSSProperties = {
	strokeWidth: 1,
	color: 'var(--black)',
	stroke: 'var(--white)',
};

export const iconBtnMed: React.CSSProperties = {
	marginRight: '6px',
	color: 'var(--black)',
};

export const smSpan: React.CSSProperties = {
	top: '20px',
	right: '68px',
	width: '20px',
	height: '20px',
	textAlign: 'center',
	borderRadius: '50px',
	position: 'absolute',
	color: 'var(--black)',
	backgroundColor: '#E7CEA6',
};

export const smSearchContainer: React.CSSProperties = {
	marginTop: '10%',
	marginLeft: '35%',
	marginBottom: '-7%',
};

export const smIcon: React.CSSProperties = {
	strokeWidth: 1,
	color: 'var(--black)',
	stroke: 'var(--white)',
};

export const smIconButton: React.CSSProperties = {
	marginRight: '-15px',
	color: 'var(--black)',
};

export const flex: React.CSSProperties = { display: 'flex' };
export const lgNavLink: React.CSSProperties = { ...flex, alignItems: 'center' };
export const largeArrow: React.CSSProperties = { marginLeft: '-10px', marginRight: '10px' };
export const navLgStyle: React.CSSProperties = { marginLeft: '-240px', flexWrap: 'nowrap' };
export const smIconBtn2: React.CSSProperties = { color: 'var(--black)', marginRight: '5px' };
export const outlineIcon: React.CSSProperties = { marginBottom: '-5px', marginRight: '8px' };



