import useHome from '../hooks/useHome';
import { Box, useMediaQuery } from '@mui/material';

const Home = () => {
	// Check the screen size:
	const isXs = useMediaQuery('(max-width:600px)');
	const isSm = useMediaQuery('(min-width:601px) and (max-width:960px)');

	const { getHome1stComponent } = useHome();

	return <Box sx={{ display: 'block' }}>{getHome1stComponent(isXs, isSm)}</Box>;
};

export default Home;
