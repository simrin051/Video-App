
import React from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import { useUserContext } from './../contexts/user';

export const PrivateRoute = ({ path, ...props }) => {
 const {
        state: { token },
    } = useUserContext();

    return token ? (
        <Outlet/>
    ) : (
        <Navigate state={{ from: path }} replace to='/signin' />
    );
};

export default PrivateRoute;