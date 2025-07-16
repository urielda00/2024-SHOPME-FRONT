import React from 'react';
import * as Mui from '@mui/material/';
import renderForm from './DynamicFields';
import backGround from '../../assets/contactBackground.jpg';

// Icons
import PhoneIcon from '@mui/icons-material/Phone';

const ContactView = () => {
	const FormSubmitMailLink = process.env.MAIL_LINK;
	const thankYouLink = `${process.env.FRONT_URL}thankYou`;

	return (
		<Mui.Grid container component='main' sx={{ height: '88vh' }}>
			<Mui.Grid item xs={false} sm={4} md={7} sx={imageContainerStyle} />

			<Mui.Grid item xs={12} sm={8} md={5} component={Mui.Paper} elevation={6} square>
				<Mui.Box sx={secContainerStyle}>
					<Mui.Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
						<PhoneIcon />
					</Mui.Avatar>

					<Mui.Typography sx={{ mb: 3 }} component='h1' variant='h5'>
						Contact Us
					</Mui.Typography>

					<Mui.Box action={FormSubmitMailLink} method='POST' component='form' id='contactForm' sx={{ mt: 1 }}>
						<input type='hidden' name='_next' value={thankYouLink}></input>
						<input type='hidden' name='_subject' value='New Contact From SHOPME'></input>
						<input type='hidden' name='_template' value='table' />

						<Mui.Grid container spacing={2}>
							{renderForm()}
						</Mui.Grid>
					</Mui.Box>
				</Mui.Box>
			</Mui.Grid>
		</Mui.Grid>
	);
};

export default ContactView;

const secContainerStyle = {
	my: 8,
	mx: 4,
	display: 'flex',
	alignItems: 'center',
	flexDirection: 'column',
};

const imageContainerStyle: React.CSSProperties = {
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundImage: `url(${backGround})`,
};
