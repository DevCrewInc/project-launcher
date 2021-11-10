import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import React,{ useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const PrivateLayout = () => {
  const {user, isAuthenticated, isLoading} = useAuth0();

  useEffect(() => {
    console.log(user,isAuthenticated, isLoading);
  },[user, isAuthenticated,isLoading]);

  return (
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full  overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
