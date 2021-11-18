import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import React,{ useEffect} from 'react';
import PrivateRoute from 'components/PrivateRoute';



const PrivateLayout = () => {
  
  return (
  
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <PrivateRoute>
      <div className='flex w-full h-full'>
        <div className='w-full h-full overflow-y-scroll'>
          <Outlet />
        </div>
      </div>  
      </PrivateRoute>
    </div>
  
  );
};

export default PrivateLayout;
