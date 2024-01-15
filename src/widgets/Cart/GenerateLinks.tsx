import React, { FC } from 'react';
import * as Mui from '@mui/material';
import { Link } from 'react-router-dom';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export interface PropsType {
	src?: string;
	icon: boolean;
	width?: string;
	button: boolean;
	height?: string;
	content?: string;
	marginTop?: string;
	marginBottom?: string;
}

const GenerateLinks: FC<PropsType> = ({ marginBottom, marginTop, src, width, height, content, icon, button }) => {
	return (
		<>
			{icon && (
				<Link to='/productsList' style={{ color: 'black' }}>
					<Mui.IconButton style={{ marginBottom: `${marginBottom}`, marginTop: `${marginTop}`, color: 'black' }} size='small'>
						<KeyboardReturnIcon />
						Back to shop
					</Mui.IconButton>
				</Link>
			)}
			{button && (
				<Link to={`/${src}`}>
					<Mui.Button
						style={{
							marginTop: '10px',
							width: `${width}`,
							textAlign: 'center',
							height: `${height}`,
						}}
						sx={{
							color: 'var(--white)',
							bgcolor: 'var(--cartBtnDarkGrey)',
							':hover': { color: 'var(--black)', bgcolor: 'var(--cartBtnBrightGreen)' },
						}}
					>
						{content}
					</Mui.Button>
				</Link>
			)}
		</>
	);
};

export default GenerateLinks;
