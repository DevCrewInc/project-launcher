import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import React,{ useEffect} from 'react';


const PrivateLayout = () => {
  
  return (
  
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full overflow-y-scroll '>
          <div className = "flex flex-col p-10">

            <Outlet />
          </div> 
        </div>
      </div>  
    </div>
  
  );
};

export default PrivateLayout;
