import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();

    if (loading) return <p>Loading...</p>; // or your <Loading /> component

    if (!user) return <Navigate to="/admin-login" />;

    return children;
};

export default PrivateRoute;
