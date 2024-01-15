import React from 'react';

// generate button:
export const baseStyle = {
	marginLeft: '-20px',
	backgroundColor: 'var(--itemInListButtonBackground)',
	':hover': { backgroundColor: 'var(--itemInListButtonHoverBackground)' },
};

// lg
export const lgStyle: React.CSSProperties = {
	width: '180px',
	height: '40px',
};

//med
export const mdStyle: React.CSSProperties = {
	width: '130px',
	height: '60px',
};

// sm
export const smStyle: React.CSSProperties = {
	width: '60px',
	height: '50px',
};

export const baseInfo: React.CSSProperties = {
	marginLeft: '-20px',
	backgroundColor: 'var(--itemInListMoreInfoButton)',
};

export const lgInfo: React.CSSProperties = {
	width: '180px',
	height: '40px',
};

export const mdInfo: React.CSSProperties = {
	width: '130px',
	height: '60px',
};

export const smInfo: React.CSSProperties = {
	width: '60px',
	height: '50px',
};

//left side
export const baseImg: React.CSSProperties = {
	objectFit: 'cover',
	borderRadius: '10px',
};

export const lgImg: React.CSSProperties = {
	height: '100%',
	width: '250px',
};

export const mdImg: React.CSSProperties = {
	height: '90%',
	width: '200px',
};

export const sImg: React.CSSProperties = {
	height: '140px',
	width: '150px',
};

export const internalLeftContainer: React.CSSProperties = {
	display: 'flex',
	marginLeft: '20px',
	flexDirection: 'column',
	alignContent: 'space-around',
};

export const shortDP: React.CSSProperties = {
	marginTop: '10px',
	color: 'var(--itemInListParagraphColor)',
};
export const categoryP: React.CSSProperties = {
	marginTop: '5px',
	color: 'var(--itemInListParagraphColor)',
};

export const lgPrice: React.CSSProperties = {
	marginTop: '40px',
	marginLeft: '10px',
	fontFamily: 'sans-serif',
};

export const mdPrice: React.CSSProperties = {
	marginTop: '15px',
	marginLeft: '5px',
	fontFamily: 'sans-serif',
};

export const random: React.CSSProperties = {
	marginTop: '5px',
	fontSize: '14px',
	color: 'var(--itemInListParagraphColor)',
};

// product in list
export const baseContainer: React.CSSProperties = {
	width: '100%',
	marginBottom: '1px',
	borderBottom: '1px solid grey',
	backgroundColor: 'var(--white)',
	justifyContent: 'space-between',
	boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset',
};

export const containerLStyle = {
	height: '280px',
	display: { xs: 'none', sm: 'none', md: 'flex' },
	padding: '20px',
};

export const containerMStyle = {
	height: '240px',
	display: { xs: 'none', sm: 'flex', md: 'none' },
	padding: '15px',
};

export const containerSStyle = {
	height: '220px',
	display: { xs: 'flex', sm: 'none', md: 'none' },
	padding: '20px',
};

// right side
export const baseRightContainer: React.CSSProperties = {
	height: '80%',
	display: 'flex',
	marginTop: '10px',
	alignItems: 'center',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
};

export const lgContainer: React.CSSProperties = {
	width: '20%',
};

export const mdContainer: React.CSSProperties = {
	width: '30%',
	marginRight: '-10px',
};

export const smContainer: React.CSSProperties = {
	height: '80%',
	width: '150px',
	display: 'flex',
	position: 'relative',
	flexDirection: 'column',
};

export const h3Style: React.CSSProperties = {
	marginTop: '40px',
	marginLeft: '25px',
	fontFamily: 'sans-serif',
};

export const smallInternalContainer: React.CSSProperties = {
	top: '65px',
	width: '105%',
	height: '80%',
	display: 'flex',
	alignItems: 'end',
	position: 'absolute',
	flexDirection: 'column',
	justifyContent: 'space-between',
};
