import React, { useState } from 'react';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserContext } from 'context/userContext';
import Index from 'pages/Index';
import Page2 from 'pages/Page2';
import Usuarios from 'pages/Usuarios';
import IndexCategory1 from 'pages/category1/Index';
import Category1 from 'pages/category1/CategoryPage1';
import 'styles/globals.css';
import LoginPage from 'pages/LoginPage';
import AmpliacionProyecto from 'pages/AmpliacionProyecto';

// import PrivateRoute from 'components/PrivateRoute';

function App() {
  const [userData, setUserData] = useState({});

  return (
    <Auth0Provider
      domain='devcrew.us.auth0.com'
      clientId='bvnpjorcQmG5qb2or5KLfhXFMJK2ISUj'
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    
      // redirectUri='http://localhost:3000/admin'
      // audience='api-autenticacion-concesionario-mintic'
    >
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/' element={<PrivateLayout/>}>
              {/* <Route path='' element={<Index />} /> */}
              <Route path='page2' element={<Page2/>}/>
              <Route path='category1' element={<IndexCategory1 />} />
              <Route path='usuarios' element={<Usuarios />} />
              <Route path='proyecto' element={<AmpliacionProyecto/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </Auth0Provider>
  );
}

export default App;
