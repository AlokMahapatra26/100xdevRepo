import { useState } from 'react'
import React, {Suspense} from 'react'
import {Route , Routes , BrowserRouter as Router} from 'react-router-dom'
import { lazy } from 'react';
import Navbar from './pages/Navbar';


const Dashboard = lazy(()=> import('./pages/Dashboard'));
const Landing = lazy(()=> import('./pages/Landing'));

function App() {
  

  return (
    <>
    
      <Router>
      <Navbar/>
        <Routes>
         
          <Route path='/dashboard' element={<Suspense fallback={<div>Loading...</div>}><Dashboard/></Suspense>}/>

          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Landing/></Suspense>}/>
          
          
        </Routes>
      </Router>
    </>
   
  )
}

export default App
