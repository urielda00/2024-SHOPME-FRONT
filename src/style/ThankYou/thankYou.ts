import React from "react";
import backImg from '../../assets/ThankPage/back1.jpg'

const StyledContainer: React.CSSProperties = {
	width: '100%',
	height: '88vh',
	display: 'flex',
	opacity: '0.97',
	overflow: 'hidden',
	alignItems: 'center',
	backgroundSize: 'cover',
	justifyContent: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundBlendMode: ' multiply',
	backgroundImage: `url(${backImg})`,
};

const styledImg: React.CSSProperties = {
	width: '20%',
	marginTop: '-50px',
	borderRadius: '50%',
	boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};

const styledBtn = {
	border: '0',
	width: '100%',
	outline: 'none',
	fontSize: '18px',
	cursor: 'pointer',
	marginTop: '50px',
	padding: '10px 0',
	borderRadius: '4px',
	color: 'var(--white) ',
	background: ' #6fd649',
	boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',

	'@media (max-width:768px)': {
		width: '85%',
		marginTop: '25%',
	},
};

const styledPopup = {
	top: '50%',
	left: '50%',
	width: '40%',
	height: '35%',
	color: '#333',
	textAlign: 'center',
	borderRadius: '6px',
	position: 'absolute',
	visibility: 'visible',
	padding: ' 0 30px 30px',
	background: 'var(--white)',
	transform: 'translate(-50%,-50%) scale(1) ',

	'@media (max-width:768px)': {
		width: '55%',
		height: '55%',
	},
};

export { styledImg, styledBtn, styledPopup, StyledContainer };