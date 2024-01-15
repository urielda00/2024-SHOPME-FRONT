import React from 'react';
import back1 from '../../assets/Home/background.jpg';

// Container
export const container1: React.CSSProperties = {
	width: 'var(--width)',
	float: 'none',
	border: 'none',
	display: 'flex',
	overflow: 'hidden',
	alignItems: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: ' no-repeat',
	backgroundBlendMode: 'multiply',
	backgroundImage: `url(${back1})`,
};

export const lgContainer1: React.CSSProperties = {
	height: '84vh',
};

export const smContainer1: React.CSSProperties = {
	height: '40vh',
};

// Link
export const lgLink1: React.CSSProperties = {
	top: '5%',
	left: '52%',
};

export const mdLink1: React.CSSProperties = {
	top: '25%',
	left: '65%',
};

export const smLink1: React.CSSProperties = {
	top: '25%',
	left: '33%',
};

export const link1: React.CSSProperties = {
	width: '160px',
	height: '60px',
	position: 'relative',
	backgroundColor: '#FC2947',
};
