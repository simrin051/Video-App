
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/user';

export const PrivateRoute = ({ path, ...props }) => {
    const {
        state: { token },
    } = useUserContext();

    return token ? (
        <Route {...props} path={path} />
    ) : (
        <Navigate state={{ from: path }} replace to='/signin' />
    );

};

export default PrivateRoute;