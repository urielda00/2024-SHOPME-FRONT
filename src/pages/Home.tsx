import { Box } from '@mui/material';
import useHome from '../hooks/useHome';
import useResponsive from '../hooks/useResponsive';

const Home = () => {
	// Check the screen size:
	const { isXs, isSm } = useResponsive();

	const { getHome1stComponent } = useHome();

	return <Box sx={{ display: 'block' }}>{getHome1stComponent(isXs, isSm)}</Box>;
};

export default Home;
