import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as style from '../style/NotFound/NotFound';

const NotFound: React.FunctionComponent = () => {
	return (
		<div style={style.Container}>
			<div style={style.InsideDiv}>
				<h2>Oops! Page not found.</h2>
				<h1 id='h1-notMatch'>404</h1>
				<p>We can't find the page you're looking for.</p>
				<Link to='/'>
					<Button variant='contained' style={style.buttonStyle}>
						Back To Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
