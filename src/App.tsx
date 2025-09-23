import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { ReactQueryDevtools } from 'react-query/devtools';
import AdminController from './components/AdminController';

import Router from './Router';
const App = () => {
	const { pathname } = useLocation();
	console.log(process.env.BASE_BACK_URL);

	return (
		<>
			<NavBar />
			<AdminController />
			<Router />
			<ScrollToTop />
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
			{pathname !== '/productsList' ? <Footer /> : <div hidden></div>}
		</>
	);
};

export default App;
