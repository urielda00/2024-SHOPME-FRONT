import React from 'react';

export const containerLStyle: React.CSSProperties = {
	width: '100%',
	float: 'none',
	border: 'none',
	display: 'flex',
	height: '100vh',
};

export const internalContainer: React.CSSProperties = {
	width: '100%',
	height: 'auto',
	display: 'flex',
	flexDirection: 'column',
};

export const filterContainer: React.CSSProperties = {
	width: '20%',
	height: '120vh',
	backgroundColor: 'var(--containerWhiteBackground)',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.1) inset',
};

export const lgContainer: React.CSSProperties = {
	width: '80%',
	height: 'auto',
};

export const smContainer: React.CSSProperties = {
	width: '100%',
	height: 'auto',
};
