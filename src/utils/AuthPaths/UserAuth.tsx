import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
	children: JSX.Element;
}

const UserAuth: FC<Props> = ({ children }) => {
	let location = useLocation();
	const isLogged: string | null = window.sessionStorage.getItem('isLogged');
	const { user } = useAppSelector((state) => state.user);

	if (!user) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	} else if (isLogged !== 'true') {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}else{
   return children; 
  }
};

export default UserAuth;
