import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy imports
const Home = lazy(() => import('./pages/Home'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const Contact = lazy(() => import('./pages/Contact'));
const Product = lazy(() => import('./pages/Product'));
const CheckOut = lazy(() => import('./pages/CheckOut'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Register = lazy(() => import('./pages/Register'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const ResetPass = lazy(() => import('./pages/ResetPass'));
const ForgotPass = lazy(() => import('./pages/ForgotPass'));
const ProductsList = lazy(() => import('./pages/ProductsList'));
const UserDashboard = lazy(() => import('./pages/UserDashboard'));
const Construction = lazy(() => import('./components/Construction'));

// Admin Pages
const Update = lazy(() => import('./pages/AdminPages/Update'));
const CreateItem = lazy(() => import('./pages/AdminPages/CreateItem'));
const DeleteItem = lazy(() => import('./pages/AdminPages/DeleteItem'));

// Auth
import UserAuth from './utils/AuthPaths/UserAuth';
import AdminAuth from './utils/AuthPaths/AdminAuth';

const Router = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
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
				<Route path='underConstruction' element={<Construction />} />
				<Route path='*' element={<Construction />} />{/*<NotFound />*/}
			</Routes>
		</Suspense>
	);
};

export default Router;