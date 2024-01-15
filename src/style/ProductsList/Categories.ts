import React from "react";

// Top categories:
export const baseContainer: React.CSSProperties = {
	width: '100%',
	marginBottom: '2px',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#ECE8DD',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 0, 0, 0.1) inset',
};


//Large Screen
export const containerLStyle = {
	height: '90px',
	display: { xs: 'none', sm: 'none', md: 'flex' },
};

//Medium Screen
export const containerMStyle = {
	height: '70px',
	display: { xs: 'none', sm: 'flex', md: 'none' },
};

//Small Screen
export const containerSStyle = {
	height: '80px',
	display: { xs: 'flex', sm: 'none', md: 'none' },
};

// Generate button
export const buttonStyle = {
	marginLeft: '15px',
	marginRight: '15px',
	color: 'var(--black)',
	':hover': { color: 'grey' },
};

export const buttonMStyle = {
	fontSize: '10px',
	marginLeft: '10px',
	marginRight: '10px',
	color: 'var(--black)',
	':hover': { color: 'grey' },
};