
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

import Home from './pages/home/Home';

const AppRoutes = () => {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        
   
      </Routes>
    </>
  );
}

export default AppRoutes;
