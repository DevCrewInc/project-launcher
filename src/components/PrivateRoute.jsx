import React from 'react'
import { Outlet } from 'react-router';
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRoute = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    if (isLoading)  return <div>Loading ...</div>;

    return isAuthenticated ? <><Outlet/></> : <div>No estas autorizado para ver este sitio.</div>
    
};

export default PrivateRoute
