import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
	children: JSX.Element;
}

const AdminAuth: FC<Props> = ({ children }) => {
	let location = useLocation();
	const { isAdmin } = useAppSelector((state) => state.user);
	const isLogged: string | null = window.sessionStorage.getItem('isLogged');

	if (!isAdmin) {
		return <Navigate to='/' state={{ from: location }} replace />;
	} else if (isLogged !== 'true') {
		return <Navigate to='/login' state={{ from: location }} replace />;
	} else {
		return children;
	}
};

export default AdminAuth;
