import { Route, Routes } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Product from './pages/Product';
import CheckOut from './pages/CheckOut';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import ThankYou from './pages/ThankYou';
import ResetPass from './pages/ResetPass';
import ForgotPass from './pages/ForgotPass';
import ProductsList from './pages/ProductsList';
import UserDashboard from './pages/UserDashboard';

// Admin Pages
import Update from './pages/AdminPages/Update';
import CreateItem from './pages/AdminPages/CreateItem';
import DeleteItem from './pages/AdminPages/DeleteItem';

// Auth
import UserAuth from './utils/AuthPaths/UserAuth';
import AdminAuth from './utils/AuthPaths/AdminAuth';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/cart' element={<Cart />} />
			<Route path='/login' element={<Login />} />
			<Route path='/contact' element={<Contact />} />
			<Route path='/checkout' element={<CheckOut />} />
			<Route path='/register' element={<Register />} />
			<Route path='/thankYou' element={<ThankYou />} />
			<Route path='/forgetPass' element={<ForgotPass />} />
			<Route path='/productsList' element={<ProductsList />} />
			<Route path='/product/:productId' element={<Product />} />
			<Route path='/resetPass/:id/:token' element={<ResetPass />} />

			<Route
				path='/user'
				element={
					<UserAuth>
						<UserDashboard />
					</UserAuth>
				}
			/>

			<Route
				path='/createItem'
				element={
					<AdminAuth>
						<CreateItem />
					</AdminAuth>
				}
			/>

			<Route
				path='/updateItem'
				element={
					<AdminAuth>
						<Update />
					</AdminAuth>
				}
			/>

			<Route
				path='/deleteItem'
				element={
					<AdminAuth>
						<DeleteItem />
					</AdminAuth>
				}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
};

export default Router;
