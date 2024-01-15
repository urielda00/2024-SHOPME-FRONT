import React from 'react';

// Container
const lgContainer3: React.CSSProperties = {
	height: '100vh',
};

const smContainer3: React.CSSProperties = {
	height: '50vh',
};

const Container3: React.CSSProperties = {
	display: 'flex',
	width: 'var(--width)',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'var(--black)',
};

// Image
const imgHeight3: React.CSSProperties = {
	height: '80%',
};

const smImgHeight3: React.CSSProperties = {
	height: '70%',
};

// Link
const lgLink3: React.CSSProperties = { fontSize: '20px' };
const smLink3: React.CSSProperties = { fontSize: '15px' };
const link3: React.CSSProperties = { color: 'var(--black)', textDecoration: 'none' };

// Inline Container
const lgInlineContainer3: React.CSSProperties = {
	width: '200px',
	height: '60px',
	marginTop: '-100px',
};

const mdInlineContainer3: React.CSSProperties = {
	width: '200px',
	height: '60px',
};

const smInlineContainer3: React.CSSProperties = {
	width: '120px',
	height: '40px',
};

const inlineContainer3: React.CSSProperties = {
	display: 'flex',
	borderRadius: '50px',
	backgroundColor: 'white',
	alignItems: 'center',
	justifyContent: 'center',
};

export {
	link3,
	smLink3,
	lgLink3,
	Container3,
	imgHeight3,
	lgContainer3,
	smContainer3,
	smImgHeight3,
	inlineContainer3,
	lgInlineContainer3,
	mdInlineContainer3,
	smInlineContainer3,
};
