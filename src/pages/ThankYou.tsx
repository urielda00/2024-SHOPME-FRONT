import { Box } from '@mui/material';
import * as style from '../style/ThankYou/thankYou';
import checkImg from '../assets/ThankPage/check1.png';

const ThankYou = () => {
	return (
		<Box style={style.StyledContainer}>
			<Box sx={style.styledPopup}>
				<img src={checkImg} style={style.styledImg} alt='info-received!'></img>

				<h2>Thank you!</h2>
				<p>Your details sent successfully</p>

				<form action='/'>
					<button style={style.styledBtn}>Press here to return</button>
				</form>
			</Box>
		</Box>
	);
};

export default ThankYou;
