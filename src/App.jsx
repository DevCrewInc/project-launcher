import React, { useState } from 'react';
import 'styles/globals.css';
import PrivateLayout from 'layouts/PrivateLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from 'context/userContext';
import {ApolloProvider, ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import Usuarios from 'pages/Usuarios';
import 'styles/globals.css';
import Dialogos from 'pages/Dialogos'
import Proyectos1 from 'pages/Proyectos1';
import Proyectos from 'pages/Proyectos'
import ScrollDialog from 'pages/Perfil';
import Solicitudes from 'pages/Solicitudes';

// import PrivateRoute from 'components/PrivateRoute';
const httpLink = createHttpLink({
  uri: 'https://devcrewserver.herokuapp.com/graphql',
});

const client = new ApolloClient({
  uri: httpLink,
  cache: new InMemoryCache()
})

function App() {
  const [userData, setUserData] = useState({});

  return (
    <ApolloProvider client = {client}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateLayout/>}>
              <Route path='perfil' element={<ScrollDialog/>}/>
              <Route path='proyectos' element={<Proyectos/>}/>
              <Route path='usuarios' element={<Usuarios />} />
              <Route path='solicitudes' element={<Solicitudes />} />
              <Route path='dialogos' element={<Dialogos/>}/>
              <Route path='proyectos1' element={<Proyectos1/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ApolloProvider>
      

  );
}

export default App;
